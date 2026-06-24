function Footer() {

    return (
        <footer className="footer">
            <div className="footer-content">
                <div>
                  <h3 className="footer-logo">teuos.net</h3>
                </div>

                <div className="footer-links">
                  <a href="https://github.com/teuos/website" target="_blank" rel="noreferrer">
                    Source code
                  </a>
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