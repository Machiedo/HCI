import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutMe = () => 
    <Layout>
        <h1>About us</h1>
        <Link to="/">Index</Link>  
        <Link to="blog">Visit blog</Link>    
    </Layout>

export default AboutMe