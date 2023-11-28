<script setup lang="ts">
import { Button } from '@/components/ui/button'
import './index.css'
</script>

<template>
  <header class="w-full flex justify-center align-center pt-10">
    <div class="w-full flex flex-col align-center">
      <h1 class="mb-10 text-center font-extrabold text-4xl">TODO List</h1>
      <nav class="flex justify-center gap-x-5">
        <RouterLink to="/list">
          <Button :variant="$route.name === 'list' ? 'default' : 'secondary'">목록</Button>
        </RouterLink>
        <RouterLink to="/dashboard">
          <Button :variant="$route.name === 'dashboard' ? 'default' : 'secondary'">통계</Button>
        </RouterLink>
      </nav>
    </div>
  </header>
  <main class="mt-10 px-20 flex flex-col justify-center items-center">
    <RouterView />
  </main>
</template>
