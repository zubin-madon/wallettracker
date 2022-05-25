import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import Link from 'next/link';


export default function Home() {
  return (
    <div className='text-3xl text-blue-700 font-mono bg-slate-900'>
    <h1>Degenalysis</h1>

      <footer className='text-red-600'>
        <p>Copyrights {new Date().getFullYear()} Degenalysis. </p>
      </footer>
    </div>
  )
}
