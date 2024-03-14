import logo from "../assets/images/logo.svg"

export default function MainHeader() {
  return (
    <div className="header-container">
      <div className="my-balance">
        <p>My balance</p>
        <h1>$921.48</h1>
      </div>
      <div className="header-button">
        <img src={logo} alt="header-button" />
      </div>
    </div>
  )
}
