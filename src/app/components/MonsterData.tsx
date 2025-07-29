import { useQuery } from "@tanstack/react-query";
import { MonsterRow } from "./MonsterRow";
import { PAGE_SIZE } from "./MonsterTable";
import { MonsterType, MonsterSearch } from "../types";

export const MonsterData = ({
  page,
  orderByField,
  orderByDirection,
  monsterSearch,
  doSearch,
}: {
  page: number;
  orderByField: string;
  orderByDirection: string;
  monsterSearch: MonsterSearch;
  doSearch: boolean;
}) => {
  const monsterQuery = `query Monsters {
    monsters (name: "${monsterSearch.monsterName}", size: "${
    monsterSearch.monsterSize
  }", type: "${monsterSearch.monsterType}", 
    challenge_rating: { range: { gte: ${
      monsterSearch.monsterCRLower || 0
    }, lte: ${
    monsterSearch.monsterCRUpper || 30
  } } } limit: ${PAGE_SIZE}, skip: ${
    page * PAGE_SIZE
  }, order: {by: ${orderByField}, direction: ${orderByDirection}}) {
      challenge_rating
      image
      index
      name
      size
      alignment
      type
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
          operationName: "Monsters",
          query: monsterQuery,
          variables: {},
        }),
      }).then((res) => res.json()),
  });

  //   if (isPending) return <tr>Loading...</tr>;
  //   if (error) return "An error has occurred: " + error.message;

  return (
    <>
      {data?.data?.monsters?.map((monster: MonsterType) => (
        <MonsterRow
          key={monster.index}
          index={monster.index}
          image={monster.image}
          name={monster.name}
          cr={monster.challenge_rating}
          type={monster.type}
          size={monster.size}
          alignment={monster.alignment}
        />
      ))}
    </>
  );
};
