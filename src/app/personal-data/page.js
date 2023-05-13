'use client'

import * as React from 'react'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function PersonalData() {
  const [date, setDate] = React.useState()
  return (
    <div className='flex h-screen bg-gradient-to-r from-rose-200 to-teal-200'>
      <div className='m-auto border bg-stone-100 p-14 shadow-md rounded-xl'>
        <h1 className='mb-2 font-bold text-2xl'>Personal Data</h1>
        <hr className='mb-5' />
        <div className='grid w-full max-w-xs items-center gap-1.5 mb-10'>
          <Label htmlFor='picture'>Picture</Label>
          <Input id='picture' type='file' />
          <p className='italic text-sm text-muted-foreground'>Please insert a 2x2 image here.</p>
        </div>
        <div className='grid grid-cols-2 w-full max-w-2xl items-center gap-1.5'>
          <div className='w-80'>
            <Label htmlFor='position'>Position Desired</Label>
            <Input type='text' id='position' placeholder='Developer' />
          </div>
          <div>
            <Label htmlFor='name'>Name</Label>
            <Input type='text' id='name' placeholder='Peter Parker' />
          </div>
          <div>
            <Label htmlFor='gender'>Gender</Label>
            <Input type='text' id='gender' placeholder='Male' />
          </div>
          <div>
            <Label>Date</Label>
            <br />
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={'outline'}
                  className={cn('w-80 justify-start text-left font-normal', !date && 'text-muted-foreground')}
                >
                  <CalendarIcon className='mr-2 h-4 w-4' />
                  {date ? format(date, 'PPP') : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-auto p-0'>
                <Calendar mode='single' selected={date} onSelect={setDate} initialFocus />
              </PopoverContent>
            </Popover>
          </div>
          <div className='mt-5'>
            <Button className='bg-blue-200 text-black w-24 hover:bg-blue-300'>Next</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
