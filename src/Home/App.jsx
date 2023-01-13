import { useAuthState } from "react-firebase-hooks/auth"
import { ChatRoom } from "../components/ChatRoom";
import { Header } from "../components/Header";
import { SignIn } from "../components/SingIn"
import { auth } from "../services/firebaseConfig"

export const App = () => {
  const [user] = useAuthState(auth);
  return(
    <div>
      <Header />
 
      {user ? <ChatRoom /> : <SignIn />}
    </div>
    
    
  )
}