import React from 'react'
import { image } from "../../export-de-imagenes";
import "./Zapatilla.css"
const Zapatilla = () => {
    return (
        <div className='pagina_producto'>
            <h1 className='nome'>Productos</h1>
            <div className='container'>
                <div className='container_background'></div>
                <img src={image.red_shoes1} className="image"></img>
            </div>

        </div>
    )
}

export default Zapatilla