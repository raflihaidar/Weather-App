import { Disclosure } from '@headlessui/react'
import CloudIcon from '@mui/icons-material/Cloud';

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-transparent">
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex items-center justify-between gap-x-2">
                      <CloudIcon className='text-white'/>
                      <p className='text-black-300 font-bold'>Weather App</p>
                </div>
              </div>
            </div>
          </div>
        </>
    </Disclosure>
  )
}
