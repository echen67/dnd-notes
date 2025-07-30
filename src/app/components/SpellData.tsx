import { useQuery } from "@tanstack/react-query";
import { SpellRow } from "./SpellRow";
import { PAGE_SIZE } from "./SpellTable";
import { SpellSearchType, SpellType } from "../types";

export const SpellData = ({
  page,
  orderByField,
  orderByDirection,
  spellSearch,
  doSearch,
}: {
  page: number;
  orderByField: string;
  orderByDirection: string;
  spellSearch: SpellSearchType;
  doSearch: boolean;
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
    attack_type
    casting_time
    components
    duration
    index
    level
    name
    range
    area_of_effect {
      size
      type
    }
    damage {
      damage_type {
        name
        desc
      }
    }
    school {
      name
    }
  }
}`;

  const { isPending, error, data } = useQuery({
    queryKey: [page, orderByField, orderByDirection, doSearch],
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

  return (
    <>
      {data?.data?.spells?.map((spell: SpellType) => (
        <SpellRow
          key={spell.index}
          index={spell.index}
          name={spell.name}
          level={spell.level}
          castingTime={spell.casting_time}
          duration={spell.duration}
          range={spell.range}
          damage={spell.damage?.damage_type?.name}
          school={spell.school.name}
          components={spell.components.join(", ")}
        />
      ))}
    </>
  );
};
