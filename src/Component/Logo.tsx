import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
<Link href="/" className='flex items-end gap-2'>
<Image src="/logo.png" width={32} height={32} alt="logo" />
<div className="relative">
  <h1 className="text-xl font-bold text-white tracking-wide capitalize">ocean</h1>
  <div className="absolute -right-2.5 bottom-1.5 bg-sky-700 w-2 h-2 rounded-full"></div>
</div>
</Link>
  )
}
