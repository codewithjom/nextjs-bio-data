type Data = {
  elementary: string
  elementaryGraduate: string
  highschool: string
  highschoolGraduate: string
  college: string
  collegeGraduate: string
  degree: string
  specialSkills: string
}

type EducationalBackgroundProps = Data & {
  updateFields: (fields: Partial<Data>) => void
}

export function EducationalBackground({
  elementary,
  elementaryGraduate,
  highschool,
  highschoolGraduate,
  college,
  collegeGraduate,
  degree,
  specialSkills,
  updateFields
}: EducationalBackgroundProps) {
  return (
    <div>
      <h1 className='text-xl font-bold mb-5'>Educational Background</h1>
      <div className='flex-1'>
        <label>Elementary</label>
        <input
          type='text'
          autoFocus
          value={elementary}
          onChange={e => updateFields({ elementary: e.target.value })}
          className='border px-2 ml-4 mr-10'
        />
        <label>Year Graduated</label>
        <input
          type='text'
          value={elementaryGraduate}
          onChange={e => updateFields({ elementaryGraduate: e.target.value })}
          className='border px-2 ml-4'
        />
      </div>
      <div className='flex-1 mt-2'>
        <label>High School</label>
        <input
          type='text'
          autoFocus
          value={highschool}
          onChange={e => updateFields({ highschool: e.target.value })}
          className='border px-2 ml-[10px] mr-10'
        />
        <label>Year Graduated</label>
        <input
          type='text'
          value={highschoolGraduate}
          onChange={e => updateFields({ highschoolGraduate: e.target.value })}
          className='border px-2 ml-4'
        />
      </div>
      <div className='flex-1 mt-2'>
        <label>College</label>
        <input
          type='text'
          autoFocus
          value={college}
          onChange={e => updateFields({ college: e.target.value })}
          className='border px-2 ml-11 mr-[39px]'
        />
        <label>Year Graduated</label>
        <input
          type='text'
          value={collegeGraduate}
          onChange={e => updateFields({ collegeGraduate: e.target.value })}
          className='border px-2 ml-4'
        />
      </div>
      <div className='flex-1 mt-2'>
        <label>Degree Received</label>
        <input
          type='text'
          autoFocus
          value={degree}
          onChange={e => updateFields({ degree: e.target.value })}
          className='border px-2 ml-4 w-96'
        />
      </div>
      <div className='flex-1 mt-2'>
        <label>Special Skills</label>
        <input
          type='text'
          autoFocus
          value={specialSkills}
          onChange={e => updateFields({ specialSkills: e.target.value })}
          className='border px-2 ml-[46px] w-96'
        />
      </div>
    </div>
  )
}
