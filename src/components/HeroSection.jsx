import HeroImage from '../images/illustration-working.svg';

const HeroSection = () => {
  return (
    <section className='md:grid md:grid-cols-2 md:px-60 md:pt-20 pb-56'>
      <div className='md:order-last md:w-auto overflow-hidden'>
        <img src={HeroImage} alt="Women Working" className='md:order-last'/>
      </div>
      <div className='text-center space-y-6 pt-5 md:text-left md:flex md:flex-col md:items-baseline md:justify-center'>
        <h1 className='text-3xl font-extrabold text-primaryDarkViolet md:text-7xl'>More than just <br /> shorter links</h1>
        <p className='md:text-2xl'>
          Build your brand's recognition and <br /> get detailed insights on how your <br /> links are performing.
        </p>
        <button className={`py-2 w-40 bg-primaryCyan font-bold text-white  rounded-3xl md:py-2 hover:bg-opacity-80 `}>
          Get Started
        </button>
      </div>
    </section>
  )
};

export default HeroSection;
