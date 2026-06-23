import { Link } from "react-router-dom";

function Footer() {

    return (
        <footer className="footer">
            <div className="footer-content">
                <div>
                    <h3>teuos.net</h3>
                    <p></p>
                </div>

                <div className="footer-links">
                    <Link to="/contact">Contact</Link>
                    <Link to="https://github.com/teuos/website">Source code</Link>
                </div>

                <div className="footer-information">
                    <p>contact@teuos.net</p>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Aidan McLaughlin. All rights reserved.</p>
            </div>
        </footer>
    );

}

export default Footer;