import { AuthenticateUserResult } from "../../clients"

export const useAuthUser = () => {
    return useState<AuthenticateUserResult | null>('user', () => null)
}