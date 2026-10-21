import React, { useState } from 'react';
import { BiMenuAltRight, BiUpArrowAlt, BiX } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Header = () => {
  const Data = [
    { Title: 'How it works', route: 'h-works' },
    { Title: 'Mission', route: 'mission' },
    { Title: 'Works', route: 'works' },
    { Title: 'Pricing', route: 'pricing' },
  ];

  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const closeMenu = () => setNavOpen(false);

  return (
    <div className="flex w-full sm:max-w-[90%] text-white mx-auto pt-5 mb-5 justify-center">
      <div className="flex items-center z-[1000] justify-between fixed rounded-full bg-black py-3 sm:py-5 px-5 sm:px-10 w-[95%] sm:max-w-[75%] border-spacing-3 border-opacity-10 border border-grey">

        <RouterLink to="/" onClick={closeMenu}>
          <div className="min-w-[20%] text-orange tracking-widest text-xl sm:text-2xl xl:text-3xl font-bold cursor-pointer">
            Slaty
          </div>
        </RouterLink>

        <nav
          className={`${
            navOpen ? 'scale-100' : 'xl:scale-100 scale-0'
          } transition-all flex ease-in-out duration-700 flex-1 xl:flex-row flex-col items-center xl:bg-opacity-0 xl:static absolute top-20 xl:py-0 py-8 rounded-2xl right-6 bg-orange xl:max-w-auto w-[250px] xl:h-auto h-auto text-center text-base xl:text-lg justify-between`}
        >
          <div className="w-10 h-10 rounded-md rotate-45 xl:hidden bg-orange absolute right-2 -top-3" />

          <ul className="flex justify-between flex-1 xl:justify-center xl:flex-row flex-col items-center gap-5 xl:gap-0">
            {isHomePage &&
              Data.map((data, index) => (
                <li key={index}>
                  <ScrollLink
                    className="mx-3 hover:text-opacity-100 ease-in duration-500 cursor-pointer text-white text-opacity-70"
                    activeClass="active"
                    smooth={true}
                    spy={true}
                    offset={-150}
                    to={data.route}
                    onClick={closeMenu}
                  >
                    {data.Title}
                  </ScrollLink>
                </li>
              ))}

            <li>
              <RouterLink
                to="/online-tutoring"
                onClick={closeMenu}
                className="mx-3 hover:text-white text-white/80 transition"
              >
                Online Tutoring
              </RouterLink>
            </li>

            <li>
              <RouterLink
                to="/become-a-tutor"
                onClick={closeMenu}
                className="mx-3 hover:text-white text-white/80 transition"
              >
                Become a Tutor
              </RouterLink>
            </li>
          </ul>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdZYzOU5Gri3AiOXn_WkT8zTG9sXRqT9fnbSTeZCZ9U4ZBV4Q/viewform"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            <div className="bg-white bg-opacity-10 flex items-center justify-center mt-5 xl:my-0 rounded-lg h-12 w-[90%] xl:w-auto xl:px-5 px-4 border-spacing-3 border-opacity-10 border cursor-pointer border-grey">
              Apply Now
              <BiUpArrowAlt className="rotate-45 text-3xl ml-1" />
            </div>
          </a>
        </nav>

        <OutsideClickHandler onOutsideClick={() => setNavOpen(false)}>
          <div className="menu xl:hidden block text-3xl cursor-pointer">
            {navOpen ? (
              <BiX onClick={() => setNavOpen(false)} />
            ) : (
              <BiMenuAltRight onClick={() => setNavOpen(true)} />
            )}
          </div>
        </OutsideClickHandler>
      </div>
    </div>
  );
};

export default Header;
