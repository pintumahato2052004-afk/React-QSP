import { createContext } from "react";

// Step 1 : create a context using createContext, returns context object
export const myStoreContext = createContext();

const ContextProvider = (props) => {
  console.log(props); // {children : <ContextParent/>

  let data1 = "Hello";
  let data2 = [10, 20, 30];

  // Step 2 : Provide a context with data
  return (
    <myStoreContext.Provider value={{ data1, data2 }}>
      {props.children}
    </myStoreContext.Provider>
  );
};

export default ContextProvider;
