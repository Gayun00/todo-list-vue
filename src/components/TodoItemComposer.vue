<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
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
import { Button } from '@/components/ui/button'
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const date = ref<Date>()

const showComponent = ref(false)
const toggleComposer = () => {
  showComponent.value = !showComponent.value
}

const formSchema = toTypedSchema(
  z.object({
    title: z.string().min(2).max(50),
    description: z.string().min(2).max(50),
    status: z.enum(['todo', 'inprogress', 'done'])
  })
)

const { handleSubmit } = useForm({
  validationSchema: formSchema
})

const onSubmit = handleSubmit((values) => {
  // TODO: 카드 생성 api 호출
  console.log({ ...values, date: date.value })
})
</script>
<script lang="ts"></script>

<template>
  <Button class="mt-4 w-full h-14" variant="secondary" @click="toggleComposer"> + </Button>

  <form class="w-full space-y-6" @submit.prevent="onSubmit">
    <Card class="mt-5 w-full" v-if="showComponent">
      <CardHeader>
        <FormField v-slot="{ componentField }" name="title">
          <FormItem>
            <FormControl>
              <Input placeholder="제목을 입력하세요" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="description">
          <FormItem>
            <FormControl>
              <Input placeholder="설명을 입력하세요" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
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

          <FormField v-slot="{ componentField }" name="status">
            <FormItem>
              <FormControl>
                <Select v-bind="componentField">
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
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
        </div>
      </CardContent>
      <CardFooter class="flex gap-x-4">
        <Button type="submit" class="w-1/2" variant="default">추가</Button>
        <Button class="w-1/2" variant="outline" @click="toggleComposer">취소</Button>
      </CardFooter>
    </Card>
  </form>
</template>
