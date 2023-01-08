import React from 'react';
import Feature from '../assets/feature.png';
import Feat1 from '../assets/feat-1.png';
import Feat2 from '../assets/feat-2.png';
import Feat3 from '../assets/feat-3.png';
import Feat4 from '../assets/feat-4.png';
import Feat5 from '../assets/feat-5.png';
import Feat6 from '../assets/feat-6.png';

const FeatureArray = [
  {
    id: 0,
    icon: Feat1,
    text: 'Pay as Little as possible!',
  },
  {
    id: 1,
    icon: Feat2,
    text: 'Enjoy Wisdom Of Community!',
  },
  {
    id: 2,
    icon: Feat3,
    text: "Let's somebody else take care of Landlord!!",
  },
  {
    id: 3,
    icon: Feat4,
    text: 'Enjoy Peaceful Environment!',
  },
  {
    id: 4,
    icon: Feat5,
    text: 'Stay Safe! Save Money!',
  },
  {
    id: 5,
    icon: Feat6,
    text: 'Pay For What You Use!',
  },
];

const Features = () => {
  return (
    <section>
      <div className='features w-[80%] max-w-[1400px] mx-auto py-[100px]'>
        <div className='features-title font-extrabold text-3xl text-text-gray'>
          <span className='border-b-[3px] border-b-orange'>
            Minimum Living Cost{' '}
          </span>
          Takes Care Of Everything
        </div>
        <div className='features-details mt-5 flex items-center'>
          <div className='features-details__image -ml-7 basis-[90%] hidden xl:block'>
            <img src={Feature} alt='' />
          </div>
          <div className='features-details__content grid grid-cols-2 lg:grid-cols-3 gap-10 ml-5 mt-10 xl:mt-0'>
            {FeatureArray.map(({ id, icon, text }) => (
              <div key={id} className='features-details__content--item'>
                <div className='icon p-3 shadow-light w-[50px] h-[50px] rounded-[10px]'>
                  <img src={icon} alt='' />
                </div>
                <div className='text mt-5 font-semibold text-[20px] md:text-[26px] capitalize'>
                  {text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
