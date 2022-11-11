import './Main.css';
import { Button } from '../button/Button';

export const Main = ({text}) => {
  return (
    <div className="main">
      <h1>{text}</h1>
        <Button className="ps-3" variante="cancelar" text="Cancelar"/>
        <Button className="ps-3" variante="confirmar" text="Confirmar"/>
        <Button className="ps-3" variante="confirmar" text="Aceptar"/>
    </div>
  )
}
