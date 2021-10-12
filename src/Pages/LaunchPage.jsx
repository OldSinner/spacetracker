import React from "react";
import { useParams } from "react-router";
export default function LaunchPage(){
    const {id} = useParams();
    return (
        <div className="page">
            {id}
        </div>
    )
}