"use client";
import { useState } from "react";
import { BASE_URL, formatString } from "../utils";
import { MonsterDetails } from "./MonsterDetails";
import { getMonsterDetails } from "../api";

export const MonsterRow = ({
  index,
  image,
  name,
  cr,
  type,
  size,
  alignment,
}: {
  index: string;
  image: string;
  name: string;
  cr: string;
  type: string;
  size: string;
  alignment: string;
}) => {
  const [openDetails, setOpenDetails] = useState(false);
  const [monsterDetails, setMonsterDetails] = useState<any>(null);

  //   useEffect(() => {
  //     const details = getMonsterDetails(index).then((res) => {
  //       console.log("monster details: ", details);
  //     });
  //   }, [index]);

  const handleClickRow = async () => {
    // TODO: only make API call if monsterDetails is null and is currently closed; this prevents duplicate API calls if user opens/closes row repeatedly
    const details = await getMonsterDetails(index);
    console.log("monster details: ", details);
    setMonsterDetails(details);

    setOpenDetails((prevState) => !prevState);
  };

  return (
    <>
      <div key={index} className="tableRow" onClick={handleClickRow}>
        <div className="tableCell" style={{ width: "10%" }}>
          <img
            src={BASE_URL + image}
            alt={name}
            width={32}
            height={32}
            style={{ objectFit: "cover", minHeight: 32, maxHeight: 32 }}
          />
        </div>
        <div className="tableCell" style={{ width: "20%" }}>
          {name}
        </div>
        <div className="tableCell" style={{ width: "10%" }}>
          {cr}
        </div>
        <div className="tableCell" style={{ width: "20%" }}>
          {formatString(type)}
        </div>
        <div className="tableCell" style={{ width: "10%" }}>
          {size}
        </div>
        <div className="tableCell" style={{ width: "30%" }}>
          {formatString(alignment)}
        </div>
      </div>
      {openDetails && monsterDetails && (
        <MonsterDetails monsterDetails={monsterDetails} />
      )}
    </>
  );
};
