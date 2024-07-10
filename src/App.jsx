import React from 'react'
import { Colors } from './Components/Colors'

const App = () => {
   const colorList = [
        { name: "red", id: 1 },
        { name: "blue", id: 2 },
        { name: "pink", id: 3 }
    ]
    return (
        <div>
            <Colors
          colors={colorList}
            />
        </div>

    )
}

export default App