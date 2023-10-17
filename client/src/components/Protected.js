import {useNavigate} from "react-router-dom"; 

export default function Protected() {
    const nav = useNavigate();
    return (
        <div>
            {JSON.parse(window.localStorage.getItem("token")) ? 
                nav("/user/protected/auth/asdflkjasdI_jwJLIE4ivHJ") :
                nav("/")
        }
        </div>
    )
}