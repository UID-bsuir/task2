import Cookies from "js-cookie";

export const getLangOrSetDefault = (): string => {
  const cookie = Cookies.get("language");

  const lang = cookie ? cookie : "en";

  if (!cookie) {
    Cookies.set("language", lang, {expires: 7});
  }

  return lang;
};

export const setLang = (lang: string): void => {
  Cookies.set("language", lang, 7);
};

export const getArtistIndexOrSet = (numberOfArtists: number): number => {
  
  const cookie = parseInt(Cookies.get("artist"));
  
  const index = Math.round(Math.random()* numberOfArtists);
  
  if (!cookie) {
    Cookies.set("artist", `${index}`, {expires: 1});
    return index < numberOfArtists ? index : (numberOfArtists - 1); 
  } 
  
  return cookie;
};
 