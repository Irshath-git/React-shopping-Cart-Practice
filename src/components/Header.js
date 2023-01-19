import React from "react";
import Mac from "../assets/mac-3.jpg";

function header() {
  return (
    <div className="col-lg-12 md-6 sm-6">
      <img src={Mac} style={{ width: "100%" }} />
    </div>
  );
}

export default header;
