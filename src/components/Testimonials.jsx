import React from 'react';
import videoPic from '../assets/video.png';
import Quote from '../assets/quote.svg';
import Harry from '../assets/harry.png';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Pagination, Autoplay]);

const Testimonials = () => {
  return (
    <section className='bg-light-orange'>
      <div className='testimonials w-[80%] mx-auto lg:w-[100%] lg:pl-[129px] flex flex-col lg:flex-row items-center lg:justify-end gap-8 min-h-[max-content] py-[4rem] lg:py-0 max-w-[1400px]'>
        <div className='relative testimonials--text w-[80%] lg:w-[50%] basis-[80%] lg:basis-[50%] '>
          <div className='testimonial-content relative'>
            <img
              className='absolute -top-8 -left-11 -z-10'
              src={Quote}
              width='70px'
              height='60px'
              alt=''
            />
            <Swiper
              autoplay={true}
              grabCursor={true}
              // centeredSlides={true}
              slidesPerView={1}
              // coverflowEffect={{
              //   rotate: 50,
              //   stretch: 0,
              //   depth: 100,
              //   modifier: 1,
              //   slideShadows: false,
              // }}
              pagination={true}
              className='mySwiper'>
              <SwiperSlide>
                <p className='text-lg xl:text-[21px] text-center lg:text-left leading-7 xl:leading-9'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  interdum nisl et nunc facilisis, a commodo eros mollis. Nunc
                  vel pellentesque est. Curabitur at odio sit amet libero
                  vulputate efficitur ac nec justo. Nulla vitae mauris quam.
                  Nulla quam massa, faucibus id pretium ac, mattis eu velit.
                  Donec sed risus a lacus fringilla finibus.
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p className='text-lg xl:text-[21px] text-center lg:text-left leading-7 xl:leading-9'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  interdum nisl et nunc facilisis, a commodo eros mollis. Nunc
                  vel pellentesque est. Curabitur at odio sit amet libero
                  vulputate efficitur ac nec justo. Nulla vitae mauris quam.
                  Nulla quam massa, faucibus id pretium ac, mattis eu velit.
                  Donec sed risus a lacus fringilla finibus.
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p className='text-lg xl:text-[21px] text-center lg:text-left leading-7 xl:leading-9'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  interdum nisl et nunc facilisis, a commodo eros mollis. Nunc
                  vel pellentesque est. Curabitur at odio sit amet libero
                  vulputate efficitur ac nec justo. Nulla vitae mauris quam.
                  Nulla quam massa, faucibus id pretium ac, mattis eu velit.
                  Donec sed risus a lacus fringilla finibus.
                </p>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className='testifier w-[70%] sm:w-[50%] mx-auto lg:mx-0 lg:w-[40%] gap-[19px] mt-[26px] flex items-center justify-center lg:justify-start'>
            <div className='testifier-img  '>
              <img src={Harry} alt='' />
            </div>
            <Swiper
              autoplay={true}
              grabCursor={true}
              slidesPerView={1}
              pagination={true}
              className='nameSwiper h-[50px] w-[100%]'>
              <SwiperSlide>
                <p className='text-lg font-bold text-orange'>Harry Wilson</p>
                <p>Property Owner</p>
              </SwiperSlide>
              <SwiperSlide>
                <p className='text-lg font-bold text-orange'>Rebel Mike</p>
                <p>Property Seeker</p>
              </SwiperSlide>
            </Swiper>
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
