import { Link } from 'react-router-dom';
import { NAVLINKS } from '~/constants/common';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './styles.scss';
import { Container } from '@mui/material';
function Header() {
    return (
        <nav className="header">
            <Container>
                <div className="header__logonavlinks">
                    <a className="header__logo" href="/">
                        <img src="/assets/images/logo-01.png" alt="CozaStore" />
                    </a>
                    <div className="header__pagelinks">
                        <ul>
                            {NAVLINKS.map((e) => {
                                return (
                                    <li key={e.text}>
                                        <Link to={e.href}>{e.text}</Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div className="header__icons">
                    <div>
                        <SearchIcon />
                    </div>
                    <div>
                        <ShoppingCartIcon />
                    </div>
                    <div>
                        <FavoriteBorderIcon />
                    </div>
                </div>
            </Container>
        </nav>
    );
}

export default Header;
