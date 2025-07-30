import Image from "next/image";
import Arrow from "../icons/arrow.png";

export const SortArrow = ({
  orderByField,
  orderByAsc,
  field,
}: {
  orderByField: string;
  orderByAsc: boolean;
  field: string;
}) => {
  return (
    <Image
      className="dark:invert"
      src={Arrow}
      alt="arrow icon"
      width={12}
      height={12}
      priority
      style={{
        transform: orderByAsc && orderByField === field ? "" : "rotate(180deg)",
        marginLeft: 4,
        objectFit: "contain",
        opacity: orderByField === field ? 1 : 0.25,
        cursor: "pointer",
      }}
    />
  );
};
