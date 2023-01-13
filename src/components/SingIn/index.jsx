import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebaseConfig'

export const SignIn = () => {
    const [SignInWithGoogle] = useSignInWithGoogle(auth);
    return(
        <button onClick={() => SignInWithGoogle()}>Entre com o Google</button>
    )
}