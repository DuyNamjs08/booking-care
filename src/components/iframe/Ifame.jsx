import React from "react";

function Ifame({ src, width, height }) {
  return <iframe width={width} height={height} src={src}></iframe>;
}

export default Ifame;
