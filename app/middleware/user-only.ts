export default defineNuxtRouteMiddleware(async () => {
    const authUser = useAuthUser()
    
    if (!authUser.value && authUser.value !== null) {
        return navigateTo({ name: "login" })
    }
})