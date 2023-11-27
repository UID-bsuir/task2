import Cookies from "js-cookie";

const getCookieByName = (name: string): string => {
  return Cookies.get(name);
};

const setCookie = (name: string, value: string, TTL: number) : void => {
  Cookies.set(name, value, {expires: TTL});
};

export const getLangOrSetDefault = (): string => {
  const cookie = getCookieByName("language");

  const lang = cookie ? cookie : "en";

  
  if (!cookie) {
    setCookie("language", lang, 7);
  }

  
  return lang;
};

export const setLang = (lang: string): void => {
  setCookie("language", lang, 7);
};
