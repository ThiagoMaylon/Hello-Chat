import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebaseConfig'
import { SignInStyle } from './styles';

export const SignIn = () => {
    const [SignInWithGoogle] = useSignInWithGoogle(auth);
    return(
        <SignInStyle onClick={() => SignInWithGoogle()}>Entre com o Google</SignInStyle>
    )
}