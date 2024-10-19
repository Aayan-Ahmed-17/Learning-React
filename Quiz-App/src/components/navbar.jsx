function Navbar({ src }) {
  return (
    <nav className="navbar drop-shadow-[0_35px_35px_rgba(54,65,86,0.25)] grid grid-cols-2 md:grid-cols-12 sm:grid-cols-6 md:gap-2 px-6 text-white bg-[#364156] sticky top-0 z-10">
      <div className="col-span-2 px-2 flex gap-2">
        <div className="w-10 rounded-full">
          <img
            src="../../src/assets/images/bulb-on.png"
            alt="Tailwind-CSS-Avatar-component"
            className="rounded-full"
          />
        </div>
        <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl">Quiz-App</h2>
      </div>
      <div className="mx-auto col-span-6 text-center md:flex gap-2 px md:block hidden">
        <h3 className="text-xl">Categories</h3>
        <input
          type="text"
          placeholder="Search"
          className="rounded-full bg-zinc-200 flex-1 text-black py-1 px-2"
        />
      </div>
      <div className="col-span-4 px-2 grid grid-cols-3 gap-2">
        <div className="btn-div grid grid-cols-2 col-span-2 gap-2 ">
          <button className="btn bg-[#2c8c72] text-white md:text-lg rounded-full col-span-1 md:block hidden">Sign Up</button>
          <button className="btn  text-[#2c8c72] border-solid border-4 border-[#2c8c72] text-lg rounded-full col-span-1 md:block hidden">Button</button>
        </div>
        <img className="w-12 rounded-full " src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="" />
      </div>
    </nav>
  );
  
}
export default Navbar;
