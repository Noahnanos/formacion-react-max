import {Header} from '../../header/Header';
import {Navbar} from '../../navbar/Navbar';
import { Main } from '../../main/Main';
import { Aside} from '../../aside/Aside';
import {Footer} from '../../footer/Footer';


export const About = () => {
  return (
    <div>
        <Header title="About" color="red"/>
        <Navbar />
        <div className="d-flex flex-row">
          <Main text="Página About"/>
          <Aside />
        </div>
        <Footer />
       
    </div>
  )
}
