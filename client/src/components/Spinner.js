import { MutatingDots } from "react-loader-spinner";

export default function Spinner1() {
    return (
        <div style={{height : "100vh", display : "flex", justifyContent : "center", alignItems : "center", 
        backgroundImage:" radial-gradient( circle 815px at 23.4% -21.8%,  rgba(9,29,85,1) 0.2%, rgba(0,0,0,1) 100.2% )",width : "100%"}}>
            <MutatingDots
                height="100"
                width="100"
                color="dodgerblue"
                secondaryColor='dodgerblue'
                radius='12.5'
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
        )
}