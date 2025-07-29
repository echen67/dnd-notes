import { useRef, useState, useEffect } from "react";
import { Tooltip } from "./Tooltip";
import { getProficiencyInfo } from "../api";
import { formatString } from "../utils";
import { Proficiency } from "../types";

export const MonsterProficiences = ({
  proficiencies,
}: {
  proficiencies: Proficiency[];
}) => {
  if (!proficiencies) return;

  const [proficiencyInfo, setProficiencyInfo] = useState();

  // Fetch description for each proficiency this monster has
  useEffect(() => {
    const fetchData = async () => {
      const info: any = {};

      for (let p of proficiencies) {
        if (p.proficiency.index.includes("skill")) {
          const result = await getProficiencyInfo(p.proficiency.index.slice(6));
          info[result.index] = result.desc[0];
        }
      }
      setProficiencyInfo(info);
    };

    fetchData();
  }, []);

  const savingThrows = [];
  const skills = [];

  // Iterate through the monster's proficiencies and separate skills vs saving throws, and format
  for (let p of proficiencies) {
    if (p.proficiency.index.includes("saving-throw")) {
      const field = p.proficiency.index.slice(13);
      savingThrows.push(field.toUpperCase() + ` +${p.value}`);
    } else {
      const skillRef = useRef<HTMLParagraphElement>(null);
      const field = p.proficiency.index.slice(6);

      skills.push(
        <Tooltip
          elementRef={skillRef}
          tooltipContent={
            proficiencyInfo && proficiencyInfo[p.proficiency.index.slice(6)]
          }
          key={p.proficiency.index}
        >
          <p ref={skillRef} style={{ marginRight: 4 }}>
            <span style={{ textDecoration: "underline" }}>
              {formatString(field)}
            </span>
            {` +${p.value}`}
          </p>
        </Tooltip>
      );
    }
  }

  return (
    <>
      <p>
        <b>Saving Throws</b> {savingThrows.join(" ")}
      </p>
      <div style={{ display: "flex" }}>
        <p style={{ marginRight: 4 }}>
          <b>Skills</b>
        </p>
        {skills}
      </div>
    </>
  );
};
