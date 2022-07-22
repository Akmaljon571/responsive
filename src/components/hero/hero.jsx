import useStart from "../../hooks/useStart";
import language from "../../language";
import "./hero.scss";
import { Link } from "react-router-dom";
import ozim from "../../img/IMG_20211201_203120_124.jpg";
import ozim1 from "../../img/IMG_20220107_225726_489.jpg";
import ozim2 from "../../img/RezumiReact.png";
import { Image } from "antd";
import React, { useState } from "react";

function Hero() {
  const { lan } = useStart();
  const [visible, setVisible] = useState(false);

  return (
    <div className="hero">
      <div className="hero_Left">
        <h1 className="hero_h1">Akmal Ahmadjonov</h1>
        <p className="hero_p">{language[0][lan].p}</p>
        <Link to="#Contactme" className="hero_btn">
          {language[0][lan].btn}
        </Link>
      </div>
      <div className="hero_rigth">
        <Image
          preview={{
            visible: false,
          }}
          width={459}
          height={576}
          src={ozim}
          onClick={() => setVisible(true)}
        />
        <div
          style={{
            display: "none",
          }}
        >
          <Image.PreviewGroup
            preview={{
              visible,
              onVisibleChange: (vis) => setVisible(vis),
            }}
          >
            <Image src={ozim} />
            <Image src={ozim1} />
            <Image src={ozim2} />
          </Image.PreviewGroup>
        </div>
      </div>
    </div>
  );
}

export default Hero;
