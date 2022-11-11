import './Button.css'

export const Button = ({variante,text}) => {
  return (
    <>
        <button className={variante}>{text}</button>
    </>
  )
}
