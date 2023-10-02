import { useState } from "react";
function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="flex items-center justify-between py-4 md:px-12 shadow-lg px-4">
      <div className="flex justify-normal items-center">
        <a href="/" className="text-cyan-700 text-lg whitespace-nowrap font-medium">
          Ultimate Beach Adobe
        </a>
        <p className="text-xs px-8 hidden lg:block">Marcoola,Qld</p>
        <p className="text-xs px-4 hidden lg:block">
          10guests, 5bedrooms, 7beds, 2.5baths
        </p>
      </div>
      <nav>
        <section className="MOBILE-MENU flex md:hidden">
          <div
            className="HAMBURGER-ICON space-y-1.5"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-6 animate-pulse bg-cyan-700"></span>
            <span className="block h-0.5 w-6 animate-pulse bg-cyan-700"></span>
            <span className="block h-0.5 w-6 animate-pulse bg-cyan-700"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-4 py-4"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[150px]">
              <li>
                <button className="rounded-3xl border-2 border-black text-sm px-3 py-1 whitespace-nowrap hover:bg-cyan-700 hover:text-white hover:border-gray-500">
                  Book Now
                </button>
              </li>
              <li>
                <button className="rounded-3xl border-2 border-black text-sm px-3 py-1 whitespace-nowrap hover:bg-cyan-700 hover:text-white hover:border-gray-500">
                  Photo Gallery
                </button>
              </li>
              <li>
                <button className="rounded-3xl border-2 border-black text-sm px-7 py-1 whitespace-nowrap hover:bg-cyan-700 hover:text-white hover:border-gray-500">
                  Map
                </button>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 md:flex">
          <li>
            <button className="rounded-3xl border-2 border-black text-sm px-3 py-1  hover:bg-cyan-700 hover:text-white hover:border-gray-500">
              Book Now
            </button>
          </li>
          <li>
            <button className="rounded-3xl border-2 border-black text-sm px-3 py-1  hover:bg-cyan-700 hover:text-white hover:border-gray-500">
              Photo Gallery
            </button>
          </li>
          <li>
            <button className="rounded-3xl border-2 border-black text-sm px-7 py-1  hover:bg-cyan-700 hover:text-white hover:border-gray-500">
              Map
            </button>
          </li>
        </ul>
      </nav>
      <style>{`
    .hideMenuNav {
        display: none;
    }
    .showMenuNav {
      display: block;
      position: absolute;
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;
      background: white;
      z-index: 10;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }
  `}</style>
    </div>
  );
}

export default Navbar;
