import React from 'react';
import videoPic from '../assets/video.png';
import Quote from '../assets/quote.svg';
import Harry from '../assets/harry.png';

const Testimonials = () => {
  return (
    <section className='bg-light-orange'>
      <div className='testimonials w-[80%] mx-auto lg:w-[100%] lg:pl-[129px] flex flex-col lg:flex-row items-center lg:justify-end gap-8 min-h-[max-content] py-[4rem] lg:py-0 max-w-[1400px]'>
        <div className='testimonials--text basis-[50%]'>
          <div className='testimonial-content relative'>
            <img
              className='absolute -top-8 -left-11 -z-10'
              src={Quote}
              width='70px'
              height='60px'
              alt=''
            />
            <p className='text-lg xl:text-[21px] text-center lg:text-left leading-7 xl:leading-9'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel
              pellentesque est. Curabitur at odio sit amet libero vulputate
              efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa,
              faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus
              fringilla finibus.
            </p>
          </div>
          <div className='testifier mt-[26px] flex items-center gap-[19px] justify-center lg:justify-start'>
            <div className='testifier-img'>
              <img src={Harry} alt='' />
            </div>
            <div className='testifier-details'>
              <p className='text-lg font-bold text-orange'>Harry Wilson</p>
              <p>Property Owner</p>
            </div>
          </div>
        </div>
        <div className='video'>
          <img src={videoPic} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
