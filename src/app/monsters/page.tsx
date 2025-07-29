"use client";
import { useState } from "react";
import { Page } from "../components/Page";
import { MonsterTable } from "../components/MonsterTable";
import { MonsterSearch } from "../types";

const emptyMonsterSearch = {
  monsterName: "",
  monsterSize: "",
  monsterType: "",
  monsterCRLower: "",
  monsterCRUpper: "",
};

export default function MonstersPage() {
  const [monsterSearch, setMonsterSearch] =
    useState<MonsterSearch>(emptyMonsterSearch);
  const [doSearch, setDoSearch] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setDoSearch((prevState) => !prevState);
  };

  const resetFilters = () => {
    setMonsterSearch(emptyMonsterSearch);
  };

  return (
    <Page>
      <h1>Monsters</h1>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            marginBottom: 32,
            marginTop: 16,
          }}
        >
          {/* NAME */}
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <label htmlFor="monstername" className="label">
              Monster Name
            </label>
            <input
              type="text"
              id="monstername"
              value={monsterSearch.monsterName}
              onChange={(e) =>
                setMonsterSearch({
                  ...monsterSearch,
                  monsterName: e.target.value,
                })
              }
              placeholder="Search Monster"
              className="textbox"
            />
          </div>

          {/* SIZE */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: 16,
              flex: 1,
            }}
          >
            <label htmlFor="size" className="label">
              Size
            </label>
            <select
              name="size"
              id="size"
              className="dropdown"
              value={monsterSearch.monsterSize}
              onChange={(e) =>
                setMonsterSearch({
                  ...monsterSearch,
                  monsterSize: e.target.value,
                })
              }
            >
              <option value="">--</option>
              <option value="Tiny">Tiny</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
              <option value="Huge">Huge</option>
              <option value="Gargantuan">Gargantuan</option>
            </select>
          </div>

          {/* TYPE */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: 16,
              flex: 1,
            }}
          >
            <label htmlFor="type" className="label">
              Type
            </label>
            <select
              name="type"
              id="type"
              className="dropdown"
              value={monsterSearch.monsterType}
              onChange={(e) =>
                setMonsterSearch({
                  ...monsterSearch,
                  monsterType: e.target.value,
                })
              }
            >
              <option value="">--</option>
              <option value="aberration">Aberration</option>
              <option value="beast">Beast</option>
              <option value="celestial">Celestial</option>
              <option value="construct">Construct</option>
              <option value="dragon">Dragon</option>
              <option value="elemental">Elemental</option>
              <option value="fey">Fey</option>
              <option value="fiend">Fiend</option>
              <option value="giant">Giant</option>
              <option value="humanoid">Humanoid</option>
              <option value="monstrosity">Monstrosity</option>
              <option value="ooze">Ooze</option>
              <option value="plant">Plant</option>
              <option value="swarm">Swarm of Tiny Beasts</option>
              <option value="undead">Undead</option>
            </select>
          </div>

          {/* CR */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: 16,
              flex: 1,
            }}
          >
            <label htmlFor="cr" className="label">
              Challenge Rating
            </label>
            <div style={{ display: "flex" }}>
              <select
                name="cr_lower"
                id="cr_lower"
                className="dropdown"
                style={{ width: "100%" }}
                value={monsterSearch.monsterCRLower}
                onChange={(e) =>
                  setMonsterSearch({
                    ...monsterSearch,
                    monsterCRLower: e.target.value,
                  })
                }
              >
                <option value={""}>--</option>
                <option value={0}>0</option>
                {Array.from(Array(30).keys()).map((item) => (
                  <option key={item} value={item + 1}>
                    {item + 1}
                  </option>
                ))}
              </select>
              <select
                name="cr_upper"
                id="cr_upper"
                className="dropdown"
                style={{ marginLeft: 8, width: "100%" }}
                value={monsterSearch.monsterCRUpper}
                onChange={(e) =>
                  setMonsterSearch({
                    ...monsterSearch,
                    monsterCRUpper: e.target.value,
                  })
                }
              >
                <option value={""}>--</option>
                <option value={0}>0</option>
                {Array.from(Array(30).keys()).map((item) => (
                  <option key={item} value={item + 1}>
                    {item + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* BUTTONS */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 22,
              marginLeft: 16,
              flex: 1,
            }}
          >
            <button type="submit" className="mainButton">
              Search
            </button>
            <button onClick={resetFilters} className="secondaryButton">
              Reset Filters
            </button>
          </div>
        </div>
      </form>

      <MonsterTable monsterSearch={monsterSearch} doSearch={doSearch} />
    </Page>
  );
}
