import "./header.scss";
import logo from "../../img/logoA.png";
import project from "../../img/gears-svgrepo-com.svg";
import Hero from "../../components/hero/hero";
import useStart from "../../hooks/useStart";
import language from "../../language";

function Header() {
  const { lan, setLan } = useStart()

  let select = (evt) => {
     setLan(evt.target.value)
  }

  return (
    <header id="home" className="header">
      <div className="navbar">
        <a href="#home">
          <img src={logo} alt="dc" />
        </a>
        <div className="navbar_ota">
          <a href="#Skills" onClick={linkActivbe} className={"navbar_link"} >
            {language[0][lan].header}
          </a>
          <div className="navbar_otaLink">
            <a onClick={linkActivbe} className={"navbar_link"} href="#project">
             {language[0][lan].loyiha}
            </a>
            <img src={project} alt="dsd" />
          </div>
          <a onClick={linkActivbe} className={"navbar_link"} href="#Contactme">
           {language[0][lan].contack}
          </a>
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
