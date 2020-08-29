import React, { useReducer } from "react";
import EmployeeList from "./EmplyeeList";
import EmpFilter from "./EmpFilter";
import { Reducer } from "./Reducer";
export const context = React.createContext();

const Home = () => {
  const [state, dispatch] = useReducer(Reducer);
  return (
    <>
      <div className="emp-container">
        <context.Provider value={dispatch}>
          <EmpFilter />
          <div className="emp-list-container">
            <EmployeeList state={state} />
          </div>{" "}
        </context.Provider>
      </div>
    </>
  );
};

export default Home;
