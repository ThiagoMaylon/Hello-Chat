import { auth } from "../../services/firebaseConfig";

export const SignOut = () => {
    return(
        auth.currentUser && (
            <button onClick={() => auth.signOut()}>Sair</button>
        )
    )
}