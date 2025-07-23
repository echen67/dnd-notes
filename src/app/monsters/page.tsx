"use client";
import { useState } from "react";
import { Page } from "../components/Page";
import { MonsterTable } from "../components/MonsterTable";

const inputStyle = {
  border: "1px solid gray",
  borderRadius: 8,
  paddingLeft: 8,
  height: 44,
};

const selectStyle = {
  border: "1px solid gray",
  borderRadius: 8,
  paddingLeft: 8,
  height: 48,
};

const secondaryButtonStyle = {
  color: "red",
  cursor: "pointer",
  fontWeight: "bold",
  border: "none",
  backgroundColor: "transparent",
  marginTop: 4,
};

const labelStyle = {
  fontWeight: "bold",
  marginBottom: 4,
};

export default function MonstersPage() {
  const [monsterSearch, setMonsterSearch] = useState("");
  const [monsterSize, setMonsterSize] = useState("");
  const [monsterType, setMonsterType] = useState("");
  const [monsterCRLower, setMonsterCRLower] = useState("");
  const [monsterCRUpper, setMonsterCRUpper] = useState("");

  // TODO: make it so filters only go through once user hits search button
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("submitted form");
  };

  const resetFilters = () => {
    setMonsterSearch("");
    setMonsterSize("");
    setMonsterType("");
    setMonsterCRLower("");
    setMonsterCRUpper("");
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
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="monstername" style={labelStyle}>
              Monster Name
            </label>
            <input
              type="text"
              id="monstername"
              value={monsterSearch}
              onChange={(e) => setMonsterSearch(e.target.value)}
              placeholder="Search Monster"
              style={inputStyle}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: 8,
            }}
          >
            <label htmlFor="size" style={labelStyle}>
              Size
            </label>
            <select
              name="size"
              id="size"
              style={selectStyle}
              value={monsterSize}
              onChange={(e) => setMonsterSize(e.target.value)}
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

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: 8,
            }}
          >
            <label htmlFor="type" style={labelStyle}>
              Type
            </label>
            <select
              name="type"
              id="type"
              style={selectStyle}
              value={monsterType}
              onChange={(e) => setMonsterType(e.target.value)}
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

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: 8,
            }}
          >
            <label htmlFor="cr" style={labelStyle}>
              Challenge Rating
            </label>
            <div style={{ display: "flex" }}>
              <select
                name="cr_lower"
                id="cr_lower"
                style={{ ...selectStyle, width: 80 }}
                value={monsterCRLower}
                onChange={(e) => setMonsterCRLower(e.target.value)}
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
                style={{ ...selectStyle, marginLeft: 8, width: 80 }}
                value={monsterCRUpper}
                onChange={(e) => setMonsterCRUpper(e.target.value)}
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

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 22,
            }}
          >
            <button type="submit" className="mainButton">
              Search
            </button>
            <button onClick={resetFilters} style={secondaryButtonStyle}>
              Reset Filters
            </button>
          </div>
        </div>
      </form>

      <MonsterTable
        monsterSearch={monsterSearch}
        monsterSize={monsterSize}
        monsterType={monsterType}
        monsterCRLower={monsterCRLower}
        monsterCRUpper={monsterCRUpper}
      />
    </Page>
  );
}
