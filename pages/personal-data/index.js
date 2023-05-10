'use client'

import { Input, Grid } from '@nextui-org/react'

export default function PersonalData() {
  return (
    <div className='flex h-screen bg-gradient-to-r from-rose-200 to-teal-200'>
      <div className='m-auto border bg-white p-14 shadow-md rounded-xl'>
        <h1 className='mb-2 font-bold text-2xl'>Personal Data</h1>
        <hr className='mb-5' />
        <p className='italic text-sm mb-5'>Insert image here.</p>
        <div>
          <Grid.Container gap={4}>
            <Grid>
              <Input
                bordered
                shadow={false}
                type='text'
                color='secondary'
                size='lg'
                label='Position Desired'
                placeholder='Developer'
              />
            </Grid>
            <Grid>
              <Input
                bordered
                shadow={false}
                type='text'
                color='secondary'
                size='lg'
                label='Name'
                placeholder='Peter Parker'
              />
            </Grid>
            <Grid>
              <Input
                bordered
                shadow={false}
                type='text'
                color='secondary'
                size='lg'
                label='Gender'
                placeholder='Male'
              />
            </Grid>
            <Grid>
              <Input
                bordered
                shadow={false}
                width='186px'
                type='date'
                color='secondary'
                size='lg'
                label='Date'
                placeholder='mm/dd/yyyy'
              />
            </Grid>
          </Grid.Container>
        </div>
      </div>
    </div>
  )
}
