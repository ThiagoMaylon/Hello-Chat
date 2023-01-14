import { auth } from "../../services/firebaseConfig";

export const Menssage = (props) => {
    const { text, photoURL, uid } = props.menssage;
    const menssageClass = uid === auth.currentUser.uid ? "send" : "recived";

    return(
        <div className={`menssage ${menssageClass}`} >
            {/* eslint-disable-next-line */}
            <img src={ photoURL } />
            <p>{text}</p>
        </div>
    )
}