import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    /*const nav = [{ id: 0, name: "home" }, { id: 1, name: "about" }, { id: 2, name: "work" }, { id: 3, name: "skills" }, { id: 4, name: "contact" }] 'link-${item}'*/

    return (
        <div className="nav_bar_div">
            <div className="shop_name">
                <div>Shoe<span>s</span></div>
            </div>


            <ul className='lista'>
                {["home", "about", "work", "skills", "contact"].map(item =>
                    <li key={item}>
                        <a href="link-${item}" key={item}>{item}</a>
                    </li>
                )}
            </ul>

            <div className="icons-grid">
                <div className="icons-ajuste">
                    <div>
                        <FontAwesomeIcon icon={faHeart} />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCartShopping} />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faUser} />
                    </div>


                </div>
            </div>

        </div >
    )
}

export default Navbar;
console.log('ok')