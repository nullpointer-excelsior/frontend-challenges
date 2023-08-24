import { ReactNode } from 'react'

export default function BookBudge({ children }: { children: ReactNode }) {
  return (
    <span className='bg-green-100 text-green-800 text-3xl font-medium mr-2 px-2.5 py-0.5 rounded-full'>{children}</span>
  )
}
