import useStart from "../../hooks/useStart";
import language from "../../language";
import skils from "../../img/undraw_project_completed_w0oq1.png";
import html from "../../img/html5.png";
import css from "../../img/css3.png";
import js from "../../img/js.png";
import botst from "../../img/bootstrap.png";
import Reactt from "../../img/Reactt.jpg";
import redux from "../../img/Redux.png";
import kok from "../../img/Polygon.png";
import git from "../../img/git.png";
import "./skils.scss";

function Skils() {
  const { lan } = useStart();

  return (
    <section id="skils" className="skils">
      <h1 className="skils_h1">{language[0][lan].header}</h1>
      <div className="skils_ota">
        <div className="skils_left">
          <h2 className="skils_h2">{language[0][lan].skil}</h2>
          <div className="skils_imgs">
            <img
              width={121}
              height={147}
              src={html}
              className="skil_html"
              alt="cff"
            />
            <img
              width={121}
              height={147}
              src={css}
              className="skil_html"
              alt="f"
            />
            <img
              width={121}
              height={147}
              src={js}
              className="skil_html"
              alt="f"
            />
            <img
              width={121}
              height={147}
              src={botst}
              className="skil_html"
              alt="f"
            />
            <div className="react-ota">
              <img
                width={121}
                height={115}
                src={Reactt}
                className="skils_React"
                alt="f"
              />
              <span className="skils_res">
                REACT
              </span>
            </div>
            <div className="react-ota">
              <img
                width={71}
                height={75}
                src={redux}
                className="skils_redux"
                alt="f"
              />
              <img
                width={111}
                height={115}
                src={kok}
                className="skils_kok"
                alt="f"
              />
              <span className="skils_re">REDUX</span>
              
            </div>
          </div>
        </div>
        <div className="skils_rigth">
          <img
            className="skils_img"
            width={511}
            height={426}
            src={skils}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Skils;
