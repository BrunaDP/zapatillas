import React from 'react'
import { image } from "../../export-de-imagenes";
import "./Zapatilla.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons'
const Zapatilla = () => {
    return (
        <div className='nav_product'>
            <h1 className='nome_product'>Products</h1>
            <div className='product_card'>
                <a href="">
                    <div className='container_background'>
                        <div className='cuadrado'>
                            <FontAwesomeIcon icon={faHeart} className="corazon" />
                        </div>
                    </div>
                </a>
                <span className='product-name'>Nike
                    <div> <FontAwesomeIcon icon={faStar} className="star" />
                        <FontAwesomeIcon icon={faStar} className="star" />
                        <FontAwesomeIcon icon={faStar} className="star" />
                        <FontAwesomeIcon icon={faStar} className="star" />
                        <FontAwesomeIcon icon={faStar} className="star" /></div></span>
                <div className='description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid temporibus </div>
                <span className='precio'>U$S100.99</span>
                <span><h1 id='box_3'>Add to the cart</h1></span>

                {/*<img src={image.red_shoes1} className="image"></img>*/}
            </div>

        </div>
    )
}

export default Zapatilla