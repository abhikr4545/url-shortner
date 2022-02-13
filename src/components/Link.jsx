import React, { useState } from 'react'

const Link = ({ link, shortLink }) => {

  const [isCopy, setIsCopy] = useState(false)

  const handleClick = () => {
    navigator.clipboard.writeText(shortLink)
    setIsCopy(true)
    setTimeout(() => setIsCopy(false), 2000)
  }

  return (
    <article className='text-left bg-white w-80 mx-auto rounded-lg md:w-6/12 md:text-center'>
      <div className='pt-4'>
        <div className='pl-5'>
          <p className='font-poppins pb-3 font-bold overflow'>{ link }</p>
        </div>
        <div className='w-full h-0.5 bg-grayishViolet'></div>
      </div>
      <div className='pb-4 pl-5'>
        <p className='font-poppins py-3 text-primaryCyan font-semibold text-lg'>{ shortLink }</p>
        <button onClick={handleClick} className={`font-poppins ${ isCopy ? 'bg-primaryDarkViolet' : 'bg-primaryCyan' } text-white w-72 py-2 rounded-lg font-bold text-lg`}>{ isCopy ? 'Copied' : 'Copy'}</button>
      </div>
    </article>
  )
}

export default Link