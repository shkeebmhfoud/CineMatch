import React from "react";

const Footer = () => {
  return (
    <footer class="w-full bg-surface-container-lowest border-t border-outline-variant/30">
      <div class="w-full px-margin py-margin">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-xl">
          <div class="lg:col-span-2 space-y-space-md">
            <div class="flex items-center gap-space-sm">
              <span class="font-headline-sm text-headline-sm tracking-tight text-on-surface">
                Cine<span class="text-primary-container">Match</span>
              </span>
            </div>
            <p class="font-body-md text-body-md text-on-surface-variant max-w-sm">
              High-velocity cinematic media exploration engine. Theater-grade
              visual fidelity and machine-learning powered recommendation
              workflows for discerning cinephiles.
            </p>
            <div class="pt-space-xs flex items-center gap-space-sm text-outline font-label-sm text-label-sm">
              <span class="material-symbols-outlined text-[18px] text-primary-container">
                verified
              </span>
              <span>Powered by TMDb APIs &amp; CineMatch Neural Core</span>
            </div>
          </div>
          <div>
            <h4 class="font-label-md text-label-md text-on-surface uppercase tracking-wider mb-space-md">
              Discover
            </h4>
            <ul class="space-y-space-sm font-body-sm text-body-sm text-on-surface-variant">
              <li class="hover:text-primary transition-colors cursor-pointer">
                <a data-path="trending" href="#">
                  Trending Now
                </a>
              </li>
              <li class="hover:text-primary transition-colors cursor-pointer">
                <a data-path="search-filter" href="#">
                  Top 250 Rated
                </a>
              </li>
              <li class="hover:text-primary transition-colors cursor-pointer">
                <a data-path="search-filter" href="#">
                  Genre Taxonomy
                </a>
              </li>
              <li class="hover:text-primary transition-colors cursor-pointer">
                <a data-path="search-filter" href="#">
                  Festival &amp; Award Winners
                </a>
              </li>
              <li class="hover:text-primary transition-colors cursor-pointer">
                <a data-path="home" href="#">
                  AI Taste Profiler
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="font-label-md text-label-md text-on-surface uppercase tracking-wider mb-space-md">
              Platform
            </h4>
            <ul class="space-y-space-sm font-body-sm text-body-sm text-on-surface-variant">
              <li class="hover:text-primary transition-colors cursor-pointer">
                <a data-path="community" href="#">
                  Cinephile Hub
                </a>
              </li>
              <li class="hover:text-primary transition-colors cursor-pointer">
                <a data-path="watchlist" href="#">
                  Saved Collections
                </a>
              </li>
              <li class="hover:text-primary transition-colors cursor-pointer">
                Streaming Integrations
              </li>
              <li class="hover:text-primary transition-colors cursor-pointer">
                API Documentation
              </li>
              <li class="hover:text-primary transition-colors cursor-pointer">
                Release Radar
              </li>
            </ul>
          </div>
          <div>
            <h4 class="font-label-md text-label-md text-on-surface uppercase tracking-wider mb-space-md">
              Weekly Film Drops
            </h4>
            <p class="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
              Hand-curated cinematic dispatches, rare screenings, and deep
              algorithmic matches.
            </p>
            <form class="space-y-space-sm">
              <div class="relative">
                <input
                  class="w-full bg-surface-container-high text-on-surface placeholder:text-outline font-body-sm text-body-sm px-space-md py-space-sm rounded-lg border border-outline-variant/40 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
                  placeholder="cinephile@example.com"
                  type="email"
                />
              </div>
              <button
                class="w-full py-space-sm px-space-md bg-primary-container text-on-primary-container font-label-md text-label-md rounded-lg shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:bg-primary transition-all"
                type="button"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div class="mt-space-xl pt-space-lg border-t border-outline-variant/20 flex flex-col md:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm text-outline">
          <div>
            © 2025 CineMatch Inc. All rights reserved. Cinematic intelligence
            platform.
          </div>
          <div class="flex items-center gap-space-lg">
            <span>Privacy Shield</span>
            <span>Terms of Screenings</span>
            <span>Cookie Matrix</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
