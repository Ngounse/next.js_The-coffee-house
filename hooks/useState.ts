import React from "react";

const useStates = (initState = {}) => {
  const [state, setState] = React.useState(initState);

  const handleSetState = (newState: Record<string, any> = {}) => {
    setState((oldState) => ({ ...oldState, ...newState }));
  };

  return [state, handleSetState];
};
export default useStates;
