import React, { useContext } from "react";
import { LanguageContext } from "../App";

export function Clock() {

  // Consume el contexto LanguageContext usando useContext.
  // const  language  = useContext(LanguageContext);

  // function getCurrentTime() {
  //   const now = new Date();
  //   return now.toLocaleTimeString(language); // / Obtener la hora actual en el formato del idioma seleccionado
  // }
 // Un objeto que contiene mensajes en diferentes idiomas para mostrar el texto "hora actual".

 const date = new Date();
 const hours = date.getHours();
 const minutes = date.getMinutes().toString().padStart(2, "0");
 
 const language = useContext(LanguageContext);

 const messages = {
  english: `Current time: ${hours}:${minutes}`,
  spanish: `Hora actual: ${hours}:${minutes}`,
  german: `Aktuelle Uhrzeit: ${hours}:${minutes}`,
};

  return <div>
          <h1>{messages[language]}</h1>
         </div>;
}
