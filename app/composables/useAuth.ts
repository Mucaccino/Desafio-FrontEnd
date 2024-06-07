import { AuthClient, AuthenticateUserResult, LoginRequest } from '../clients';

export const useAuth = () => {
    const authClient = new AuthClient("http://localhost:5000");
    const authUser = useAuthUser()
    const userAdmin = useState<boolean>('userAdmin', () => false)
    const setUser = (user: AuthenticateUserResult | null) => {
        authUser.value = user
    }
    const login = async (user: LoginRequest) => {
        try {
            const data = await authClient.authenticate(user)
            if(data) {
                userAdmin.value = data.isAdmin
                setUser(data)
                return data
            }
        } catch (err) {
            console.error("Login failed:", err)
            return null
        }        
    }
    const userLoggedIn = async () => {
        // setUser(null);
        // if (!authUser.value) {
        //     const data = await authClient.refreshToken(authUser.value.refreshToken)
        //     setUser(data)
        //     return data
        // }
    }
    const logout = async () => {
        setUser(null);
        //const data = await $fetch('/api/user/logout')
        // userAdmin.value = false
        // setUser()
        // return data
    }
    return {
        login,
        userLoggedIn,
        userAdmin,
        logout,
        authUser
    }
}