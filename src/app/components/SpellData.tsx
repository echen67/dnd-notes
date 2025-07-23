import { useQuery } from "@tanstack/react-query";
import { SpellRow } from "./SpellRow";
import { PAGE_SIZE } from "./SpellTable";

export const SpellData = ({
  page,
  orderByField,
  orderByDirection,
}: {
  page: number;
  orderByField: string;
  orderByDirection: string;
}) => {
  const spellQuery = `query Spells {
  spells (limit: ${PAGE_SIZE}, skip: ${
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
    attack_type
  }
}`;

  const { isPending, error, data } = useQuery({
    queryKey: [page, orderByField, orderByDirection],
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

  console.log("spell data: ", data);

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
