"use client";
import { RefObject, useEffect, useState } from "react";

export const Tooltip = ({
  children,
  elementRef,
  tooltipContent,
}: {
  children: React.ReactNode;
  elementRef: RefObject<HTMLElement | HTMLButtonElement | null>;
  tooltipContent: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!elementRef.current) {
      return;
    }
  }, [elementRef]);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ width: "max-content" }}
    >
      {children}

      {open && (
        <div
          style={{
            position: "absolute",
            // top: elementRef.current?.getBoundingClientRect().bottom,
            // left: elementRef.current?.getBoundingClientRect().left,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              border: "1px solid gray",
              borderRadius: 8,
              padding: 16,
              fontSize: 14,
            }}
          >
            {tooltipContent}
          </div>
        </div>
      )}
    </div>
  );
};
