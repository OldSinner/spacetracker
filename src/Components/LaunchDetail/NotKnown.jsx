import React from 'react'

function NotKnown({text}) {
    if(text==null)
    return (
        <>
         Not Known   
        </>
    )
    else
    return(
        <>
        {text}
        </>
    )
}

export default NotKnown
