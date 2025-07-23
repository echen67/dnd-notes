'use client';

import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from '@tanstack/react-query'

const queryClient = new QueryClient()
const BASE_URL = "https://www.dnd5eapi.co";

export async function getAllSpells() {
  return fetch(BASE_URL + "/api/2014/spells").then((response) => response.json());
}

function Example() {
    const { isPending, error, data } = useQuery({
      queryKey: ['monsters'],
      queryFn: () =>
        fetch('https://www.dnd5eapi.co/graphql/2014', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                operationName: "Monsters",
                query: "query Monsters {\n  monsters {\n    hit_points\n  }\n}",
                variables: {}
            })
        }).then((res) =>
          res.json(),
        ),
    })
  
    if (isPending) return 'Loading...'
  
    if (error) return 'An error has occurred: ' + error.message

    console.log("DATA: ", data);
  
    return (
      <div>
        {/* <h1>{data.name}</h1>
        <p>{data.description}</p>
        <strong>👀 {data.subscribers_count}</strong>{' '}
        <strong>✨ {data.stargazers_count}</strong>{' '}
        <strong>🍴 {data.forks_count}</strong> */}
      </div>
    )
  }

export const MyButton = () => (
    <QueryClientProvider client={queryClient}>
        {/* <button onClick={handleClick}>A button</button> */}
        <Example />
    </QueryClientProvider>
)
async function handleClick() {
    const spells = await getAllSpells();
    console.log("When did you notice?");
    console.log("SPELLS: ", spells);
}