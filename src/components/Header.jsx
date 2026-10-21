import React, { useState } from 'react';
import { BiMenuAltRight, BiUpArrowAlt, BiX } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  const Data = [
    { Title: 'How it works', route: 'h-works' },
    { Title: 'Mission', route: 'mission' },
    { Title: 'Works', route: 'works' },
    { Title: 'Pricing', route: 'pricing' },
  ];

  const [navOpen, setNavOpen] = useState(false);

  const closeMenu = () => setNavOpen(false);

  return (
    <div className="flex w-full sm:max-w-[90%] text-white mx-auto pt-5 mb-5 justify-center">
      <div className="flex items-center z-[1000] justify-between fixed rounded-full bg-black py-3 sm:py-5 px-5 sm:px-10 w-[95%] sm:max-w-[85%] border-spacing-3 border-opacity-10 border border-grey">

        <RouterLink to="/" onClick={closeMenu}>
          <div className="min-w-[20%] text-orange tracking-widest text-xl sm:text-2xl xl:text-3xl font-bold cursor-pointer">
            Slaty
          </div>
        </RouterLink>

        <nav
          className={`${
            navOpen ? 'scale-100' : 'xl:scale-100 scale-0'
          } transition-all flex ease-in-out duration-700 flex-1 xl:flex-row flex-col items-center xl:bg-opacity-0 xl:static absolute top-20 xl:py-0 py-10 rounded-2xl right-6 bg-orange xl:max-w-auto w-[250px] xl:h-auto h-auto text-center text-base xl:text-lg justify-between`}
        >
          <div className="w-10 h-10 rounded-md rotate-45 xl:hidden bg-orange absolute right-2 -top-3" />

          <ul className="flex justify-between flex-1 xl:justify-center xl:flex-row flex-col items-center">
            {Data.map((data, index) => (
              <li key={index} className="my-2 xl:my-0">
                <ScrollLink
                  className="mx-3 max-w-[60%] hover:text-opacity-100 ease-in duration-500 cursor-pointer text-white text-opacity-70"
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

            <li className="my-2 xl:my-0">
              <RouterLink
                to="/online-tutoring"
                onClick={closeMenu}
                className="mx-3 whitespace-nowrap text-white text-opacity-80 hover:text-opacity-100"
              >
                Online Tutoring
              </RouterLink>
            </li>

            <li className="my-2 xl:my-0">
              <RouterLink
                to="/become-a-tutor"
                onClick={closeMenu}
                className="mx-3 whitespace-nowrap text-white text-opacity-80 hover:text-opacity-100"
              >
                Become A Tutor
              </RouterLink>
            </li>
          </ul>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdZYzOU5Gri3AiOXn_WkT8zTG9sXRqT9fnbSTeZCZ9U4ZBV4Q/viewform"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="bg-white bg-opacity-10 flex items-center justify-center mt-5 xl:my-0 rounded-lg h-12 w-[90%] xl:w-auto xl:px-5 px-3 border-spacing-3 border-opacity-10 border cursor-pointer border-grey whitespace-nowrap"
          >
            Become A Tutor
            <BiUpArrowAlt className="rotate-45 text-3xl ml-1" />
          </a>
        </nav>

        <OutsideClickHandler onOutsideClick={closeMenu}>
          <div className="menu xl:hidden block text-3xl">
            {navOpen ? (
              <BiX onClick={closeMenu} />
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
