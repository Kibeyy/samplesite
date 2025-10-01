// Footer.jsx
import React from 'react';

export default function Footer() {
    // Get the current year for the copyright
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-info">
                    <p className="footer-copyright">
                        &copy; {currentYear} Stdiox. All rights reserved.
                    </p>
                    <p className="footer-madeby">
                        Built with **React**
                    </p>
                </div>

                <div className="footer-social">
                    <a href="#facebook" className="social-link">Facebook</a>
                    <a href="#twitter" className="social-link">Twitter</a>
                    <a href="#linkedin" className="social-link">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}