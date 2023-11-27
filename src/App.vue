<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { Button } from '@/components/ui/button'
import './index.css'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <Button>Click me</Button>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
