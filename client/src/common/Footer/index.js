import { Container } from '@mui/system';
import { FOOTER_CATEGORIES, FOOTER_HELP } from '~/constants/common';
import './styles.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { Input } from '@mui/material';

function Footer() {
    const ariaLabel = { 'aria-label': 'description' };
    return (
        <footer className="footer">
            <Container>
                <div className="footer__categories">
                    <div>CATEGORIES</div>
                    {FOOTER_CATEGORIES.map((e) => {
                        return (
                            <a key={e.text} href={e.href}>
                                {e.text}
                            </a>
                        );
                    })}
                </div>
                <div className="footer__help">
                    <div>HELP</div>
                    {FOOTER_HELP.map((e) => {
                        return (
                            <a key={e.text} href={e.href}>
                                {e.text}
                            </a>
                        );
                    })}
                </div>
                <div className="footer__getintouch">
                    <div className="footer__title">GET IN TOUCH</div>
                    <div className="footer__gitelements">
                        <p>
                            Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call
                            us on (+1) 96 716 6879
                        </p>
                        <div className="footer__social">
                            <FacebookIcon />
                            <InstagramIcon />
                            <PinterestIcon />
                        </div>
                    </div>
                </div>
                <div className="footer__newsetter">
                    <div className="footer__title">NEWSETTER</div>
                    <Input placeholder="email@example.com" inputProps={ariaLabel} fullWidth variant="standard" />
                    <div className="footer__btnsubscribe">
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
