import React from "react";
import "./styles.scss";

import LogoMobile from "../../assets/svg/logo-mobile.svg";

export default function MobileFullScreen({ language, hide, setFull }) {
  return (
    <div
      className={
        hide ? "mobileFullScreenContainer hide" : "mobileFullScreenContainer"
      }
    >
      <h1 className="mobileFullScreenContainer-h1">
        {language
          ? "Para uma melhor experiência no mobile, nós recomendamos ativar o modo Fullsrcreen."
          : "For a better experience on Mobile, we recommend allowing the Fullscreen mode."}
      </h1>
      <img
        src={LogoMobile}
        alt="Mobile Logo"
        className="mobileFullScreenContainer-mobileLogo"
      />
      <h2 className="mobileFullScreenContainer-h2">
        {language
          ? "(Você pode desativar a qualquer momento)"
          : "(you can exit at anytime)"}
      </h2>
      <button onClick={() => setFull()}>Autorizar</button>
    </div>
  );
}
