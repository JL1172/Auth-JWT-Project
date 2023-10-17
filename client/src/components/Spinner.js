import { MutatingDots } from "react-loader-spinner";

export default function Spinner1() {
    return (
        <div style={{height : "100vh", display : "flex", justifyContent : "center", alignItems : "center",  backgroundColor : "black"}}>
            <MutatingDots
                height="100"
                width="100"
                color="#4fa94d"
                secondaryColor='#4fa94d'
                radius='12.5'
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
        )
}