<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { Button } from '@/components/ui/button'
import './index.css'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/list">
          <Button>목록</Button>
        </RouterLink>
        <RouterLink to="/dashboard">
          <Button>통계</Button>
        </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
