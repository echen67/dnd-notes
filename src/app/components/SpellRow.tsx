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
  return (
    <>
      <div key={index} className="tableRow">
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
      {/* TODO: spell details */}
    </>
  );
};
