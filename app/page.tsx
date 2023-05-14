export default function Home() {
  return (
    <div>
      <div className='rounded-2xl m-20 p-32 border bg-white'>
        <div className='mx-auto'>
          <form>
            <div className='space-y-12'>
              <div className='border-b border-gray-900/10 pb-12'>
                <div className='mb-10'>
                  <h2 className='text-2xl font-semibold leading-7 text-gray-900'>
                    Fill out the{' '}
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-red-400 to-cyan-400'>
                      biodata
                    </span>{' '}
                    form now!
                  </h2>
                  <p className='mt-1 text-sm leading-6 text-gray-600'>
                    This tool provides a detailed guide for creating your biodata.
                  </p>
                </div>
                <h2 className='text-base font-semibold leading-7 text-gray-900'>Personal Data</h2>
                <div className='mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                  <div className='sm:col-span-4'>
                    <div className='flex flex-row space-x-5'>
                      <div>
                        <label className='block text-sm font-medium leading-6 text-gray-900'>Position Desired</label>
                        <input
                          type='text'
                          placeholder='Developer'
                          className='block w-72 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        />
                      </div>
                      <div>
                        <label className='block text-sm font-medium leading-6 text-gray-900'>Full name</label>
                        <input
                          type='text'
                          placeholder='Peter Parker'
                          className='block w-72 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        />
                      </div>
                      <div className='sm:col-span-3'>
                        <label className='block text-sm font-medium leading-6 text-gray-900'>Gender</label>
                        <div className='mt-1'>
                          <select className='block w-20 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>
                      <div className='sm:col-span-3'>
                        <label className='block text-sm font-medium leading-6 text-gray-900'>Civil Status</label>
                        <div className='mt-1'>
                          <select className='block w-20 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'>
                            <option>Married</option>
                            <option>Widowed</option>
                            <option>Separated</option>
                            <option>Divorced</option>
                            <option>Single</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-row space-x-5'>
                      <div className='mt-4'>
                        <label className='block text-sm font-medium leading-6 text-gray-900'>City Address</label>
                        <input
                          type='text'
                          className='block w-72 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        />
                      </div>
                      <div className='mt-4'>
                        <label className='block text-sm font-medium leading-6 text-gray-900'>Provincial Address</label>
                        <input
                          type='text'
                          className='block w-72 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        />
                      </div>
                      <div className='mt-4'>
                        <label className='block text-sm font-medium leading-6 text-gray-900'>Cellphone</label>
                        <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-md'>
                          <span className='flex select-none items-center pl-3 text-gray-500 sm:text-sm'>+63</span>
                          <input
                            type='number'
                            className='block w-[246px] flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6'
                          />
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-row space-x-5'>
                      <div className='mt-4'>
                        <label className='block text-sm font-medium leading-6 text-gray-900'>E-mail Address</label>
                        <input
                          type='email'
                          className='block w-72 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        />
                      </div>
                      <div className='mt-4'>
                        <label className='block text-sm font-medium leading-6 text-gray-900'>Date of Birth</label>
                        <input
                          type='text'
                          placeholder='29/10/1984'
                          className='block w-72 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        />
                      </div>
                      <div className='mt-4'>
                        <label className='block text-sm font-medium leading-6 text-gray-900'>Birth of Place</label>
                        <input
                          type='text'
                          className='block w-72 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        />
                      </div>
                    </div>
                    <div className='flex flex-row space-x-5'>
                      <div className='mt-4'>
                        <label className='block text-sm font-medium leading-6 text-gray-900'>Citizenship</label>
                        <input
                          type='text'
                          className='block w-72 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        />
                      </div>
                      <div className='mt-4'>
                        <label className='block text-sm font-medium leading-6 text-gray-900'>Height</label>
                        <input
                          type='number'
                          className='block w-72 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        />
                      </div>
                      <div className='mt-4'>
                        <label className='block text-sm font-medium leading-6 text-gray-900'>Weight</label>
                        <input
                          type='number'
                          className='block w-72 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        />
                      </div>
                    </div>
                    <div className='flex flex-row space-x-5'>
                      <div className='mt-4'>
                        <label className='block text-sm font-medium leading-6 text-gray-900'>Religion</label>
                        <input
                          type='text'
                          className='block w-72 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        />
                      </div>
                      <div className='mt-4'>
                        <label className='block text-sm font-medium leading-6 text-gray-900'>Spouse</label>
                        <input
                          type='text'
                          className='block w-72 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        />
                      </div>
                      <div className='mt-4'>
                        <label className='block text-sm font-medium leading-6 text-gray-900'>Occupation</label>
                        <input
                          type='text'
                          className='block w-72 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        />
                      </div>
                    </div>
                    <div className='flex flex-row space-x-5'>
                      <div className='mt-4'>
                        <div className='flex'>
                          <label className='block text-sm font-medium leading-6 text-gray-900'>Name of Children</label>
                          <p className='block text-xs ml-2 italic font-medium leading-6 text-gray-900'>
                            Leave it blank if none
                          </p>
                        </div>
                        <input
                          type='text'
                          className='block w-72 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        />
                      </div>
                      <div className='mt-10'>
                        <input
                          type='text'
                          className='block w-72 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        />
                      </div>
                      <div className='mt-10'>
                        <input
                          type='text'
                          className='block w-72 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        />
                      </div>
                    </div>
                    <div className='flex flex-row space-x-5'>
                      <div className='mt-4'>
                        <div className='flex'>
                          <label className='block text-sm font-medium leading-6 text-gray-900'>Date of Birth</label>
                          <p className='block text-xs ml-2 italic font-medium leading-6 text-gray-900'>
                            Leave it blank if none
                          </p>
                        </div>
                        <input
                          type='text'
                          className='block w-72 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        />
                      </div>
                      <div className='mt-10'>
                        <input
                          type='text'
                          className='block w-72 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        />
                      </div>
                      <div className='mt-10'>
                        <input
                          type='text'
                          className='block w-72 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        />
                      </div>
                    </div>
                    <div className='flex flex-row space-x-5'>
                      <div className='mt-4'>
                        <label className='block text-sm font-medium leading-6 text-gray-900'>Father's Name</label>
                        <input
                          type='text'
                          className='block w-52 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        />
                      </div>
                      <div className='mt-4'>
                        <label className='block text-sm font-medium leading-6 text-gray-900'>Occupation</label>
                        <input
                          type='text'
                          className='block w-52 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        />
                      </div>
                      <div className='mt-4'>
                        <label className='block text-sm font-medium leading-6 text-gray-900'>Mother's Name</label>
                        <input
                          type='text'
                          className='block w-52 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        />
                      </div>
                      <div className='mt-4'>
                        <label className='block text-sm font-medium leading-6 text-gray-900'>Occupation</label>
                        <input
                          type='text'
                          className='block w-56 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        />
                      </div>
                    </div>
                    <div className='flex flex-row space-x-5'>
                      <div className='mt-4'>
                        <label className='block text-sm font-medium leading-6 text-gray-900'>
                          Language or dialect spoken and written
                        </label>
                        <input
                          type='text'
                          className='block w-96 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        />
                      </div>
                    </div>
                    <div className='flex flex-row space-x-5'>
                      <div className='mt-4'>
                        <label className='block text-sm font-medium leading-6 text-gray-900'>
                          Person to be contacted in case of emergency
                        </label>
                        <input
                          type='text'
                          className='block w-96 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        />
                      </div>
                    </div>
                    <div className='flex flex-row space-x-5'>
                      <div className='mt-4'>
                        <label className='block text-sm font-medium leading-6 text-gray-900'>
                          His or her address and telephone
                        </label>
                        <input
                          type='text'
                          className='block w-96 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className='mt-14 text-base font-semibold leading-7 text-gray-900'>Educational Background</h2>
                <div className='flex flex-row space-x-5'>
                  <div className='mt-4'>
                    <label className='block text-sm font-medium leading-6 text-gray-900'>Elementary</label>
                    <input
                      type='text'
                      className='block w-72 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                  <div className='mt-4'>
                    <label className='block text-sm font-medium leading-6 text-gray-900'>Year Graduated</label>
                    <input
                      type='text'
                      className='block w-72 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div className='flex flex-row space-x-5'>
                  <div className='mt-4'>
                    <label className='block text-sm font-medium leading-6 text-gray-900'>High School</label>
                    <input
                      type='text'
                      className='block w-72 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                  <div className='mt-4'>
                    <label className='block text-sm font-medium leading-6 text-gray-900'>Year Graduated</label>
                    <input
                      type='text'
                      className='block w-72 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div className='flex flex-row space-x-5'>
                  <div className='mt-4'>
                    <label className='block text-sm font-medium leading-6 text-gray-900'>College</label>
                    <input
                      type='text'
                      className='block w-72 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                  <div className='mt-4'>
                    <label className='block text-sm font-medium leading-6 text-gray-900'>Year Graduated</label>
                    <input
                      type='text'
                      className='block w-72 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div className='flex flex-row space-x-5'>
                  <div className='mt-4'>
                    <label className='block text-sm font-medium leading-6 text-gray-900'>Degree Received</label>
                    <input
                      type='text'
                      className='block w-96 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div className='flex flex-row space-x-5'>
                  <div className='mt-4'>
                    <label className='block text-sm font-medium leading-6 text-gray-900'>Special Skills</label>
                    <input
                      type='text'
                      className='block w-96 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <h2 className='mt-14 text-base font-semibold leading-7 text-gray-900'>Employment Record</h2>
                <div className='flex flex-row space-x-5'>
                  <div className='mt-4'>
                    <label className='block text-sm font-medium leading-6 text-gray-900'>Company Name</label>
                    <input
                      type='text'
                      className='block w-96 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div className='flex flex-row space-x-5'>
                  <div className='mt-4'>
                    <label className='block text-sm font-medium leading-6 text-gray-900'>Position</label>
                    <input
                      type='text'
                      className='block w-96 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                  <div className='mt-4'>
                    <label className='block text-sm font-medium leading-6 text-gray-900'>From</label>
                    <input
                      type='text'
                      className='block w-48 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                  <div className='mt-4'>
                    <label className='block text-sm font-medium leading-6 text-gray-900'>To</label>
                    <input
                      type='text'
                      className='block w-48 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div className='mt-10'>
                  <div className='flex flex-row space-x-5'>
                    <div className='mt-4'>
                      <label className='block text-sm font-medium leading-6 text-gray-900'>Company Name</label>
                      <input
                        type='text'
                        className='block w-96 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                  <div className='flex flex-row space-x-5'>
                    <div className='mt-4'>
                      <label className='block text-sm font-medium leading-6 text-gray-900'>Position</label>
                      <input
                        type='text'
                        className='block w-96 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                    <div className='mt-4'>
                      <label className='block text-sm font-medium leading-6 text-gray-900'>From</label>
                      <input
                        type='text'
                        className='block w-48 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                    <div className='mt-4'>
                      <label className='block text-sm font-medium leading-6 text-gray-900'>To</label>
                      <input
                        type='text'
                        className='block w-48 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                </div>
                <h2 className='mt-14 text-base font-semibold leading-7 text-gray-900'>Character Reference</h2>
                <div className='flex flex-row space-x-5'>
                  <div className='mt-4'>
                    <label className='block text-sm font-medium leading-6 text-gray-900'>Name</label>
                    <input
                      type='text'
                      className='block w-72 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                  <div className='mt-4'>
                    <label className='block text-sm font-medium leading-6 text-gray-900'>Company</label>
                    <input
                      type='text'
                      className='block w-72 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div className='flex flex-row space-x-5'>
                  <div className='mt-4'>
                    <label className='block text-sm font-medium leading-6 text-gray-900'>Position</label>
                    <input
                      type='text'
                      className='block w-72 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                  <div className='mt-4'>
                    <label className='block text-sm font-medium leading-6 text-gray-900'>Contact No.</label>
                    <input
                      type='text'
                      className='block w-72 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div className='mt-10'>
                  <div className='flex flex-row space-x-5'>
                    <div className='mt-4'>
                      <label className='block text-sm font-medium leading-6 text-gray-900'>Name</label>
                      <input
                        type='text'
                        className='block w-72 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                    <div className='mt-4'>
                      <label className='block text-sm font-medium leading-6 text-gray-900'>Company</label>
                      <input
                        type='text'
                        className='block w-72 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                  <div className='flex flex-row space-x-5'>
                    <div className='mt-4'>
                      <label className='block text-sm font-medium leading-6 text-gray-900'>Position</label>
                      <input
                        type='text'
                        className='block w-72 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                    <div className='mt-4'>
                      <label className='block text-sm font-medium leading-6 text-gray-900'>Contact No.</label>
                      <input
                        type='text'
                        className='block w-72 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                </div>
                <div className='mt-10 flex items-center justify-end gap-x-6'>
                  <button type='button' className='text-sm font-semibold leading-6 text-gray-900'>
                    Cancel
                  </button>
                  <button
                    type='submit'
                    className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
