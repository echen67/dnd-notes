import { Fragment } from "react";
import { formatString } from "../utils";
import { MonsterProficiences } from "./MonsterProficiencies";

const BoldItalicSpan = ({ children }: { children: any }) => {
  return (
    <span style={{ fontWeight: "bold", fontStyle: "italic" }}>{children}</span>
  );
};

const StatBlock = ({ children }: { children: any }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginRight: 16,
    }}
  >
    {children}
  </div>
);

export const MonsterDetails = ({ monsterDetails }: { monsterDetails: any }) => {
  return (
    <div className="detailPanel">
      <h2>{monsterDetails.name}</h2>
      <hr />
      <p
        style={{
          marginTop: 4,
          marginBottom: 16,
          color: "#777",
          fontStyle: "italic",
        }}
      >
        {monsterDetails.size} {monsterDetails.type}, {monsterDetails.alignment}
      </p>

      <div style={{ display: "flex", color: "#5b160c", lineHeight: 1.6 }}>
        <div style={{ width: "50%" }}>
          <p>
            <b>Armor Class</b> {monsterDetails.armor_class[0].value} (
            {monsterDetails.armor_class[0].type})
          </p>
          <p>
            <b>Hit Points</b> {monsterDetails.hit_points} (
            {monsterDetails.hit_points_roll})
          </p>
          <p>
            <b>Speed</b> {monsterDetails.speed.walk}
            {monsterDetails.speed.swim && ", swim " + monsterDetails.speed.swim}
            {monsterDetails.speed.fly && ", fly " + monsterDetails.speed.fly}
          </p>

          <div style={{ display: "flex", marginTop: 16 }}>
            <StatBlock>
              <p style={{ fontWeight: "bold" }}>STR</p>
              <p>{monsterDetails.strength}</p>
            </StatBlock>
            <StatBlock>
              <p style={{ fontWeight: "bold" }}>DEX</p>
              <p>{monsterDetails.dexterity}</p>
            </StatBlock>
            <StatBlock>
              <p style={{ fontWeight: "bold" }}>CON</p>
              <p>{monsterDetails.constitution}</p>
            </StatBlock>
            <StatBlock>
              <p style={{ fontWeight: "bold" }}>INT</p>
              <p>{monsterDetails.intelligence}</p>
            </StatBlock>
            <StatBlock>
              <p style={{ fontWeight: "bold" }}>WIS</p>
              <p>{monsterDetails.wisdom}</p>
            </StatBlock>
            <StatBlock>
              <p style={{ fontWeight: "bold" }}>CHA</p>
              <p>{monsterDetails.charisma}</p>
            </StatBlock>
          </div>
        </div>

        <div style={{ width: "50%" }}>
          <MonsterProficiences proficiencies={monsterDetails?.proficiencies} />

          <p>
            <b>Senses</b>{" "}
            {Object.entries(monsterDetails.senses).map((item: any) => (
              <Fragment key={item[0]}>
                {formatString(item[0])} {item[1]},{" "}
              </Fragment>
            ))}
          </p>
          <p>
            <b>Languages</b> {monsterDetails.languages}
          </p>
          <p>
            <b>Challenge</b> {monsterDetails.challenge_rating} (
            {monsterDetails.xp} XP)
          </p>
          <p>
            <b>Proficiency Bonus</b> +{monsterDetails.proficiency_bonus}
          </p>
        </div>
      </div>

      {/* SPECIAL ABILITIES */}
      {monsterDetails.special_abilities.length > 0 && (
        <div style={{ marginTop: 24 }}>
          <h3>Special Abilities</h3>
          <hr style={{ marginBottom: 8 }} />
          {monsterDetails.special_abilities.map((item: any) => (
            <p
              style={{ marginBottom: 8, whiteSpace: "break-spaces" }}
              key={item.name}
            >
              <BoldItalicSpan>{item.name}.</BoldItalicSpan> {item.desc}
            </p>
          ))}
        </div>
      )}

      {/* ACTIONS */}
      {monsterDetails.actions.length > 0 && (
        <div style={{ marginTop: 24 }}>
          <h3>Actions</h3>
          <hr style={{ marginBottom: 8 }} />
          {monsterDetails.actions.map((item: any) => (
            <p
              style={{ marginBottom: 8, whiteSpace: "break-spaces" }}
              key={item.name}
            >
              <BoldItalicSpan>{item.name}.</BoldItalicSpan> {item.desc}
            </p>
          ))}
        </div>
      )}

      {/* LEGENDARY ACTIONS */}
      {monsterDetails.legendary_actions.length > 0 && (
        <div style={{ marginTop: 24 }}>
          <h3>Legendary Actions</h3>
          <hr style={{ marginBottom: 8 }} />
          {monsterDetails.legendary_actions.map((item: any) => (
            <p
              style={{ marginBottom: 8, whiteSpace: "break-spaces" }}
              key={item.name}
            >
              <BoldItalicSpan>{item.name}.</BoldItalicSpan> {item.desc}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
