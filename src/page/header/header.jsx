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
          <a href="#Skills" className={"navbar_link"} >
            {language[0][lan].header}
          </a>
          <div className="navbar_otaLink">
            <a className={"navbar_link"} href="#project">
             {language[0][lan].loyiha}
            </a>
            <img src={project} alt="dsd" />
          </div>
          <a className={"navbar_link"} href="#Contactme">
           {language[0][lan].contack}
          </a>
          <select value={lan} className={'navbar_select'} onChange={select}>
            <option value="uz">🇺🇿 Uz</option>
            <option value="ru">🇷🇺 Ru</option>
            <option value="en">🇱🇷 En</option>
          </select>
        </div>
      </div>
      <button className="svg_fixed"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up" viewBox="0 0 16 16">
        <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"/>
      </svg></button>
      <Hero />
    </header>
  );
}

export default Header;
