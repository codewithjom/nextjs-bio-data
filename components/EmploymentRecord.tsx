type Data = {
  companyName1: string
  empPosition1: string
  positionFrom1: string
  positionTo1: string
  companyName2: string
  empPosition2: string
  positionFrom2: string
  positionTo2: string
}

type EmploymentRecordsProps = Data & {
  updateFields: (fields: Partial<Data>) => void
}

export function EmploymentRecord({
  companyName1,
  empPosition1,
  positionFrom1,
  positionTo1,
  companyName2,
  empPosition2,
  positionFrom2,
  positionTo2,
  updateFields
}: EmploymentRecordsProps) {
  return (
    <div>
      <h1 className='text-xl font-bold mb-5'>Educational Background</h1>
      <div className='flex-1'>
        <label>Company Name</label>
        <input
          type='text'
          autoFocus
          value={companyName1}
          onChange={e => updateFields({ companyName1: e.target.value })}
          className='border px-2 ml-4 w-[490px]'
        />
      </div>
      <div className='flex-1 mt-2'>
        <label>Position</label>
        <input
          type='text'
          autoFocus
          value={empPosition1}
          onChange={e => updateFields({ empPosition1: e.target.value })}
          className='border px-2 mx-4'
        />
        <label>From</label>
        <input
          type='text'
          autoFocus
          value={positionFrom1}
          onChange={e => updateFields({ positionFrom1: e.target.value })}
          className='border px-2 mx-4 w-36'
        />
        <label>To</label>
        <input
          type='text'
          autoFocus
          value={positionTo1}
          onChange={e => updateFields({ positionTo1: e.target.value })}
          className='border px-2 mx-4 w-36'
        />
      </div>
      <div className='flex-1 mt-14'>
        <label>Company Name</label>
        <input
          type='text'
          autoFocus
          value={companyName2}
          onChange={e => updateFields({ companyName2: e.target.value })}
          className='border px-2 ml-4 w-[490px]'
        />
      </div>
      <div className='flex-1 mt-2'>
        <label>Position</label>
        <input
          type='text'
          autoFocus
          value={empPosition2}
          onChange={e => updateFields({ empPosition2: e.target.value })}
          className='border px-2 mx-4'
        />
        <label>From</label>
        <input
          type='text'
          autoFocus
          value={positionFrom2}
          onChange={e => updateFields({ positionFrom2: e.target.value })}
          className='border px-2 mx-4 w-36'
        />
        <label>To</label>
        <input
          type='text'
          autoFocus
          value={positionTo2}
          onChange={e => updateFields({ positionTo2: e.target.value })}
          className='border px-2 mx-4 w-36'
        />
      </div>
    </div>
  )
}
