import React from "react";

import { routes } from "../config/routes";

import { NavLink, useLocation } from "react-router";

import {
  IoIosSearch,
  IoIosNotificationsOutline,
  IoMdBookmark,
} from "react-icons/io";

const NavBar = () => {
  const location = useLocation();
  const isActive = (path) => path === location.pathname;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest/80 backdrop-blur-md border-b border-outline-variant/30 shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
      <div className="h-20 w-full px-margin flex items-center justify-between gap-space-lg">
        <div className="flex items-center gap-space-xl">
          <div className="flex items-center gap-space-sm">
            <span className="font-headline-md text-headline-md tracking-tight text-on-surface">
              Cine<span className="text-primary-container">Match</span>
            </span>
          </div>
          <nav
            className="hidden xl:flex items-center gap-space-xs"
            data-active-classes="bg-primary-container/15 text-primary border border-primary/30 shadow-[0_0_16px_rgba(56,189,248,0.2)] rounded-lg"
          >
            {routes.map((route) => (
              <NavLink
                aria-current="page"
                className={`px-space-md py-space-sm font-label-md transition-all ${isActive(route.path) ? "bg-primary-container/15 text-primary border border-primary/30 shadow-[0_0_16px_rgba(56,189,248,0.2)]" : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high"} rounded-lg`}
                data-path="home"
                to={route.path}
              >
                {route.name}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="flex-1 max-w-md hidden md:block">
          <div className="relative flex items-center w-full">
            <IoIosSearch className="material-symbols-outlined absolute left-space-md text-on-surface-variant pointer-events-none text-[20px]" />

            <input
              className="w-full bg-surface-container-high/60 backdrop-blur-md text-on-surface placeholder:text-outline font-body-sm text-body-sm pl-11 pr-14 py-space-sm rounded-xl border border-outline-variant/40 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container focus:shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all"
              placeholder="Search movies, directors, genres..."
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-space-md">
          <button
            aria-label="Notifications"
            className="relative p-space-sm rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all"
            type="button"
          >
            <IoIosNotificationsOutline className="material-symbols-outlined text-[22px]" />

            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_rgba(56,189,248,0.8)] animate-pulse"></span>
          </button>
          <a
            aria-label="Watchlist"
            className="relative p-space-sm rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all"
            data-path="watchlist"
            href="#"
          >
            <IoMdBookmark className="material-symbols-outlined text-[22px]" />

            <span className="absolute -top-1 -right-1 px-1.5 py-0.2 rounded-full bg-primary-container text-on-primary-container font-metric-badge text-metric-badge shadow-[0_0_12px_rgba(56,189,248,0.5)]">
              0
            </span>
          </a>
          {/* <button
            aria-label="Toggle Theme"
            className="p-space-sm rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all"
            type="button"
          >
            <span className="material-symbols-outlined text-[22px]">
              dark_mode
            </span>
          </button> */}
          <div className="flex items-center pl-space-xs">
            <div className="p-0.5 rounded-full ring-2 ring-primary-container/70 shadow-[0_0_14px_rgba(56,189,248,0.3)]">
              <img
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFpgZYZzP_U9mhzZRaqWFrDIpRBusAjYLVDy2KOTcMt-qYU-giPUBvFoWYHGb1AmJ1oaAYw-NmZ-BJYITXki_SOiYpH-hO6FHcvg1AxtUK9PsTLbqxy2DE0ghACte_KI_Iiw7aiY34hNAdUHVpwiNXJLCEw43HlnWR2dOwGrrlZN6UNY4Y39_sYBVbZmnkEHiEnSa139stn0y2oJTsBtUjsgbaxADW7ipLGKVYXF6s"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
