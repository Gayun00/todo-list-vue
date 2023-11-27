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
import { CATEGORY_DISPLAY_NAME } from '@/constants'
import type { FilterCategory } from '@/types'
import TodoItemComposerVue from '@/components/TodoItemComposer.vue'
import TodoItemVue from '@/components/TodoItem.vue'
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
  },
  components: { TodoItemComposerVue, TodoItemVue }
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
  <TodoItemComposerVue />
  <TodoItemVue title="todo card1" status="진행중" description="설명" date="2023.33.33" />
</template>

<style></style>
