<script setup lang="ts">
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-vue-next'

import { ref } from 'vue'
import { cn } from '@/lib/utils'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
</script>
<script lang="ts">
const date = ref<Date>()
</script>

<template>
  <Card>
    <CardHeader>
      <Input placeholder="제목을 입력하세요" />
      <Input placeholder="설명을 입력하세요" />
    </CardHeader>
    <CardContent>
      <div class="flex gap-x-4">
        <Popover>
          <PopoverTrigger as-child>
            <Button
              :variant="'outline'"
              :class="
                cn(
                  'w-[280px] justify-start text-left font-normal',
                  !date && 'text-muted-foreground'
                )
              "
            >
              <CalendarIcon class="mr-2 h-4 w-4" />
              <span>{{ date ? format(date, 'PPP') : 'Pick a date' }}</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent class="w-auto p-0">
            <Calendar v-model="date" />
          </PopoverContent>
        </Popover>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="todo"> 진행전 </SelectItem>
              <SelectItem value="inprogress"> 진행중 </SelectItem>
              <SelectItem value="done"> 완료</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </CardContent>
    <CardFooter class="flex gap-x-4">
      <Button class="w-1/2" variant="default">추가</Button>
      <Button class="w-1/2" variant="outline">취소</Button>
    </CardFooter>
  </Card>
</template>
