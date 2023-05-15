import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../prisma/client'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    positionDesired,
    fullname,
    gender,
    civilStatus,
    cityAddress,
    provincialAddress,
    cellphone,
    email,
    dateOfBrith,
    birthOfPlace,
    citizenship,
    height,
    weight,
    religion,
    spouse,
    spouseOccupation,
    children,
    father,
    fatherOccupation,
    mother,
    motherOccupation,
    language,
    emergencyContact,
    emergencyAddress,
    elementary,
    elementaryGrad,
    highschool,
    highschoolGrad,
    college,
    collegeGrad,
    degree,
    specialSkills,
    employmentRecord,
    characterReference
  } = req.body

  try {
    await prisma.biodata.create({
      data: {
        positionDesired,
        fullname,
        gender,
        civilStatus,
        cityAddress,
        provincialAddress,
        cellphone,
        email,
        dateOfBrith,
        birthOfPlace,
        citizenship,
        height,
        weight,
        religion,
        spouse,
        spouseOccupation,
        children,
        father,
        fatherOccupation,
        mother,
        motherOccupation,
        language,
        emergencyContact,
        emergencyAddress,
        elementary,
        elementaryGrad,
        highschool,
        highschoolGrad,
        college,
        collegeGrad,
        degree,
        specialSkills,
        employmentRecord,
        characterReference
      }
    })
    res.status(200).json({ message: 'Data has been added successfully' })
  } catch (error) {
    console.log('Failure')
  }
}
