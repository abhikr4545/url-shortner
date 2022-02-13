import React, { useState, useEffect } from 'react';

import Link from './Link';

const LinkDetailsAndStatics = () => {

  const initialState = { userInput: "" }
  const [formValues, setFormValues] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isRed, setIsRed] = useState('');
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues))
    setIsSubmit(true)

    if((formValues.userInput !== '')) fetchShortUrl();
    
  }

  const fetchShortUrl = async () => {
      const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${formValues.userInput}`)
      const data = await response.json()
    console.log(data.result.short_link);
    setUrl(formValues.userInput)
    setFormValues({ userInput: '' })
      setShortUrl(data.result.short_link)
  }

  const handleChange = event => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
    setIsSubmit(true)
  }

  const validate = (values) => {
    const error = {}
    const pattern = new RegExp(
      /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%\/.\w-]*)?\??(?:[-+=&;%@.\w]*)#?\w*)?)/gm
    );
    if (!formValues.userInput) {
      error.userInput = " Field cannot be empty "
      setIsRed('border-red')
    } else if (!pattern.test(formValues.userInput)) {
       error.userInput = " Not a valid URL "
    }
    return error;
  }

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setIsRed('')
    } else {
      setIsRed('border-red')
    }
  }, [formErrors])

  return (
    <section className='relative bg-slate-200 h-96'>
      <div className='bg-primaryDarkViolet h-48 rounded-lg w-80 absolute left-0 right-0 mx-auto -top-24 flex flex-row justify-center items-center md:w-6/12'>
        <form className='mb-0 space-y-6' action='#' method='POST' onSubmit={handleSubmit}>
          <div>
            <div className="mt-1 text-center">
              <input type="text" name='userInput' placeholder='Shorten a link here...' autoComplete='off' className={`w-72 rounded-lg font-poppins shadow-sm border-neutral-100 focus:ring-0 ${isRed} mb-6 md:w-84`} value={formValues.userInput} onChange={handleChange} />
              <p className='text-red'>{formErrors.userInput}</p>
              <button type='submit' className='bg-primaryCyan w-72 py-3 text-white font-poppins font-bold rounded-lg md:w-84'>Shorten It!</button>
            </div>
          </div>
        </form>
      </div>
      <div className='pb-32'></div>
      <div className='space-y-6'>
        {shortUrl && <Link link={url} shortLink={shortUrl} />}
      </div>
    </section>
  )
};

export default LinkDetailsAndStatics;
