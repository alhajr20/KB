import React from "react";
import Layout from "../components/layout";
import Promo from "../components/promo/index";
import About from "../components/about/index";
import Contact from "../components/contact/index";
import "../styles/global.scss";

export default function Home() {
    return (
        <Layout>
            <Promo/>
            <About/>
            <Contact/>
        </Layout>
    );
}
