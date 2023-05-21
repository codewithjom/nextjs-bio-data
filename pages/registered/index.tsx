import { prisma } from '../../prisma/client'
import { GetServerSideProps } from 'next'

type Datas = {
  datas: {
    id: string
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
  }[]
}

export default function Registered({ datas }: Datas) {
  return (
    <div>
      <div className='relative mt-16 overflow-x-visible shadow-md sm:rounded-lg'>
        <table className='w-full  text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Position Desired
              </th>
              <th scope='col' className='px-6 py-3'>
                Date
              </th>
              <th scope='col' className='px-6 py-3'>
                Full name
              </th>
              <th scope='col' className='px-6 py-3'>
                Gender
              </th>
              <th scope='col' className='px-6 py-3'>
                City Address
              </th>
              <th scope='col' className='px-6 py-3'>
                Provincial Address
              </th>
              <th scope='col' className='px-6 py-3'>
                Telephone
              </th>
              <th scope='col' className='px-6 py-3'>
                Cellphone
              </th>
              <th scope='col' className='px-6 py-3'>
                Email
              </th>
              <th scope='col' className='px-6 py-3'>
                Date of Birth
              </th>
              <th scope='col' className='px-6 py-3'>
                Birth of Place
              </th>
              <th scope='col' className='px-6 py-3'>
                Civil Status
              </th>
              <th scope='col' className='px-6 py-3'>
                Citizenship
              </th>
              <th scope='col' className='px-6 py-3'>
                Height
              </th>
              <th scope='col' className='px-6 py-3'>
                Weight
              </th>
              <th scope='col' className='px-6 py-3'>
                Religion
              </th>
              <th scope='col' className='px-6 py-3'>
                Spouse
              </th>
              <th scope='col' className='px-6 py-3'>
                Spouse Occupation
              </th>
              <th scope='col' className='px-6 py-3'>
                Child
              </th>
              <th scope='col' className='px-6 py-3'>
                Birth Date
              </th>
              <th scope='col' className='px-6 py-3'>
                Child
              </th>
              <th scope='col' className='px-6 py-3'>
                Birth Date
              </th>
              <th scope='col' className='px-6 py-3'>
                Child
              </th>
              <th scope='col' className='px-6 py-3'>
                Birth Date
              </th>
              <th scope='col' className='px-6 py-3'>
                Father's Name
              </th>
              <th scope='col' className='px-6 py-3'>
                Occupation
              </th>
              <th scope='col' className='px-6 py-3'>
                Mother's Name
              </th>
              <th scope='col' className='px-6 py-3'>
                Occupation
              </th>
              <th scope='col' className='px-6 py-3'>
                Language
              </th>
              <th scope='col' className='px-6 py-3'>
                Emergency Contact
              </th>
              <th scope='col' className='px-6 py-3'>
                Emergency Address
              </th>
            </tr>
          </thead>
          <tbody>
            {datas.map(data => (
              <tr
                key={data.id}
                className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
              >
                <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  {data.positionDesired}
                </th>
                <td className='px-6 py-4'>{data.date}</td>
                <td className='px-6 py-4'>{data.fullname}</td>
                <td className='px-6 py-4'>{data.gender}</td>
                <td className='px-6 py-4'>{data.cityAddress}</td>
                <td className='px-6 py-4'>{data.provincialAddress}</td>
                <td className='px-6 py-4'>{data.telephone}</td>
                <td className='px-6 py-4'>{data.cellphone}</td>
                <td className='px-6 py-4'>{data.email}</td>
                <td className='px-6 py-4'>{data.dateOfBirth}</td>
                <td className='px-6 py-4'>{data.birthOfPlace}</td>
                <td className='px-6 py-4'>{data.civilStatus}</td>
                <td className='px-6 py-4'>{data.citizenship}</td>
                <td className='px-6 py-4'>{data.height}</td>
                <td className='px-6 py-4'>{data.weight}</td>
                <td className='px-6 py-4'>{data.religion}</td>
                <td className='px-6 py-4'>{data.spouse}</td>
                <td className='px-6 py-4'>{data.spouseOccupation}</td>
                <td className='px-6 py-4'>{data.nameOfChildren1}</td>
                <td className='px-6 py-4'>{data.childBirthDate1}</td>
                <td className='px-6 py-4'>{data.nameOfChildren2}</td>
                <td className='px-6 py-4'>{data.childBirthDate2}</td>
                <td className='px-6 py-4'>{data.nameOfChildren3}</td>
                <td className='px-6 py-4'>{data.childBirthDate3}</td>
                <td className='px-6 py-4'>{data.fatherName}</td>
                <td className='px-6 py-4'>{data.fatherOccupation}</td>
                <td className='px-6 py-4'>{data.motherName}</td>
                <td className='px-6 py-4'>{data.motherOccupation}</td>
                <td className='px-6 py-4'>{data.language}</td>
                <td className='px-6 py-4'>{data.emergencyContact}</td>
                <td className='px-6 py-4'>{data.emergencyAddress}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const datas = await prisma.biodata.findMany({
    select: {
      positionDesired: true,
      date: true,
      fullname: true,
      gender: true,
      cityAddress: true,
      provincialAddress: true,
      telephone: true,
      cellphone: true,
      email: true,
      dateOfBirth: true,
      birthOfPlace: true,
      civilStatus: true,
      citizenship: true,
      height: true,
      weight: true,
      religion: true,
      spouse: true,
      spouseOccupation: true,
      nameOfChildren1: true,
      nameOfChildren2: true,
      nameOfChildren3: true,
      childBirthDate1: true,
      childBirthDate2: true,
      childBirthDate3: true,
      fatherName: true,
      fatherOccupation: true,
      motherName: true,
      motherOccupation: true,
      language: true,
      emergencyContact: true,
      emergencyAddress: true
    },
    orderBy: {
      fullname: 'asc'
    }
  })

  return {
    props: {
      datas
    }
  }
}
