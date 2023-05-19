type Data = {
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
}

type PersonalDataProps = Data & {
  updateFields: (fields: Partial<Data>) => void
}

export function PersonalData({
  positionDesired,
  date,
  fullname,
  gender,
  cityAddress,
  provincialAddress,
  telephone,
  cellphone,
  email,
  dateOfBirth,
  birthOfPlace,
  civilStatus,
  citizenship,
  height,
  weight,
  religion,
  spouse,
  spouseOccupation,
  nameOfChildren1,
  nameOfChildren2,
  nameOfChildren3,
  childBirthDate1,
  childBirthDate2,
  childBirthDate3,
  fatherName,
  fatherOccupation,
  motherName,
  motherOccupation,
  language,
  emergencyContact,
  emergencyAddress,
  updateFields
}: PersonalDataProps) {
  return (
    <div>
      <h1 className='text-xl font-bold mb-5'>Personal Data</h1>
      <div className='flex-1'>
        <label>Position Desired</label>
        <input
          type='text'
          autoFocus
          required
          value={positionDesired}
          onChange={e => updateFields({ positionDesired: e.target.value })}
          className='border px-2 ml-4 mr-[65px]'
        />
        <label>Date</label>
        <input
          type='text'
          required
          value={date}
          onChange={e => updateFields({ date: e.target.value })}
          className='border px-2 ml-[68px]'
        />
      </div>
      <div className='flex-1 mt-5'>
        <label>Full Name</label>
        <input
          type='text'
          required
          value={fullname}
          onChange={e => updateFields({ fullname: e.target.value })}
          className='border px-2 ml-16 mr-[64px]'
        />
        <label>Gender</label>
        <input
          type='text'
          required
          value={gender}
          onChange={e => updateFields({ gender: e.target.value })}
          className='border px-2 ml-12'
        />
      </div>
      <div className='flex mt-5'>
        <label>City Address</label>
        <input
          type='text'
          required
          value={cityAddress}
          onChange={e => updateFields({ cityAddress: e.target.value })}
          className='border px-2 ml-10 w-96'
        />
      </div>
      <div className='flex mt-5'>
        <label>Provincial Add.</label>
        <input
          type='text'
          required
          value={provincialAddress}
          onChange={e => updateFields({ provincialAddress: e.target.value })}
          className='border px-2 ml-6 w-96'
        />
      </div>
      <div className='flex mt-5'>
        <label>Telephone</label>
        <input
          type='text'
          value={telephone}
          onChange={e => updateFields({ telephone: e.target.value })}
          className='border px-2 ml-14 mr-[66px]'
        />
        <label>Cellphone</label>
        <input
          type='text'
          value={cellphone}
          onChange={e => updateFields({ cellphone: e.target.value })}
          className='border px-2 ml-8'
        />
      </div>
      <div className='flex mt-5'>
        <label>E-mail Address</label>
        <input
          type='email'
          required
          value={email}
          onChange={e => updateFields({ email: e.target.value })}
          className='border px-2 ml-5'
        />
      </div>
      <div className='flex mt-5'>
        <label>Date of Birth</label>
        <input
          type='text'
          required
          value={dateOfBirth}
          onChange={e => updateFields({ dateOfBirth: e.target.value })}
          className='border px-2 ml-9 mr-[68px]'
        />
        <label>Birth of Place</label>
        <input
          type='text'
          required
          value={birthOfPlace}
          onChange={e => updateFields({ birthOfPlace: e.target.value })}
          className='border px-2 ml-2'
        />
      </div>
      <div className='flex mt-5'>
        <label>Civil Status</label>
        <input
          type='text'
          required
          value={civilStatus}
          className='border px-2 ml-12 mr-16'
          onChange={e => updateFields({ civilStatus: e.target.value })}
        />
        <label>Citizenship</label>
        <input
          type='text'
          required
          value={citizenship}
          className='border px-2 ml-7'
          onChange={e => updateFields({ citizenship: e.target.value })}
        />
      </div>
      <div className='flex mt-5'>
        <label>Height</label>
        <input
          type='text'
          required
          value={height}
          onChange={e => updateFields({ height: e.target.value })}
          className='border px-2 ml-20 mr-[70px]'
        />
        <label>Weight</label>
        <input
          type='text'
          required
          value={weight}
          onChange={e => updateFields({ weight: e.target.value })}
          className='border px-2 ml-14'
        />
      </div>
      <div className='flex my-5'>
        <label>Religion</label>
        <input
          type='text'
          required
          value={religion}
          onChange={e => updateFields({ religion: e.target.value })}
          className='border px-2 ml-[70px]'
        />
      </div>
      <hr />
      <div className='flex mt-5'>
        <label>Spouse</label>
        <input
          type='text'
          value={spouse}
          onChange={e => updateFields({ spouse: e.target.value })}
          className='border px-2 ml-[74px] mr-[70px]'
        />
        <label>Occupation</label>
        <input
          type='text'
          value={spouseOccupation}
          onChange={e => updateFields({ spouseOccupation: e.target.value })}
          className='border px-2 ml-5'
        />
      </div>
      <div className='flex mt-5'>
        <div className='flex-1 space-y-2 mr-[86px]'>
          <label>Name of Children</label>
          <br />
          <input
            type='text'
            value={nameOfChildren1}
            onChange={e => updateFields({ nameOfChildren1: e.target.value })}
            className='border px-2 w-96'
          />
          <input
            type='text'
            value={nameOfChildren2}
            onChange={e => updateFields({ nameOfChildren2: e.target.value })}
            className='border px-2 w-96'
          />
          <input
            type='text'
            value={nameOfChildren3}
            onChange={e => updateFields({ nameOfChildren3: e.target.value })}
            className='border px-2 w-96'
          />
        </div>
        <div className='flex-1 space-y-2'>
          <label>Date of Birth</label>
          <br />
          <input
            type='text'
            value={childBirthDate1}
            onChange={e => updateFields({ childBirthDate1: e.target.value })}
            className='border px-2'
          />
          <input
            type='text'
            value={childBirthDate2}
            onChange={e => updateFields({ childBirthDate2: e.target.value })}
            className='border px-2'
          />
          <input
            type='text'
            value={childBirthDate3}
            onChange={e => updateFields({ childBirthDate3: e.target.value })}
            className='border px-2'
          />
        </div>
      </div>
      <div className='flex-1 mt-5'>
        <label>Father's Name</label>
        <input
          type='text'
          value={fatherName}
          onChange={e => updateFields({ fatherName: e.target.value })}
          className='border px-2 ml-4 mr-[68px]'
        />
        <label>Occupation</label>
        <input
          type='text'
          value={fatherOccupation}
          onChange={e => updateFields({ fatherOccupation: e.target.value })}
          className='border px-2 ml-5'
        />
      </div>
      <div className='flex-1 mt-5'>
        <label>Mother's Name</label>
        <input
          type='text'
          value={motherName}
          onChange={e => updateFields({ motherName: e.target.value })}
          className='border px-2 ml-3 mr-16'
        />
        <label>Occupation</label>
        <input
          type='text'
          value={motherOccupation}
          onChange={e => updateFields({ motherOccupation: e.target.value })}
          className='border px-2 ml-5'
        />
      </div>
      <div className='flex-1 mt-5'>
        <label>Language or dialect spoken and written</label>
        <input
          type='text'
          required
          value={language}
          onChange={e => updateFields({ language: e.target.value })}
          className='border px-2 ml-16 w-96'
        />
      </div>
      <div className='flex-1 mt-5'>
        <label>Person to be contacted in case of emergency</label>
        <input
          type='text'
          required
          value={emergencyContact}
          onChange={e => updateFields({ emergencyContact: e.target.value })}
          className='border px-2 ml-5 w-96'
        />
      </div>
      <div className='flex-1 mt-5'>
        <label>His or her address</label>
        <input
          type='text'
          required
          value={emergencyAddress}
          onChange={e => updateFields({ emergencyAddress: e.target.value })}
          className='border px-2 ml-8 w-96'
        />
      </div>
    </div>
  )
}
