<template>
    <form class="space-x-5 text-black" @submit.prevent="handleLogin">
      <input
        v-model="username"
        type="text"
        placeholder="username"
        class="p-1.5 rounded-md shadow-xl"
      >
      <input
        v-model="password"
        type="password"
        placeholder="password"
        class="p-1.5 rounded-md shadow-xl"
      >
      <button
        type="submit"
        class="text-black py-1.5 px-2 rounded bg-light-100 hover bg-white w-24"
      >
        Login
      </button>
    </form>
</template>

<script lang="ts" setup>
  import { LoginRequest } from '~/clients';

  const username = ref('admin')
  const password = ref('123mudar')
  const { login } = await useAuth()
  const router = useRouter()
  const handleLogin = () => {
    const userData = new LoginRequest({
        username: username.value,
        password: password.value
    })

    login(userData)
      .then(data => {
        router.push("/")
      })
  }
  </script>