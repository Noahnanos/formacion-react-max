import {Header} from '../../header/Header'
import {Navbar} from '../../navbar/Navbar';
import { Main } from '../../main/Main';
import { Aside} from '../../aside/Aside';
import {Footer} from '../../footer/Footer';


export const Contact = () => {
  return (
    <div>
        <Header title="Contacto" color="green"/>
        <Navbar />
        <div className="d-flex flex-row">
          <Main text="Página Contact"/>
          <Aside />
        </div>
        <Footer />
    </div>
  )
}
