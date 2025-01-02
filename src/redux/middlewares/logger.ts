const logger = (state) => (next) => (action) => {
  console.group(action.type);
  console.log("Pre State", state.getState());
  const result = next(action);
  console.log("Next State", state.getState());
  console.groupEnd();
  return result;
};

export default logger;
