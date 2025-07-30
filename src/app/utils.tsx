import Divination from "./icons/divination.png";
import Illusion from "./icons/illusion.png";
import Necromancy from "./icons/necromancy.png";
import Abjuration from "./icons/abjuration.png";
import Enchantment from "./icons/enchantment.png";
import Evocation from "./icons/evocation.png";
import Transmutation from "./icons/transmutation.png";
import Conjuration from "./icons/conjuration.png";

export const BASE_URL = "https://www.dnd5eapi.co";

// Replace _ and - with space and capitalize each word
export const formatString = (str: string) => {
  const newStr = str.replaceAll("_", " ").replaceAll("-", " ");
  const words = newStr.split(" ");
  const result = words.map((word) => {
    if (word.length === 0) return "";
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return result.join(" ");
};

export const displaySpellLevel = (level: number) => {
  switch (level) {
    case 0:
      return "Cantrip";
    case 1:
      return "1st";
    case 2:
      return "2nd";
    case 3:
      return "3rd";
    case 4:
      return "4th";
    case 5:
      return "5th";
    case 6:
      return "6th";
    case 7:
      return "7th";
    case 8:
      return "8th";
    case 9:
      return "9th";
    default:
      return "Invalid Level";
  }
};

export const displaySpellImage = (spellSchool: string) => {
  switch (spellSchool) {
    case "Abjuration":
      return Abjuration;
    case "Conjuration":
      return Conjuration;
    case "Divination":
      return Divination;
    case "Enchantment":
      return Enchantment;
    case "Evocation":
      return Evocation;
    case "Illusion":
      return Illusion;
    case "Necromancy":
      return Necromancy;
    case "Transmutation":
      return Transmutation;
    default:
      return null;
  }
};
