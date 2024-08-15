import './index.scss'
import LogoS from '../../../assets/images/logo-sol.png'
import LogoO from '../../../assets/images/logo-out.png'

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="solid-logo" src={LogoS} alt="Lion Wizard Logo" />

      <img
        className="outline-logo"
        src={LogoO}
        alt="Lion Wizard Logo Outline"
      />
    </div>
  )
}

export default Logo
