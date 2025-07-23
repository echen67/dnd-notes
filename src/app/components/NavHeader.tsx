"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navStyle = {
  backgroundColor: "red",
  width: "100%",
  padding: 16,
  display: "flex",
  justifyContent: "center",
};

const linkStyle = (isActive: boolean) => {
  return {
    marginRight: 32,
    fontWeight: isActive ? "bold" : "normal",
  };
};

export const NavHeader = () => {
  const pathname = usePathname();

  return (
    <header style={navStyle}>
      <Link href="/characters" style={linkStyle(pathname === "/characters")}>
        Characters
      </Link>
      <Link href="/spells" style={linkStyle(pathname === "/spells")}>
        Spells
      </Link>
      <Link href="/monsters" style={linkStyle(pathname === "/monsters")}>
        Monsters
      </Link>
    </header>
  );
};
