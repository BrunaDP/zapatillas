import React from 'react'
import Navbar from "./components/Navbar/Navbar"
import Section from './components/Section/Section'
import "./App.css"
import "./assets/Fonts/PyxidiumQuickV2.ttf"
import Zapatilla from "./components/Zapatilla/Zapatilla"

const App = () => {
    return (
        <div>
            {/*<Navbar /> */}
            <Section />
            <Zapatilla />
        </div>
    )
}

export default App