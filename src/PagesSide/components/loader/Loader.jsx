import React from "react";
import scss from "./loader.module.scss";

const Loader = () => {
  return (
    <div className={scss.spiner}>
      <span class={scss.loader}></span>
    </div>
  );
};

export default Loader;
