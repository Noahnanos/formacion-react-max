import {Header} from '../../header/Header';
import {Navbar} from '../../navbar/Navbar';
import { Main } from '../../main/Main';


export const About = () => {
  return (
    <div>
        <Header title="About" color="red"/>
        <Navbar />
        <Main text="Página About"/>
       
    </div>
  )
}
