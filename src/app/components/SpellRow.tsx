import { useState } from "react";
import Image from "next/image";
import { getSpellDetails } from "../api";
import { SpellDetails } from "./SpellDetails";
import { SpellDetailsType } from "../types";
import { displaySpellLevel, displaySpellImage } from "../utils";

export const SpellRow = ({
  index,
  name,
  level,
  castingTime,
  duration,
  range,
  damage,
  school,
  components,
}: {
  index: string;
  name: string;
  level: number;
  castingTime: string;
  duration: string;
  range: string;
  damage: string;
  school: string;
  components: string;
}) => {
  const [openDetails, setOpenDetails] = useState(false);
  const [spellDetails, setSpellDetails] = useState<SpellDetailsType>(null);

  const handleClickRow = async () => {
    // Only make API call if spellDetails is null and is currently closed;
    // this prevents duplicate API calls if user opens/closes row repeatedly
    if (!openDetails && spellDetails === null) {
      const details = await getSpellDetails(index);
      setSpellDetails(details);
    }

    setOpenDetails((prevState) => !prevState);
  };

  return (
    <>
      <div key={index} className="tableRow" onClick={handleClickRow}>
        <div className="tableCell" style={{ width: "10%" }}>
          <Image
            className="dark:invert"
            src={displaySpellImage(school)}
            alt="spell icon"
            width={36}
            height={36}
            priority
            style={{
              marginLeft: 8,
              objectFit: "contain",
            }}
          />
        </div>
        <div className="tableCell" style={{ width: "10%", fontSize: 14 }}>
          {displaySpellLevel(level)}
        </div>
        <div className="tableCell" style={{ width: "20%" }}>
          <div>
            {name}
            <p style={{ color: "#777", fontSize: 12, marginTop: 4 }}>
              {school} • {components}
            </p>
          </div>
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
