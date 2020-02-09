import makeBlockie from "ethereum-blockies-base64";
import React from "react";

function Blockie(props) {
  let www = "http://etherscan.io/address/" + props.address;
  if (typeof (props.address) !== 'undefined') {
    return (
      <a href={www} target="_blank">
        <img src={makeBlockie(props.address)}/>
      </a>
    );
  } else {
    return null;
  }
}

export default Blockie;