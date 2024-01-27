import { Link } from "react-router-dom";

const Header = ()=>{
    return (
        <header>
            <nav>
                <menu>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="table">Table</Link>
                    </li>
                </menu>
            </nav>
        </header>
    );
};

export default Header;