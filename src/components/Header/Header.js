import logo from "../../assets/logo.svg"
const Header = () => {
  return (
    <header>
      <div>
        <img src={logo} alt="" style={{ width:'15%' , height:'15%' }}/>
        <h3>Software Developer</h3>
      </div>
    </header>
  )
}

export default Header