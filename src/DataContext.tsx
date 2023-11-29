import React, { useContext } from "react";
import { createContext } from "react";
import db from "./assets/data/database.json";
import { Database } from "./DbScheme.ts";
import { getLangOrSetDefault } from "./Utils/Cookies.ts";

const DatabaseContext = createContext<Database>(db["en"]);

export function DataProvider({ children }: { children: React.ReactNode }) {
  const lang = getLangOrSetDefault().toLowerCase();

  return (
    <DatabaseContext.Provider value={db[lang]}>
      {children}
    </DatabaseContext.Provider>
  );
}

export function useDatabase(): Database {
  return useContext(DatabaseContext);
}
