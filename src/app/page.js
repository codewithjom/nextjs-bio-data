import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex h-screen'>
      <div className='m-auto text-center'>
        <div className='mb-24 space-y-16'>
          <h1 className='text-6xl max-w-xl'>
            Fill out the{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-red-300 to-cyan-500'>
              biodata
            </span>{' '}
            form now!
          </h1>
          <p className='text-gray-500'>This app provides a detailed guide for creating your biodata.</p>
        </div>
        <Link href='personal-data/' className='px-8 py-2 text-lg text-white rounded-full bg-rose-500 hover:bg-rose-600'>
          Get Started
        </Link>
        <div className='flex ml-52 mt-2 justify-center items-center'>
          <Image src='/click.png' alt='' width={100} height={100} />
        </div>
        <div className='mt-36'>
          <p>
            Made with ❤️ by <span className='text-rose-500'>Jom Dollesin</span>
          </p>
          <code className='bg-gray-300 text-sm font-bold'>NEXTJS</code>
        </div>
      </div>
    </div>
  )
}
