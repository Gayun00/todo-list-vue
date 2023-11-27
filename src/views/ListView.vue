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

<script lang="ts">
export default {
  data() {
    return {
      selectedValue: 'title'
    }
  },
  watch: {
    selectedValue(newVal) {
      this.handleSelectionChange(newVal)
    }
  },
  methods: {
    handleSelectionChange(value: string) {
      this.$store.commit('updateItemFilter', { category: value })
      console.log(this.$store.state.category)
    }
  }
}
</script>

<template>
  <div class="flex gap-x-3 w-full max-w-2xl min-w-max">
    <div class="w-40">
      <Select v-model="selectedValue">
        <SelectTrigger>
          <SelectValue placeholder="제목" />
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
