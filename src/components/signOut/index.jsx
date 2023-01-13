import { auth } from "../../services/firebaseConfig"
import { BiLogOut } from 'react-icons/bi'
export const SignOut = () => {
    return(
        auth.currentUser && (
            <button onClick={() => auth.SingOut}><BiLogOut className="btLogOut"/></button>
        )
    )
}