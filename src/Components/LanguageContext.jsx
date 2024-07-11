// Cree un componente LanguageContext y envuélvalo Clock dentro de su proveedor.
// Agregue una selectetiqueta al componente en el que Clock se representa el componente que permita al usuario seleccionar el idioma y pasarlo como valor al proveedor.
// Consuma LanguageContextdentro del Clockcomponente mediante el useContext gancho y muestre el mensaje de "hora actual" en el idioma correcto.

import { createContext, useState } from "react";

// Paso 1) Creacion del context ... Un contexto en React permite pasar datos a través de la jerarquía de componentes sin tener que pasar props manualmente en cada nivel.



// Paso 2) Creacion del proveedor que les proporcionará acceso al contexto LanguageContext a otros componentes.


export function LanguageProvider() {

  const [language, setLanguage] = useState("en"); // inicializa el estado language con el valor "en" (inglés) // setLanguage es una función que permite actualizar el estado language.


  function changeLanguage (lang){ // actualiza el estado language con el valor pasado como argumento lang.
    setLanguage(lang);
  };

  return (
   <LanguageContext.Provider value={{language, changeLanguage}}> </LanguageContext.Provider>

  ); // El componente retorna un LanguageContext.Provider con un valor (value) que es un objeto {language, changeLanguage}.
}
