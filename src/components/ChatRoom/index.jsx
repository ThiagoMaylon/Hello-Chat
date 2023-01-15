import { addDoc, collection, limit, orderBy, query, serverTimestamp } from "firebase/firestore";
import { auth, dbApp } from "../../services/firebaseConfig";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { SignOut } from "../SignOut";
import { ChatStyle } from "./styles";
import { Menssage } from "../Menssage";
import { useState } from "react";


export const ChatRoom = () => {
    const menssageRef = collection(dbApp, "menssages");
    const queryMenssage = query(menssageRef, orderBy("createdAt"), limit(25));
    const [menssages] = useCollectionData(queryMenssage, {idField: "id"});

    const [fromValue, setFromValue] = useState("");

    const sendMenssage = async (e) => {
        e.preventDefault();
        const { photoURL, uid } = auth.currentUser;
        await addDoc(menssageRef, {
            text: fromValue,
            uid,
            photoURL,
            createdAt: serverTimestamp(),
        })

    }
    return(
        <ChatStyle>
            <main>
                {menssages && menssages.map((msg, index) => (
                    <Menssage key={index} menssage={msg}/>
                ))}
            </main>
            <form  onSubmit={sendMenssage}>
                <input 
                    type="text"
                    value={fromValue}
                    onChange={e => setFromValue(e.target.value)} 
                />

                <button>enviar</button>
                <SignOut />
            </form>
        </ChatStyle>
    )
}