'use client'

import { GetServerSideProps } from 'next'
import * as React from 'react'
import { Button } from '../../components/ui/button'

import { Input } from '../../components/ui/input'
import { Label } from '../../components/ui/label'
import { prisma } from '../../prisma/client'
import { useRouter } from 'next/router'

interface Datas {
  datas: {
    id: string
    position: string
    name: string
    gender: string
    date: string
  }[]
}

interface FormData {
  position: string
  name: string
  gender: string
  date: string
  id: string
}

const PersonalData = ({ datas }: Datas) => {
  const [form, setForm] = React.useState<FormData>({
    position: '',
    name: '',
    gender: '',
    date: '',
    id: ''
  })

  const today = new Date().toLocaleDateString('en-PH')
  const router = useRouter()

  const refreshData = () => {
    router.replace(router.asPath)
  }

  async function create(data: FormData) {
    try {
      fetch(`http://localhost:3000/api/create`, {
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }).then(() => {
        setForm({ position: '', name: '', gender: '', date: '', id: '' })
        refreshData()
      })
    } catch (error) {
      console.log(error)
    }
  }

  async function deleteData(id: string) {
    try {
      fetch(`http://localhost:3000/api/data/${id}`, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'DELETE'
      }).then(() => {
        refreshData()
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async (data: FormData) => {
    try {
      create(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex h-screen bg-gradient-to-r from-rose-200 to-teal-200'>
      <div className='m-auto border bg-stone-100 p-14 shadow-md rounded-xl'>
        <h1 className='mb-2 font-bold text-2xl'>Personal Data</h1>
        <hr className='mb-5' />
        <form
          onSubmit={e => {
            e.preventDefault()
            handleSubmit(form)
          }}
        >
          <div className='grid grid-cols-2 w-full max-w-2xl items-center gap-1.5'>
            <div className='w-80'>
              <Label htmlFor='position'>Position Desired</Label>
              <Input
                type='text'
                id='position'
                placeholder='Developer'
                value={form.position}
                onChange={e => setForm({ ...form, position: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor='name'>Name</Label>
              <Input
                type='text'
                id='name'
                placeholder='Peter Parker'
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor='gender'>Gender</Label>
              <Input
                type='text'
                id='gender'
                placeholder='Male'
                value={form.gender}
                onChange={e => setForm({ ...form, gender: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor='date'>Date</Label>
              <Input
                type='text'
                id='date'
                placeholder={today}
                value={form.date}
                onChange={e => setForm({ ...form, date: e.target.value })}
              />
            </div>
            <div className='mt-5'>
              <Button type='submit' className='bg-blue-200 text-black w-24 hover:bg-blue-300'>
                Next
              </Button>
            </div>
          </div>
        </form>
        <div className='mt-10'>
          <ul>
            {datas.map(data => (
              <li key={data.id}>
                <div>
                  <ul>{data.position}</ul>
                  <ul>{data.name}</ul>
                  <ul>{data.gender}</ul>
                  <ul>{data.date}</ul>
                  <Button
                    onClick={() => deleteData(data.id)}
                    className='bg-red-400 text-black w-24 hover:bg-red-500 mb-5'
                  >
                    DELETE
                  </Button>
                  <hr />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PersonalData

export const getServerSideProps: GetServerSideProps = async () => {
  const datas = await prisma.personal.findMany({
    select: {
      id: true,
      position: true,
      name: true,
      gender: true,
      date: true
    }
  })

  return {
    props: {
      datas
    }
  }
}
