
import { SignOut } from "../signOut"
import { HeaderStyle } from "./styles"

export const Header = () => {
    return(
        <HeaderStyle>
            <h1>Hello Chat</h1>
            <SignOut />
        </HeaderStyle>
    )
}