"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navStyle = {
  backgroundColor: "red",
  padding: 16,
  display: "flex",
  justifyContent: "center",
};

const linkStyle = (isActive: boolean) => {
  return {
    marginRight: 32,
    color: "black",
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: "none",
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
