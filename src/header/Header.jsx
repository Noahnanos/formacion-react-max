import './Header.css';

export const Header = ({title, color}) => {
  return (
    <div className= {color}>
      <h1>{title} page</h1>
    </div>
  )
}
