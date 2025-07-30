"use client";
import { useState } from "react";
import { Page } from "../components/Page";
import { SpellTable } from "../components/SpellTable";
import { SpellSearchType } from "../types";

const emptySpellSearch = {
  spellName: "",
  spellClass: "",
  spellLevel: "",
  spellSchool: "",
  spellAttack: "",
  spellDamage: "",
  spellSave: "",
  spellCastingTime: "",
  spellConcentration: "",
  spellRitual: "",
};

export default function SpellsPage() {
  const [spellSearch, setSpellSearch] =
    useState<SpellSearchType>(emptySpellSearch);
  const [doSearch, setDoSearch] = useState(false);

  // TODO: make it so filters only go through once user hits search button
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setDoSearch((prevState) => !prevState);
  };

  const resetFilters = () => {
    setSpellSearch(emptySpellSearch);
  };

  return (
    <Page>
      <h1>Spells</h1>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            marginTop: 24,
          }}
        >
          {/* NAME */}
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <label htmlFor="spellname" className="label">
              Spell Name
            </label>
            <input
              type="text"
              id="spellname"
              value={spellSearch.spellName}
              onChange={(e) =>
                setSpellSearch({ ...spellSearch, spellName: e.target.value })
              }
              placeholder="Search Spell"
              className="textbox"
            />
          </div>

          {/* CLASS */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: 16,
              flex: 1,
            }}
          >
            <label htmlFor="spellClass" className="label">
              Class
            </label>
            <select
              name="spellClass"
              id="spellClass"
              className="dropdown"
              value={spellSearch.spellClass}
              onChange={(e) =>
                setSpellSearch({ ...spellSearch, spellClass: e.target.value })
              }
            >
              <option value="">--</option>
              <option value="bard">Bard</option>
              <option value="cleric">Cleric</option>
              <option value="druid">Druid</option>
              <option value="paladin">Paladin</option>
              <option value="ranger">Ranger</option>
              <option value="sorcerer">Sorcerer</option>
              <option value="warlock">Warlock</option>
              <option value="wizard">Wizard</option>
            </select>
          </div>

          {/* LEVEL */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: 16,
              flex: 1,
            }}
          >
            <label htmlFor="spellLevel" className="label">
              Level
            </label>
            <select
              name="spellLevel"
              id="spellLevel"
              className="dropdown"
              value={spellSearch.spellLevel}
              onChange={(e) =>
                setSpellSearch({ ...spellSearch, spellLevel: e.target.value })
              }
            >
              <option value="">--</option>
              <option value={0}>Cantrip</option>
              <option value={1}>1st</option>
              <option value={2}>2nd</option>
              <option value={3}>3rd</option>
              <option value={4}>4th</option>
              <option value={5}>5th</option>
              <option value={6}>6th</option>
              <option value={7}>7th</option>
              <option value={8}>8th</option>
              <option value={9}>9th</option>
            </select>
          </div>

          {/* SCHOOL */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: 16,
              flex: 1,
            }}
          >
            <label htmlFor="spellSchool" className="label">
              School
            </label>
            <select
              name="spellSchool"
              id="spellSchool"
              className="dropdown"
              value={spellSearch.spellSchool}
              onChange={(e) =>
                setSpellSearch({ ...spellSearch, spellSchool: e.target.value })
              }
            >
              <option value="">--</option>
              <option value="abjuration">Abjuration</option>
              <option value="conjuration">Conjuration</option>
              <option value="divination">Divination</option>
              <option value="enchantment">Enchantment</option>
              <option value="evocation">Evocation</option>
              <option value="illusion">Illusion</option>
              <option value="necromancy">Necromancy</option>
              <option value="transmutation">Transmutation</option>
            </select>
          </div>

          {/* CASTING TIME */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: 16,
              flex: 1,
            }}
          >
            <label htmlFor="spellCastingTime" className="label">
              Casting Time
            </label>
            <select
              name="spellCastingTime"
              id="spellCastingTime"
              className="dropdown"
              value={spellSearch.spellCastingTime}
              onChange={(e) =>
                setSpellSearch({
                  ...spellSearch,
                  spellCastingTime: e.target.value,
                })
              }
            >
              <option value="">--</option>
              <option value="1 action">1 Action</option>
              <option value="1 bonus action">1 Bonus Action</option>
              <option value="1 reaction">1 Reaction</option>
              <option value="1 minute">1 Minute</option>
              <option value="10 minutes">10 Minutes</option>
              <option value="1 hour">1 Hour</option>
              <option value="8 hours">8 Hours</option>
              <option value="12 hours">12 Hours</option>
              <option value="24 hours">24 Hours</option>
            </select>
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

        {/* ADVANCED FILTERS */}
        <div style={{ display: "flex", marginBottom: 48 }}>
          {/* SAVE REQUIRED */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
            }}
          >
            <label htmlFor="spellSave" className="label">
              Save Required
            </label>
            <select
              name="spellSave"
              id="spellSave"
              className="dropdown"
              value={spellSearch.spellSave}
              onChange={(e) =>
                setSpellSearch({ ...spellSearch, spellSave: e.target.value })
              }
            >
              <option value="">--</option>
              <option value="str">Strength</option>
              <option value="dex">Dexterity</option>
              <option value="con">Constitution</option>
              <option value="int">Intelligence</option>
              <option value="wis">Wisdom</option>
              <option value="cha">Charisma</option>
            </select>
          </div>

          {/* ATTACK TYPE */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: 16,
              flex: 1,
            }}
          >
            <label htmlFor="spellAttack" className="label">
              Attack Type
            </label>
            <select
              name="spellAttack"
              id="spellAttack"
              className="dropdown"
              value={spellSearch.spellAttack}
              onChange={(e) =>
                setSpellSearch({ ...spellSearch, spellAttack: e.target.value })
              }
            >
              <option value="">--</option>
              <option value="ranged">Ranged</option>
              <option value="melee">Melee</option>
            </select>
          </div>

          {/* DAMAGE TYPE */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: 16,
              flex: 1,
            }}
          >
            <label htmlFor="spellDamage" className="label">
              Damage Type
            </label>
            <select
              name="spellDamage"
              id="spellDamage"
              className="dropdown"
              value={spellSearch.spellDamage}
              onChange={(e) =>
                setSpellSearch({ ...spellSearch, spellDamage: e.target.value })
              }
            >
              <option value="">--</option>
              <option value="acid">Acid</option>
              <option value="bludgeoning">Bludgeoning</option>
              <option value="cold">Cold</option>
              <option value="fire">Fire</option>
              <option value="force">Force</option>
              <option value="lightning">Lightning</option>
              <option value="necrotic">Necrotic</option>
              <option value="piercing">Piercing</option>
              <option value="poison">Poison</option>
              <option value="psychic">Psychic</option>
              <option value="radiant">Radiant</option>
              <option value="slashing">Slashing</option>
              <option value="thunder">Thunder</option>
            </select>
          </div>

          {/* CONCENTRATION */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: 16,
              flex: 1,
            }}
          >
            <label htmlFor="spellConcentration" className="label">
              Concentration
            </label>
            <select
              name="spellConcentration"
              id="spellConcentration"
              className="dropdown"
              value={spellSearch.spellConcentration}
              onChange={(e) =>
                setSpellSearch({
                  ...spellSearch,
                  spellConcentration: e.target.value,
                })
              }
            >
              <option value="">--</option>
              <option value={1}>Yes</option>
              <option value={0}>No</option>
            </select>
          </div>

          {/* RITUAL */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: 16,
              flex: 1,
            }}
          >
            <label htmlFor="spellRitual" className="label">
              Ritual
            </label>
            <select
              name="spellRitual"
              id="spellRitual"
              className="dropdown"
              value={spellSearch.spellRitual}
              onChange={(e) =>
                setSpellSearch({
                  ...spellSearch,
                  spellRitual: e.target.value,
                })
              }
            >
              <option value="">--</option>
              <option value={1}>Yes</option>
              <option value={0}>No</option>
            </select>
          </div>
        </div>
      </form>

      <SpellTable spellSearch={spellSearch} doSearch={doSearch} />
    </Page>
  );
}
