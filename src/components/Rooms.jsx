import React from 'react';

const Rooms = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
      <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
        <h3 className='text-2xl font-bold'>OUR COURSE PROGRAMS</h3>
        <p className='pt-4'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error ipsam
          rerum iusto excepturi similique minus?
        </p>
      </div>

      <div className='grid grid-cols-2 col-span-2 gap-2'>
        <img
        className='object-cover w-full h-full'
          src='https://img.freepik.com/premium-vector/voice-assistant-sound-wave-microphone-voice-control-technology-voice-sound-recognition-ai-assistant-voice-background_176516-289.jpg'
          alt='/'
        />
        <img
        className='row-span-2 object-cover w-full h-full'
          src='https://wallpapers.com/images/hd/programming-iphone-java-logo-on-black-0hnhv8ki7x2rjgyu.jpg'
          alt='/'
        />
        <img
        className='object-cover w-full h-full'
          src='https://codequotient.com/blog/wp-content/uploads/2023/03/How-to-Ace-Your-Online-Coding-Test-Tips-and-Tricks-from-Experts.jpg'
          alt='/'
        />
      </div>
    </div>
  );
};

export default Rooms;