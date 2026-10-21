import React, { useState } from 'react';
import {
  BiMenuAltRight,
  BiUpArrowAlt,
  BiX,
} from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';
import { Link as ScrollLink } from 'react-scroll';
import {
  Link as RouterLink,
  useLocation,
} from 'react-router-dom';

const APPLICATION_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdZYzOU5Gri3AiOXn_WkT8zTG9sXRqT9fnbSTeZCZ9U4ZBV4Q/viewform';

const sectionLinks = [
  { title: 'How it works', route: 'h-works' },
  { title: 'Mission', route: 'mission' },
  { title: 'Works', route: 'works' },
  { title: 'Pricing', route: 'pricing' },
];

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const closeMenu = () => setNavOpen(false);

  const navLinkClass =
    'block px-3 py-2 text-white/80 transition-colors hover:text-white whitespace-nowrap';

  return (
    <header className="relative z-50 mx-auto mb-5 flex w-full justify-center px-3 pt-5 text-white">
      <OutsideClickHandler onOutsideClick={closeMenu}>
        <div className="fixed left-1/2 top-4 flex w-[calc(100%-24px)] max-w-6xl -translate-x-1/2 items-center justify-between gap-4 rounded-full border border-white/10 bg-black px-5 py-3 shadow-lg sm:top-5 sm:px-7 sm:py-4">

          <RouterLink
            to="/"
            onClick={closeMenu}
            className="shrink-0 text-xl font-bold tracking-widest text-orange sm:text-2xl"
            aria-label="Slaty homepage"
          >
            Slaty
          </RouterLink>

          <button
            type="button"
            onClick={() => setNavOpen((previous) => !previous)}
            className="shrink-0 text-3xl xl:hidden"
            aria-label={navOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={navOpen}
            aria-controls="slaty-navigation"
          >
            {navOpen ? <BiX /> : <BiMenuAltRight />}
          </button>

          <nav
            id="slaty-navigation"
            className={`
              ${
                navOpen
                  ? 'visible translate-y-0 opacity-100'
                  : 'invisible -translate-y-2 opacity-0 pointer-events-none'
              }
              absolute right-0 top-[calc(100%+12px)] flex w-[min(300px,calc(100vw-24px))]
              flex-col items-stretch gap-3 rounded-2xl bg-black p-5 shadow-xl
              transition-all duration-200
              xl:visible xl:pointer-events-auto xl:static xl:w-auto
              xl:translate-y-0 xl:flex-1 xl:flex-row
              xl:items-center xl:justify-end xl:gap-1 xl:bg-transparent
              xl:p-0 xl:opacity-100 xl:shadow-none
            `}
          >
            <ul className="flex flex-col items-stretch gap-1 xl:flex-row xl:items-center xl:justify-end">
              {isHomePage &&
                sectionLinks.map((item) => (
                  <li key={item.route}>
                    <ScrollLink
                      to={item.route}
                      smooth
                      spy
                      offset={-120}
                      onClick={closeMenu}
                      className={`${navLinkClass} cursor-pointer`}
                    >
                      {item.title}
                    </ScrollLink>
                  </li>
                ))}

              <li>
                <RouterLink
                  to="/online-tutoring"
                  onClick={closeMenu}
                  className={navLinkClass}
                >
                  Online Tutoring
                </RouterLink>
              </li>

              <li>
                <RouterLink
                  to="/become-a-tutor"
                  onClick={closeMenu}
                  className={navLinkClass}
                >
                  Become A Tutor
                </RouterLink>
              </li>
            </ul>

            <a
              href={APPLICATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="inline-flex min-h-11 shrink-0 items-center justify-center gap-1 rounded-lg border border-white/10 bg-white/10 px-4 py-2 font-medium text-white transition-colors hover:bg-white/20 xl:ml-2"
            >
              <span className="whitespace-nowrap">Become A Tutor</span>
              <BiUpArrowAlt className="rotate-45 text-2xl" />
            </a>
          </nav>
        </div>
      </OutsideClickHandler>
    </header>
  );
};

export default Header;
