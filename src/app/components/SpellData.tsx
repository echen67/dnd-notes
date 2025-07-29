import { useQuery } from "@tanstack/react-query";
import { SpellRow } from "./SpellRow";
import { PAGE_SIZE } from "./SpellTable";

export const SpellData = ({
  page,
  orderByField,
  orderByDirection,
  spellSearch,
}: {
  page: number;
  orderByField: string;
  orderByDirection: string;
  spellSearch: any;
}) => {
  const spellQuery = `query Spells {
  spells (name: "${spellSearch.spellName}", ${
    spellSearch.spellClass && `class: "${spellSearch.spellClass}"`
  }
  ${spellSearch.spellLevel && `level: ${spellSearch.spellLevel}`} 
  ${spellSearch.spellSchool && `school: "${spellSearch.spellSchool}"`} 
  ${spellSearch.spellAttack && `attack_type: "${spellSearch.spellAttack}"`}
  ${spellSearch.spellDamage && `damage_type: "${spellSearch.spellDamage}"`}
  ${spellSearch.spellSave && `dc_type: "${spellSearch.spellSave}"`}
  ${
    spellSearch.spellCastingTime &&
    `casting_time: "${spellSearch.spellCastingTime}"`
  }
  ${
    spellSearch.spellConcentration &&
    `concentration: ${spellSearch.spellConcentration === "1" ? true : false}`
  }
  ${
    spellSearch.spellRitual &&
    `ritual: ${spellSearch.spellRitual === "1" ? true : false}`
  }
  limit: ${PAGE_SIZE}, skip: ${
    page * PAGE_SIZE
  }, order: {by: ${orderByField}, direction: ${orderByDirection}}) {
    index
    casting_time
    level
    name
    duration
    range
    damage {
      damage_type {
        name
        desc
      }
    }
    school {
      name
    }
    attack_type
  }
}`;

  const { isPending, error, data } = useQuery({
    queryKey: [page, orderByField, orderByDirection, spellSearch],
    queryFn: () =>
      fetch("https://www.dnd5eapi.co/graphql/2014", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          operationName: "Spells",
          query: spellQuery,
          variables: {},
        }),
      }).then((res) => res.json()),
  });

  //   if (isPending) return <tr>Loading...</tr>;
  //   if (error) return "An error has occurred: " + error.message;

  // console.log("spell data: ", data);

  return (
    <>
      {data?.data?.spells?.map((spell) => (
        <SpellRow
          key={spell.index}
          index={spell.index}
          name={spell.name}
          level={spell.level}
          castingTime={spell.casting_time}
          duration={spell.duration}
          range={spell.range}
          damage={spell.damage?.damage_type?.name}
        />
      ))}
    </>
  );
};
