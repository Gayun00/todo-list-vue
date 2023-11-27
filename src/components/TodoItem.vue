<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
</script>
<script lang="ts">
export default {
  props: {
    title: String,
    description: String,
    status: String,
    date: String
  }
}
</script>

<template>
  <Card class="mt-5 w-full">
    <CardHeader>
      <div class="flex justify-between">
        <CardTitle>{{ title }}</CardTitle>
        <p>{{ date }}</p>
      </div>
    </CardHeader>
    <CardContent class="flex justify-between items-center">
      <CardDescription>{{ description }}</CardDescription>
      <div>{{ status }}</div>
    </CardContent>
    <CardFooter class="flex gap-x-4"> </CardFooter>
  </Card>
</template>
