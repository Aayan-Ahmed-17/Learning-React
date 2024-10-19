import React, { useState, useEffect } from 'react';

function Sidebar({initialMinutes = 5 }){

    // const [timeRemaining, setTimeRemaining] = useState(initialMinutes * 60);
  
    // useEffect(() => {
    //   if (timeRemaining > 0) {
    //     const timerId = setTimeout(() => {
    //       setTimeRemaining(prevTime => prevTime - 1);
    //     }, 1000);
  
    //     return () => clearTimeout(timerId);
    //   }
    // }, [timeRemaining]);
  
    // const minutes = Math.floor(timeRemaining / 60);
    // const seconds = timeRemaining % 60;
  
    // const formatTime = (time) => {
    //   return time.toString().padStart(2, '0');
    // };
  
    return (
      <section className="sidebar bg-slate-800 md:col-span-3 md:grid md:grid-rows-7 gap-4">

        <div className="timer-box bg-white row-span-3 grid place-items-center rounded-xl drop-shadow-[0_0_30px_rgba(240,241,246,0.3)]">
          <div className='rounded-full grid w-2/4 h-2/3 place-items-center border-solid border-4 border-[#2c8c72]'>
            <h3 className='md:text-5xl text-[#2c8c72]'>04:15</h3>  
          </div>
        </div>
        <div className="score-box bg-blue-500 row-span-5"></div>
        
      </section>
    );
  
  }

export default Sidebar

// import React, { useState, useEffect } from 'react';

// const CircularCountdownTimer = ({ initialMinutes = 5 }) => {
//   const [timeRemaining, setTimeRemaining] = useState(initialMinutes * 60);
//   const totalTime = initialMinutes * 60;

//   useEffect(() => {
//     if (timeRemaining > 0) {
//       const timerId = setTimeout(() => {
//         setTimeRemaining(prevTime => prevTime - 1);
//       }, 1000);

//       return () => clearTimeout(timerId);
//     }
//   }, [timeRemaining]);

//   const minutes = Math.floor(timeRemaining / 60);
//   const seconds = timeRemaining % 60;

//   const formatTime = (time) => {
//     return time.toString().padStart(2, '0');
//   };

//   const calculateProgress = () => {
//     return ((totalTime - timeRemaining) / totalTime) * 100;
//   };

//   return (
//     <section className="sidebar bg-orange-500 col-span-3 grid place-items-center h-screen">
//       <div className="relative w-52 h-52">
//         <svg className="w-full h-full transform -rotate-90">
//           <circle
//             cx="50%"
//             cy="50%"
//             r="48%"
//             fill="none"
//             stroke="#000"
//             strokeWidth="8"
//             strokeDasharray="301.59"
//             strokeDashoffset={301.59 * (calculateProgress() / 100)}
//             className="transition-all duration-1000 ease-linear"
//           />
//         </svg>
//         <div className="absolute top-0 left-0 w-full h-full rounded-full bg-red-500 flex items-center justify-center" style={{ clipPath: 'circle(47%)' }}>
//           <h3 className='text-5xl bg-white px-4 py-2 rounded'>
//             {formatTime(minutes)}:{formatTime(seconds)}
//           </h3>
//         </div>
//       </div>
//     </section>
  // );
// };

// export default CircularCountdownTimer;