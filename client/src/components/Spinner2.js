import { MutatingDots } from "react-loader-spinner";
export default function Spinner2() {
    return (
        <div style={{height : "100vh", display : "flex", justifyContent : "center", alignItems : "center",width : "100%"}}>
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