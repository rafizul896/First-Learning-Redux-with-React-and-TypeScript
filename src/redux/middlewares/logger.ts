import { Middleware } from "@reduxjs/toolkit";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const logger: Middleware = (state) => (next) => (action: any) => {
  console.group(action.type);
  console.log("Pre State", state.getState());
  const result = next(action);
  console.log("Next State", state.getState());
  console.groupEnd();
  return result;
};

export default logger;
