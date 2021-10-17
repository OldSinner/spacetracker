import React from "react";


export function EmptyRow({ rowtitle, text }) {
  if (!!text) return  (
    <tr>
      <td className="detColor">{rowtitle}</td>
      <td>{text}</td>
    </tr>);
  else {
    return <></>
    
  }
}
