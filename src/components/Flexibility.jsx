import React from 'react';
import Masonry from '../assets/masonry.png';

const propertyFormArray = [
  {
    id: 1,
    title: 'Name',
    placeholder: 'Enter Name',
    text: true,
  },
  {
    id: 2,
    title: 'Address',
    placeholder: 'Enter Address',
    text: true,
  },
  {
    id: 3,
    title: 'Unit Number',
    placeholder: 'Enter Unit',
    text: true,
  },
  {
    id: 4,
    title: 'City',
    placeholder: 'Select City',
    dropdown: true,
    options: [
      {
        id: 0,
        option: 'Ikeja',
      },
      {
        id: 1,
        option: 'FESTAC',
      },
      {
        id: 2,
        option: 'Magodo',
      },
    ],
  },
  {
    id: 5,
    title: 'State',
    placeholder: 'Select State',
    dropdown: true,
    options: [
      {
        id: 0,
        option: 'Ogun',
      },
      {
        id: 1,
        option: 'Osun',
      },
      {
        id: 2,
        option: 'Rivers',
      },
    ],
  },
  {
    id: 6,
    title: 'Room Type',
    placeholder: 'Select Room Type',
    dropdown: true,
    options: [
      {
        id: 0,
        option: 'Standard',
      },
      {
        id: 1,
        option: 'Deluxe',
      },
      {
        id: 2,
        option: 'Double',
      },
    ],
  },
  {
    id: 7,
    title: 'Price',
    placeholder: 'Enter Price',
    text: true,
  },
];

const Flexibility = () => {
  return (
    <section>
      <div className='flexibility w-[100%] md:w-[80%] mx-auto max-w-[1400px] py-[80px]'>
        <div className='top-section w-[80%] md:w-[100%] mx-auto flex flex-col lg:flex-row justify-between items-center gap-y-10'>
          <div className='masonry basis-[50%]'>
            <img width={'100%'} src={Masonry} alt='' />
          </div>
          <div className='content basis-[45%] text-[18px]'>
            <div className='content-title font-extrabold text-4xl w-[100%] lg:w-[80%] leading-[54px]'>
              Flexibility and options to suit your lifestyle
            </div>
            <p className='content-body pt-7 pb-10 w-[100%] lg:w-[80%]'>
              You need it? We got it. We make finding your next home easy,
              comfortable, and simple. From our happiness guarantee to our
              selective roommate finder option. We provide you the flexibility
              that you most desire.
            </p>
            <button className='bg-orange py-3 px-6 rounded-[13px] text-white'>
              Search Rooms
            </button>
          </div>
        </div>
        <div className='bottom-section w-[100%] mx-auto pt-[110px] container'>
          <h3 className='bottom-title font-medium text-2xl text-center w-[80%] md:w-[100%] mx-auto'>
            Your property with us and be Confident that Your Room will be Filled
            Out!
          </h3>
          <form
            action=''
            className='property-form mt-[37px] shadow-form rounded-[10px] px-[63px] py-[45px] font-poppins'>
            <h2 className='font-bold text-[28px] text-orange text-center mb-[45px]'>
              Add a New Property
            </h2>
            <div className='grid md:grid-cols-2 md:gap-x-6 lg:grid-cols-3'>
              {propertyFormArray.map(
                ({ id, title, placeholder, text, dropdown, options }) => (
                  <div className='mb-6' key={id}>
                    <label
                      htmlFor={`${title}`}
                      className='block mb-2 text-[17px] font-semibold text-[#252B42]'>
                      {title} <span className='text-orange'>*</span>
                    </label>
                    {text && (
                      <input
                        type='text'
                        id='name'
                        className='border border-border-grey py-[11px] px-[21px] bg-grey w-full rounded-[5px] placeholder:text-[#737373]'
                        placeholder={placeholder}
                      />
                    )}
                    {dropdown && (
                      <div className='bg-grey w-full border border-border-grey rounded-[5px]'>
                        <select className='border-r-[21px] border-r-[transparent] py-[13px] pl-[21px] bg-grey w-full text-[#737373]'>
                          <option value='city'>{placeholder}</option>
                          {options.map(({ option, id }) => (
                            <React.Fragment key={id}>
                              <option>{option}</option>
                            </React.Fragment>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
            <div>
              <label
                htmlFor='description'
                className='block mb-2 text-[17px] font-semibold'>
                Description <span className='text-orange'>*</span>
              </label>
              <textarea
                name='description'
                id='description'
                rows='6'
                className='border border-border-grey py-[11px] px-[21px] bg-grey w-full rounded-[5px] text-[#737373]'
                defaultValue={'Enter Description'}></textarea>
            </div>

            <div className='mt-6'>
              <label
                htmlFor='upload'
                className='block mb-2 text-[17px] font-semibold'>
                Upload Photos
              </label>
              <div className='flex items-center justify-center w-full'>
                <label className='drag-image w-full h-[102px] rounded-[10px] bg-[rgba(244, 81, 30, 0.01)]'>
                  <div className='grid place-content-center h-[100%] text-center gap-y-2'>
                    <h3 className='text-sm sm:text-base font-medium font-poppins'>
                      Drag your images here, or
                      <span className='text-orange font-bold'> browse</span>
                    </h3>
                    <p className='text-xs tracking-wider'>
                      Supported: JPG, JPEG, PNG
                    </p>
                  </div>
                </label>
              </div>
            </div>
            <div className='flex justify-center'>
              <input
                type='submit'
                value='Add New Property'
                className='bg-orange text-white mt-[55px] py-5 w-[100%] lg:w-[30%] rounded-[10px]'
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Flexibility;
