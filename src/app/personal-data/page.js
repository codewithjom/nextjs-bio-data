export default function PersonalData() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='min-w-fit flex-col border bg-white p-6 shadow-md rounded-xl'>
        <h1 className='mb-5 font-bold text-2xl'>Personal Data</h1>
        <hr className='mb-5' />
        <input type='text' className='border' />
      </div>
    </div>
  )
}
