import loading from "../assets/loading.svg";

export default function Loading({missionInfo}) {
    return (
        <div className='loadingComp'>
         <img  className="loadingLogo" src={loading} alt="Loading" />
        <div className="subtitle">
          We connect with the cosmos! Please wait!
        </div>   
        </div>
    )
}
