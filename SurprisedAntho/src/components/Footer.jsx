function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-column">
                <h3>Services</h3>
                <ul>
                    <li>Web design</li>
                    <li>Development</li>
                    <li>Hosting</li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>About</h3>
                <ul>
                    <li>Company</li>
                    <li>Team</li>
                    <li>Legacy</li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>Careers</h3>
                <ul>
                    <li>Job openings</li>
                    <li>Employee success</li>
                    <li>Benefits</li>
                </ul>
            </div>
            <p>© 2023 Pierre Colpart</p>
        </footer>
    );
}

export default Footer;