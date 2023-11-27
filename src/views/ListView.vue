<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
</script>

<template>
  <div class="flex gap-x-3 w-full max-w-2xl min-w-max">
    <div class="w-40">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="title"> 제목 </SelectItem>
            <SelectItem value="description"> 설명 </SelectItem>
            <SelectItem value="status"> 상태 </SelectItem>
            <SelectItem value="date"> 날짜 </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>

    <div class="w-full"><Input /></div>
  </div>
  <Button class="mt-4 w-full max-w-2xl min-w-max h-14" variant="secondary"> + </Button>
</template>

<style></style>
