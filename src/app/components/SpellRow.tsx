import { useState } from "react";
import { getSpellDetails } from "../api";
import { SpellDetails } from "./SpellDetails";
import { SpellDetailsType } from "../types";

export const SpellRow = ({
  index,
  name,
  level,
  castingTime,
  duration,
  range,
  damage,
}: {
  index: string;
  name: string;
  level: string;
  castingTime: string;
  duration: string;
  range: string;
  damage: string;
}) => {
  const [openDetails, setOpenDetails] = useState(false);
  const [spellDetails, setSpellDetails] = useState<SpellDetailsType>(null);

  const handleClickRow = async () => {
    // TODO: only make API call if spellDetails is null and is currently closed; this prevents duplicate API calls if user opens/closes row repeatedly
    const details = await getSpellDetails(index);
    console.log("spell details: ", details);
    setSpellDetails(details);

    setOpenDetails((prevState) => !prevState);
  };

  return (
    <>
      <div key={index} className="tableRow" onClick={handleClickRow}>
        <div className="tableCell" style={{ width: "10%" }}>
          image
        </div>
        <div className="tableCell" style={{ width: "10%" }}>
          {level}
        </div>
        <div className="tableCell" style={{ width: "20%" }}>
          {name}
        </div>
        <div className="tableCell" style={{ width: "10%" }}>
          {castingTime}
        </div>
        <div className="tableCell" style={{ width: "20%" }}>
          {duration}
        </div>
        <div className="tableCell" style={{ width: "10%" }}>
          {range}
        </div>
        <div className="tableCell" style={{ width: "20%" }}>
          {damage}
        </div>
      </div>
      {openDetails && spellDetails && (
        <SpellDetails spellDetails={spellDetails} />
      )}
    </>
  );
};
