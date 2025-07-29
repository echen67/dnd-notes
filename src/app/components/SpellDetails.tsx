import { Divider } from "./Divider";
import { SpellDetailsType } from "../types";

const titleStyle = {
  fontWeight: "bold",
  marginBottom: 4,
};

export const SpellDetails = ({
  spellDetails,
}: {
  spellDetails: SpellDetailsType;
}) => {
  return (
    <div className="detailPanel">
      <div style={{ display: "flex", marginBottom: 16 }}>
        <div style={{ width: "25%" }}>
          <p style={titleStyle}>LEVEL</p>
          <p>{spellDetails.level}</p>
        </div>

        <div style={{ width: "25%" }}>
          <p style={titleStyle}>CASTING TIME</p>
          <p>{spellDetails.casting_time}</p>
        </div>

        <div style={{ width: "25%" }}>
          <p style={titleStyle}>RANGE/AREA</p>
          <p>
            {spellDetails.range}{" "}
            {spellDetails?.area_of_effect &&
              `(${spellDetails.area_of_effect.size} ${spellDetails.area_of_effect.type})`}
          </p>
        </div>

        <div style={{ width: "25%" }}>
          <p style={titleStyle}>COMPONENTS</p>
          <p>
            {spellDetails.components.join(", ")} {spellDetails.material && "*"}
          </p>
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <div style={{ width: "25%" }}>
          <p style={titleStyle}>DURATION</p>
          <p>{spellDetails.duration}</p>
        </div>

        <div style={{ width: "25%" }}>
          <p style={titleStyle}>SCHOOL</p>
          <p>{spellDetails.school.name}</p>
        </div>

        <div style={{ width: "25%" }}>
          <p style={titleStyle}>ATTACK/SAVE</p>
          <p>{spellDetails.dc?.dc_type.name || "None"}</p>
        </div>

        <div style={{ width: "25%" }}>
          <p style={titleStyle}>DAMAGE/EFFECT</p>
          <p>{spellDetails.damage?.damage_type.name || "None"}</p>
        </div>
      </div>

      <div style={{ marginTop: 24, marginBottom: 24 }}>
        <Divider />
      </div>

      {spellDetails.desc.map((item) => (
        <p key={item} style={{ lineHeight: 1.8 }}>
          {item}
        </p>
      ))}

      {spellDetails.material && (
        <p
          style={{
            marginTop: 16,
            marginBottom: 24,
            fontStyle: "italic",
            fontSize: 12,
          }}
        >
          * - {spellDetails.material}
        </p>
      )}

      <p style={{ marginTop: 16, fontSize: 12 }}>
        Classes:{" "}
        {spellDetails.classes.map((item, index) => {
          return (
            item.name + (spellDetails.classes.length - 1 !== index ? ", " : "")
          );
        })}
      </p>
    </div>
  );
};
