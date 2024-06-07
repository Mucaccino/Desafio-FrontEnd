import type { definitions } from '~/desafio-backend';

type LoginModel = definitions["LoginModel"];
type LoginModelResponse = definitions["LoginModelResponse"];


// import type { UseFetchOptions } from "#app";
// import { defu } from "defu";

// export async function useIFetch<T>(
//   url: string,
//   options: UseFetchOptions<T> = {}
// ) {
//   const accessToken = useCookie("accessToken");

//   const defaults: UseFetchOptions<T> = {
//     baseURL: "http://127.0.0.1:8000/",
//     key: url,
//     headers: accessToken.value
//       ? { Authorization: `Bearer ${accessToken.value}` }
//       : {},
//     onResponse: async ({ response, options }) => {
//       if (response.status === 401) {
//         try {
//           const newToken = await refreshToken();
//           accessToken.value = newToken;

//           options.headers = { Authorization: `Bearer ${newToken}` };
//           useFetch(url, options as UseFetchOptions<T>);
//         } catch (error) {
//           console.error("Token refresh failed:", error);
//         }
//       }
//     },
//   };

//   const params = defu(options, defaults);

//   return useFetch(url, params);
// }

// async function refreshToken() {
//   const refreshToken = useCookie("refreshToken");

//   const { data, status } = await useFetch<{ access: string }>(
//     "http://127.0.0.1:8000/api/token/refresh/",
//     {
//       method: "POST",
//       body: { refresh: refreshToken.value },
//     }
//   );

//   if (status.value === "success") {
//     return data.value?.access;
//   } else {
//     throw new Error("Token refresh failed");
//   }
// }


export const useAuth = () => {
    const authUser = useAuthUser()
    const userAdmin = useState<boolean>('userAdmin', () => false)
    const setUser = (user: LoginModelResponse) => {
        authUser.value = user
    }
    const login = async (user: LoginModel) => {
        try {
            const data = await $fetch<LoginModelResponse>('/api/Auth/login', {
                method: 'POST',
                body: user
            })
            console.log(data)
            if (data.isAdmin) {
                userAdmin.value = true
            } else {
                userAdmin.value = false
            }
            setUser(data)
            return data
        } catch (err) {
            return null
        }
    }
    const userLoggedIn = async () => {
        if (!authUser.value) {
            const data = await $fetch('/api/Auth/token', {
                headers: useRequestHeaders(['cookie'])
            })
            setUser(data)
            return data
        }
    }
    const logout = async () => {
        const data = await $fetch('/api/user/logout')
        userAdmin.value = false
        setUser(data)
        return data
    }
    return {
        login,
        userLoggedIn,
        userAdmin,
        logout,
        authUser
    }
}