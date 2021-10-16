import React from "react";

function NotKnown({ text }) {
  if (text == null) return <>Not Known</>;
  else return <>{text}</>;
}
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

export default NotKnown;
