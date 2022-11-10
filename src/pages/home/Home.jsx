import { Aside } from "../../aside/Aside";
import { Header } from "../../header/Header";
import { Navbar } from "../../navbar/Navbar";
import { Main } from "../../main/Main";
import { Footer } from "../../footer/Footer";

import './Home.css';

export const Home = () => {
  return (
    <div className="home">
        <Header title="Home"/>
        <Navbar />
        <div className="d-flex flex-row">
          <Aside />
          <Main />
        </div>
        <Footer />
    </div>
  )
}
