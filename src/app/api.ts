import { BASE_URL } from "./utils";

export function getMonsters() {
  return fetch(BASE_URL + "/api/2014/monsters").then((res) => {
    return res.json();
  });
}

export async function getMonsterDetails(index: string) {
  return fetch(`https://www.dnd5eapi.co/api/2014/monsters/${index}`).then(
    (res) => res.json()
  );
}

export async function getProficiencyInfo(skill: string) {
  return fetch(BASE_URL + `/api/2014/skills/${skill}`).then((res) =>
    res.json()
  );
}
