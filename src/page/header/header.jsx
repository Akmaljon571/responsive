import { Link } from "react-router-dom";
import "./header.scss";
import logo from "../../img/logoA.png";
import project from "../../img/gears-svgrepo-com.svg";
import Hero from "../../components/hero/hero";
import useStart from "../../hooks/useStart";
import language from "../../language";

function Header() {
  const { lan, setLan } = useStart()

  const linkActivbe = (evt) => {
    
  };

  let select = (evt) => {
     setLan(evt.target.value)
  }

  return (
    <header id="home" className="header">
      <div className="navbar">
        <Link to="#home">
          <img src={logo} alt="dc" />
        </Link>
        <div className="navbar_ota">
          <Link to="#Skills" onClick={linkActivbe} className={"navbar_link"} >
            {language[0][lan].header}
          </Link>
          <div className="navbar_otaLink">
            <Link onClick={linkActivbe} className={"navbar_link"} to="#project">
             {language[0][lan].loyiha}
            </Link>
            <img src={project} alt="dsd" />
          </div>
          <Link onClick={linkActivbe} className={"navbar_link"} to="#Contactme">
           {language[0][lan].contack}
          </Link>
          <select value={lan} className={'navbar_select'} onChange={select}>
            <option value="uz">🇺🇿 Uz</option>
            <option value="ru">🇷🇺 Ru</option>
            <option value="en">🇱🇷 En</option>
          </select>
        </div>
      </div>
      <Hero />
    </header>
  );
}

export default Header;
