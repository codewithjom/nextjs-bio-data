'use client'

import { useMultistepForm } from '../components/useMultistepForm'
import { FormEvent, useState } from 'react'

import { PersonalData } from '../components/PersonalData'
import { EducationalBackground } from '../components/EducationalBackground'
import { EmploymentRecord } from '../components/EmploymentRecord'

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

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isLastStep) return next()
    alert('Successful Account Creation')
  }

  return (
    <main className='relative p-8 m-8 bg-white border border-black rounded-lg lg:mx-52'>
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
    </main>
  )
}
