import React from "react"
import { Link } from "react-router-dom"
import './page-not-found.css'
const PageNotFound = (props) => (
    <div>
        <h1>404 Error Page</h1>
        <p class="zoom-area">The page you asked for does not exist</p>
        <section class="error-container">
            <span>4</span>
            <span><span class="screen-reader-text">0</span></span>
            <span>4</span>
        </section>
        <div class="link-container">
            <Link
                to="/"
                className="more-link"
            >Return to the Home Page</Link>
        </div>
    </div>
)

export default PageNotFound;