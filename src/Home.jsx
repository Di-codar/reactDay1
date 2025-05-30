import React from 'react'

// sm = 640px above
// md = 768px above
// lg = 1024px above
// xl = 1280px above

function Home() {
  return (
    <div className=' h-[400px] mb-3'>
      <div className=' h-[200px] grid md:grid-cols-2 lg:grid-cols-4 gap-1'>
        <section className=' bg-slate-500'></section>
        <section className=' bg-red-500'></section>
        <section className=' bg-pink-500'></section>
        <section className=' bg-lime-500'></section>
      </div>

      <div className=' h-[200px] grid md:grid-cols-2 mt-1'>
        <div className=' bg-yellow-300'></div>
        <div className=' bg-yellow-800'></div>
      </div>
    </div>
  )
}

export default Home