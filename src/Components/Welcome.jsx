
import { Age } from "./Age"

export function Welcome({ name, age }) {

    const olderThan18 = age > 18;
    const youngestThan65 = age < 65;
    const isJohn = name === "Jhon";

    //los props condicionales se representan en el padre donde la forma basica de existencia es <Age age={age}/>==>que es donde se asignan los valores
    //entonces a esta funcionalidad le agregamos la condición
    return (
        <div>
            <p>¡Bienvenido, {name}!</p>
            {age && <Age age={age} />} {/* Se representa si la propiedad de age está presente */}
            {olderThan18 && <Age age={age} />} {/* Se representa si la propiedad de age es mayor que 18 */}
            {olderThan18 && youngestThan65 && <Age age={age} />} {/* Se representa si la propiedad de age está entre 18 y 65 */}
            {olderThan18 && youngestThan65 && isJohn && <Age age={age} />} {/* Se representa si la propiedad de edad está entre 18 y 65 y la propiedad de nombre es "John" */}


        </div>
    );
}

