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
import { CATEGORY_DISPLAY_NAME } from '@/constants'
import type { FilterCategory } from '@/types'
</script>

<script lang="ts">
export default {
  data() {
    return {
      selectedValue: this.$store.state.category,
      selectItems: ['description', 'status', 'date'] as FilterCategory[]
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
            <SelectItem v-for="item in selectItems" :key="item" :value="item">
              {{ CATEGORY_DISPLAY_NAME[item] }}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
    <div class="w-full"><Input /></div>
  </div>
  <Button class="mt-4 w-full max-w-2xl min-w-max h-14" variant="secondary"> + </Button>
</template>

<style></style>
