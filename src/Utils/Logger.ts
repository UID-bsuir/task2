import React from "react";

class Logger {
  logError = (e: Error, eInfo: React.ErrorInfo) => {
    console.error("Error:", e);
    console.error("Error info:", eInfo);
  };
}

export const logger = new Logger;
