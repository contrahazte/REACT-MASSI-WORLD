import { React, useState, createContext} from "react";
import { Clock } from "./Components/Clock";


export const LanguageContext = createContext();

export function App() {

  // const lenguages = ["english", "spanish", "german", "japanese", "italian"];

  const [select, setSelect] = useState("spanish");

  function handleSelect(event) {
    setSelect(event.target.value);
  }

  console.log(select);
  return (
    <div>
      <form>
        <select value={select} onChange={handleSelect}>
         <option value="english" >english</option>
         <option value="spanish">spanish</option>
         <option value="german" >german</option>
        </select>
      </form>

      <LanguageContext.Provider value={select}> 
      <Clock/>
      </LanguageContext.Provider>

    </div>
  );
}