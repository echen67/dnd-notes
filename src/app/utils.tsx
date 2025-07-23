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
