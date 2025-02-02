
import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import About from "./about/page"
import Services from "./services/page"
import Contact from "./contact/page"



const Home: React.FC = () => {
    return (
        <Layout>
            <Hero />
            <About />
            <Services />
            <Contact />
        </Layout>
    )
}

export default Home

