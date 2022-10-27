import "./Section.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedin, } from '@fortawesome/free-brands-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { image } from "../../export-de-imagenes";
export const Section = () => {
    return (
        <div className="main" id="Home" style={{ backgroundImage: `url(${image.bg1})` }}>
            {/*<img src={image.bg1} className="image"></img>*/}
            {/*seccion del texto*/}
            <div className='column_1'>

                <h1 className="name_1">NIKE</h1><h1 className="name_2">Collection</h1>
                <p className='text-lore'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                    a galley of type and scrambled it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
                <div className="button">
                    <a href="#" className="texto">SHOP NOW <FontAwesomeIcon icon={faChevronRight} className="arrow" /></a>
                </div>



            </div>

            <div className='column_2'>
                <div className="social_icon">
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faLinkedin} />
                </div>
                <img src={image.shoes} className="main_image"></img>
            </div>
        </div >
    )
}

console.log('ok')
export default Section;