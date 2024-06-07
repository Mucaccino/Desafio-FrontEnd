<template>
    <div class="">
      <h1 class="">Realize o login</h1>
      <p>Essa página pode ser acessada por visitantes</p>
      <LoginForm />
      <LoginCredentials />
    </div>
  </template>
  <script setup>
  definePageMeta({
      middleware: 'guest-only'
  })
  
  const user = useAuthUser()
  
  </script>