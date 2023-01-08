import React from 'react';
import Logo from '../assets/logo.png';
import Map from '../assets/map.png';
import Search from '../assets/search.svg';
import Down from '../assets/down.svg';

const Hero = () => {
  return (
    <div className='relative bg-hero bg-fixed bg-center bg-no-repeat bg-cover h-[auto] min-h-[100vh] pb-5'>
      <div className='overlay absolute top-0 left-0 w-[100%] h-[100%] bg-overlay'></div>
      <nav className='relative z-10 flex w-[80%] mx-auto max-[1046px]:items-center items-end max-[1046px]:justify-between pt-4 border-b-[0.5px] border-white max-w-[1400px]'>
        <div className='logo pb-4'>
          <img src={Logo} alt='' />
        </div>
        <div className='nav-items text-white flex gap-16 ml-[20%] text-lg max-[1046px]:hidden'>
          <div className='nav-items__item active px-5 pb-4'>Home</div>
          <div className='nav-items__item'>Landlord</div>
          <div className='nav-items__item'>Tenants</div>
          <div className='nav-items__item'>Contact Us</div>
        </div>
        <img
          className='min-[1047px]:hidden cursor-pointer'
          src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABUklEQVR4nO3WPUoDQRjG8VGsBNNooQcwjdYWAVN5gBCwtbO29ApewSuIN7CxEaxt4glsbBQs1IA/CZnAqkk0kI/Zdf4wsMsMs887zzsPG0Lmn4GV3ghlBi104miFsoE9XPvJLZohdVDHJT6i8Accx9F7Fud6a+ohNbCBM7xGsS/xfa2wZhWneIprujjH5mLVhy/inqO499/EYX1E0bX5qu+LWcZRoV16XGFngj22cVFow0eczC3hcIC7bxd4f4rBcI9DLE1X+Zw+OOKAmtPYu5hEc2kBo1t2dxZJVFtAiHQnTrgxm2zNVP34w3z782HOxNZFtLf+/9CAGzRCYqARtQ3oDFs0oB0SB+2B2GGTwycSRS4kMWRHquiIGRNyISHH78KQUysx5NSqYvymgFxIYsiOVPGyq0ohKSAXkhiyI4khO5IYsiNlc6RshMoWksmEqfIJIwzCL8+k4K0AAAAASUVORK5CYII='></img>
      </nav>
      <div className='hero-content max-w-[1400px] relative grid min-h-[80vh] place-content-center z-10 md:flex w-[80%] mx-auto items-center justify-between mt-12 lg:mt-0'>
        <h1 className='hero-content__text text-white font-bold text-4xl md:text-5xl lg:text-[52px] basis-[50%] leading-[55px] md:leading-[70px]'>
          The Most Affordable Place To Stay In The San Francisco Bay Area
        </h1>
        <div className='hero-content__image'>
          <img className='mx-auto' src={Map} alt='' />
          <div className='drop-down w-[70%] max-[600px]:w-[90%] max-[700px]:w-[85%] md:w-[90%] mx-auto bg-white rounded-[10px] p-4 flex flex-col lg:flex-row'>
            <div className='dropdown-menu w-[100%] mb-5 lg:mb-0 lg:w-[84%] flex flex-col md:flex-row'>
              <button className='bg-grey py-5 max-[767px]:rounded md:rounded-l-md border border-[#e6e6e6] w-full md:w-[45%] flex items-center justify-center gap-5'>
                <span>All Type</span>

                <img src={Down} alt='' />
              </button>
              <button className='bg-grey py-5 w-full md:w-[55%] max-[767px]:rounded max-[1023px]:rounded-r lg:rounded-none border border-[#e6e6e6] flex items-center justify-center gap-5'>
                <span>Neighborhood</span>

                <img src={Down} alt='' />
              </button>
            </div>
            <button className='py-5 lg:py-0 max-[1023px]:rounded lg:rounded-r-lg border border-[#e6e6e6] bg-blue w-full lg:w-[16%] flex items-center justify-center'>
              <img src={Search} alt='' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
