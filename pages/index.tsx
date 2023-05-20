'use client'

import { useMultistepForm } from '../components/useMultistepForm'
import { FormEvent, useState } from 'react'
import Link from 'next/link'

import { PersonalData } from '../components/PersonalData'
import { EducationalBackground } from '../components/EducationalBackground'
import { EmploymentRecord } from '../components/EmploymentRecord'
import { useRouter } from 'next/router'

type FormData = {
  positionDesired: string
  date: string
  fullname: string
  gender: string
  cityAddress: string
  provincialAddress: string
  telephone: string
  cellphone: string
  email: string
  dateOfBirth: string
  birthOfPlace: string
  civilStatus: string
  citizenship: string
  height: string
  weight: string
  religion: string
  spouse: string
  spouseOccupation: string
  nameOfChildren1: string
  nameOfChildren2: string
  nameOfChildren3: string
  childBirthDate1: string
  childBirthDate2: string
  childBirthDate3: string
  fatherName: string
  fatherOccupation: string
  motherName: string
  motherOccupation: string
  language: string
  emergencyContact: string
  emergencyAddress: string
  elementary: string
  elementaryGraduate: string
  highschool: string
  highschoolGraduate: string
  college: string
  collegeGraduate: string
  degree: string
  specialSkills: string
  companyName1: string
  empPosition1: string
  positionFrom1: string
  positionTo1: string
  companyName2: string
  empPosition2: string
  positionFrom2: string
  positionTo2: string
}

const INITIAL_DATA: FormData = {
  positionDesired: '',
  date: '',
  fullname: '',
  gender: '',
  cityAddress: '',
  provincialAddress: '',
  telephone: '',
  cellphone: '',
  email: '',
  dateOfBirth: '',
  birthOfPlace: '',
  civilStatus: '',
  citizenship: '',
  height: '',
  weight: '',
  religion: '',
  spouse: '',
  spouseOccupation: '',
  nameOfChildren1: '',
  nameOfChildren2: '',
  nameOfChildren3: '',
  childBirthDate1: '',
  childBirthDate2: '',
  childBirthDate3: '',
  fatherName: '',
  fatherOccupation: '',
  motherName: '',
  motherOccupation: '',
  language: '',
  emergencyContact: '',
  emergencyAddress: '',
  elementary: '',
  elementaryGraduate: '',
  highschool: '',
  highschoolGraduate: '',
  college: '',
  collegeGraduate: '',
  degree: '',
  specialSkills: '',
  companyName1: '',
  empPosition1: '',
  positionFrom1: '',
  positionTo1: '',
  companyName2: '',
  empPosition2: '',
  positionFrom2: '',
  positionTo2: ''
}

export default function Home() {
  const [data, setData] = useState(INITIAL_DATA)

  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return { ...prev, ...fields }
    })
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <PersonalData {...data} updateFields={updateFields} />,
    <EducationalBackground {...data} updateFields={updateFields} />,
    <EmploymentRecord {...data} updateFields={updateFields} />
  ])

  const router = useRouter()

  const refreshData = () => {
    router.replace(router.asPath)
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isLastStep) return next()
    // alert('Successful Account Creation')
    fetch(`http://localhost:3000/api/create`, {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    }).then(() => {
      updateFields({
        positionDesired: '',
        date: '',
        fullname: '',
        gender: '',
        cityAddress: '',
        provincialAddress: '',
        telephone: '',
        cellphone: '',
        email: '',
        dateOfBirth: '',
        birthOfPlace: '',
        civilStatus: '',
        citizenship: '',
        height: '',
        weight: '',
        religion: '',
        spouse: '',
        spouseOccupation: '',
        nameOfChildren1: '',
        nameOfChildren2: '',
        nameOfChildren3: '',
        childBirthDate1: '',
        childBirthDate2: '',
        childBirthDate3: '',
        fatherName: '',
        fatherOccupation: '',
        motherName: '',
        motherOccupation: '',
        language: '',
        emergencyContact: '',
        emergencyAddress: '',
        elementary: '',
        elementaryGraduate: '',
        highschool: '',
        highschoolGraduate: '',
        college: '',
        collegeGraduate: '',
        degree: '',
        specialSkills: '',
        companyName1: '',
        empPosition1: '',
        positionFrom1: '',
        positionTo1: '',
        companyName2: '',
        empPosition2: '',
        positionFrom2: '',
        positionTo2: ''
      })
      refreshData()
    })
  }

  return (
    <main>
      <nav className='bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <div className='flex md:order-2'>
            <button
              type='button'
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Download
            </button>
          </div>
          <div className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1' id='navbar-sticky'>
            <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
              <li>
                <Link
                  href='#'
                  className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500'
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='relative p-8 m-8 mt-28 bg-white border border-black rounded-lg lg:mx-52'>
        <form onSubmit={onSubmit}>
          <div className='absolute top-2 right-4'>
            {currentStepIndex + 1} / {steps.length}
          </div>
          {step}
          <div className='flex justify-end mt-4 gap-2'>
            {!isFirstStep && (
              <button type='button' onClick={back} className='px-4 border bg-gray-200 rounded'>
                Back
              </button>
            )}
            <button type='submit' className='px-4 border'>
              {isLastStep ? 'Finish' : 'Next'}
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}
