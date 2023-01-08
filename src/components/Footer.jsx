import React from 'react';
import Location from '../assets/location.png';
import Tel from '../assets/tel.png';
import Print from '../assets/print.png';
import Facebook from '../assets/Facebook.png';
import Twitter from '../assets/Twitter.png';
import Linkedin from '../assets/LinkedIn.png';
import Youtube from '../assets/Youtube.png';
import Instagram from '../assets/Instagram.png';
import GooglePlus from '../assets/GooglePlus.png';
import Pinterest from '../assets/Pinterest.png';
import Rss from '../assets/RSS.png';

const Footer = () => {
  return (
    <section className=''>
      <div className='footer w-[80%] mx-auto max-w-[1400px]'>
        <hr className='divider border-1 bg-orange border-orange mt-[210px] mb-[93px]' />
        <div className='flex flex-col lg:flex-row gap-12 lg:gap-0 justify-around items-center mb-[83px]'>
          <div className='logo'>
            <h2 className='text-[52px] font-bold'>Logo</h2>
          </div>
          <div className=''>
            <div className='address'>
              <div className='location flex'>
                <span>
                  <img src={Location} alt='' />
                </span>
                <p className='text-sm text-dark ml-[21px]'>
                  345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
                </p>
              </div>
              <div className='flex justify-between mt-[22px]'>
                <div className='tel flex'>
                  <span>
                    <img src={Tel} alt='' />
                  </span>
                  <p className='text-sm text-dark ml-[21px]'>(123) 456-7890</p>
                </div>
                <div className='print flex'>
                  <span>
                    <img src={Print} alt='' />
                  </span>
                  <p className='text-sm text-dark ml-[21px]'>(123) 456-7890</p>
                </div>
              </div>
            </div>
            <div className='social mt-[52px] flex items-center gap-[30px]'>
              <p className='text-sm text-[#0A142F] opacity-50'>Social Media</p>
              <div className='icon'>
                <img src={Facebook} alt='' />
              </div>
              <div className='icon'>
                <img src={Twitter} alt='' />
              </div>
              <div className='icon'>
                <img src={Linkedin} alt='' />
              </div>
              <div className='icon'>
                <img src={Youtube} alt='' />
              </div>
              <div className='icon'>
                <img src={Instagram} alt='' />
              </div>
              <div className='icon'>
                <img src={GooglePlus} alt='' />
              </div>
              <div className='icon'>
                <img src={Pinterest} alt='' />
              </div>
              <div className='icon'>
                <img src={Rss} alt='' />
              </div>
            </div>
          </div>
        </div>
        <div className='footer-links w-[90%] mx-auto mb-4'>
          <hr className='border-[#7BB9FC] border-1 mb-6 ' />
          <div className='flex flex-col min-[1300px]:flex-row gap-6 justify-between items-center'>
            <div className='left-links text-xs lg:text-sm flex gap-[29px]'>
              <div className='link'>ABOUT US</div>
              <div className='link'>CONTACT US</div>
              <div className='link'>HELP</div>
              <div className='link'>PRIVACY POLICY</div>
              <div className='link'>DISCLAIMER</div>
            </div>
            <div className='copyright'>
              <p className='text-xs lg:text-sm text-[#0A142F] opacity-50'>
                Copyright © 2020 Minimumlivingcost. All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
