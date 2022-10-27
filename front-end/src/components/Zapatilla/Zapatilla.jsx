import React from 'react'
import { image } from "../../export-de-imagenes";
import "./Zapatilla.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
const Zapatilla = () => {
    return (
        <div className='pagina_producto'>
            <h1 className='nome_product'>Products</h1>
            <div className='container'>
                <a href=""><div className='container_background'></div></a>
                <span className='text_1'>Nike<FontAwesomeIcon icon={faStar} className="star" /></span>
                <div className='box_2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid temporibus </div>
                <span className='box_4'>$100,99</span>
                <div className='box_3'><span className='nome_3'>Add to the cart</span></div>

                {/*<img src={image.red_shoes1} className="image"></img>*/}
            </div>

        </div>
    )
}

export default Zapatilla