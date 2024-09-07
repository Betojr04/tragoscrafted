import React, { createContext, useReducer, useContext } from "react";

const AppContext = createContext();

const initialState = {
  message: null,
  demo: [
    { title: "FIRST", background: "white", initial: "white" },
    { title: "SECOND", background: "white", initial: "white" }
  ]
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_MESSAGE":
      return { ...state, message: action.payload };
    case "CHANGE_COLOR":
      return {
        ...state,
        demo: state.demo.map((item, index) =>
          index === action.index ? { ...item, background: action.color } : item
        )
      };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setMessage = (message) => {
    dispatch({ type: "SET_MESSAGE", payload: message });
  };

  const changeColor = (index, color) => {
    dispatch({ type: "CHANGE_COLOR", index, color });
  };

  return (
    <AppContext.Provider value={{ state, setMessage, changeColor }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
