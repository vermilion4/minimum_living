import React from 'react';
import Prop1 from '../assets/prop-1.png';
import Prop2 from '../assets/prop-2.png';
import Prop3 from '../assets/prop-3.png';
import Prop4 from '../assets/prop-4.png';
import Prop5 from '../assets/prop-5.png';
import Prop6 from '../assets/prop-6.png';
import Bed from '../assets/bed.svg';
import Shower from '../assets/Shower.svg';
import Size from '../assets/size.svg';

const propertyArray = [
  {
    id: 0,
    image: Prop1,
  },
  {
    id: 1,
    image: Prop2,
  },
  {
    id: 2,
    image: Prop3,
  },
  {
    id: 3,
    image: Prop4,
  },
  {
    id: 4,
    image: Prop5,
  },
  {
    id: 5,
    image: Prop6,
  },
];

const List = () => {
  return (
    <section className='bg-light-grey'>
      <div className='list-properties w-[80%] mx-auto pt-[61px] max-w-[1400px]'>
        <div className='list-properties__header flex flex-col sm:flex-row items-center justify-start sm:justify-between gap-5 sm:gap-0'>
          <div className='font-extrabold text-3xl text-text-gray'>
            <span className='border-b-[3px] border-b-orange'>List O</span>f
            Properties
          </div>
          <button className='bg-orange shadow-btn text-white rounded-[5px] p-3'>
            View All Property
          </button>
        </div>
        <div className='list-properties__body grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-content-center gap-y-10 mt-[69px]'>
          {propertyArray.map(({ image, id }) => (
            <div
              key={id}
              className='property-card max-w-[350px] mx-auto rounded-[26.6166px] shadow-card border border-[#979797]'>
              <div className='property-img'>
                <img src={image} alt='' />
              </div>
              <div className='property-details px-7 py-5'>
                <div className='address font-bold text-[23px] leading-[29.95px] mb-4'>
                  2578 Folsom Street, San Francisco, CA, 94110
                </div>
                <div className='cost'>
                  <p className='text-[18px] text-dark-grey'>Private Room</p>
                  <p className='text-orange text-[25.55px] font-bold'>
                    $1200/Month
                  </p>
                </div>
              </div>
              <div className='property-amenities px-7 grid grid-cols-3 place-content-center border-t border-[#E4E4E4]'>
                <div className='bed flex items-center justify-center gap-3 py-4 border-r border-[#E4E4E4]'>
                  <img src={Bed} alt='' />
                  <p>4</p>
                </div>
                <div className='shower flex items-center justify-center gap-3 py-4 border-r border-[#E4E4E4]'>
                  <img src={Shower} alt='' />
                  <p>2</p>
                </div>
                <div className='size flex items-center justify-center gap-3 py-4'>
                  <img src={Size} alt='' />
                  <p>2</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <nav
          aria-label='Pagination flex'
          className='flex justify-center py-[81px] w-[96%] mx-auto'>
          <ul className='inline-flex -space-x-px font-bold'>
            <li>
              <a
                href='#'
                className='p-3 sm:p-[25px] ml-0 leading-tight text-muted bg-[#F3F3F3] rounded-l-lg border border-muted '>
                First
              </a>
            </li>

            <li>
              <a
                href='#'
                className='p-3 sm:p-[25px] leading-tight text-orange bg-white border border-muted '>
                1
              </a>
            </li>
            <li>
              <a
                href='#'
                aria-current='page'
                className='p-3 sm:p-[25px] text-white  bg-orange border border-muted'>
                2
              </a>
            </li>
            <li>
              <a
                href='#'
                className='p-3 sm:p-[25px] leading-tight text-orange bg-white border border-muted '>
                3
              </a>
            </li>
            <li>
              <a
                href='#'
                className='p-3 sm:p-[25px] leading-tight text-orange rounded-r-lg bg-white border border-muted '>
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default List;
