<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
</script>

<template>
  <div>
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
  </div>
</template>

<style></style>
