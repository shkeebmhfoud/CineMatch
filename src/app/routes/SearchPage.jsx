import React, { useRef, useState } from "react";

const MOVIES = [
  {
    id: "blade-runner-2049",
    title: "Blade Runner 2049",
    year: "2017",
    director: "Denis Villeneuve",
    genres: "Sci-Fi, Cyberpunk",
    format: "4K HDR",
    formatClass: "text-primary-container",
    match: "99% Match",
    rating: "8.5",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDWm0EVklPsaQ98suDrAFsHDui2vg4B9pmyRt4FK5Enz3mbPsBH9Zn_TtgJAVySFQbPISupWJnBF92TuBaPojPLn45Su3bUIyYV8Kyi7Q-lp1HlrbcmU6Cel2lUZnw_6_rZjBqHJt8BfxkqLO6Zvoiv-e8JRNXWmucF8w4W6tGAJ6eP-CYr1HDxF-aCC-99RjXOF6LX0XFbh440jwu213sLkOwK61pB7LymSyv6TqYo",
    alt: "Futuristic neon city shrouded in orange smog and cyan haze with a lone trench-coat detective silhouette walking past gargantuan holographic ballerina statues in atmospheric rain, cinematic cyberpunk sci-fi movie poster style with high detail.",
  },
  {
    id: "dune-part-two",
    title: "Dune: Part Two",
    year: "2024",
    director: "Denis Villeneuve",
    genres: "Sci-Fi, Adventure",
    format: "IMAX 70mm",
    formatClass: "text-secondary",
    match: "98% Match",
    rating: "8.8",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAjvfQ6KiVw8yakCarerqyx0FC6yLf0W5WQjoxsgv-zeMLClqK8diiXq8vNkTnsNhQbWiHLEvpJyfkaVUVf2rAQDN0TW1qOzuPfSVPdFhiyPsGO-2wuvAgOIPucYFrlucJMVAH3xKIRRhQg40ynr796OR82Qk83O9hGnzeHSq2qNTeCZXQRl14rF4cgHoZQsbbOpqqvk121QBAp1t5_5a-e0v-Rv-yu0d_9wiZQjLRR",
    alt: "Epic cinematic desert dune landscape bathed in warm golden twilight and deep amber sun, two warriors holding crysknives standing on the crest of a massive sand ridge with giant sandworm ripples below, cinematic science fiction poster.",
  },
  {
    id: "interstellar",
    title: "Interstellar",
    year: "2014",
    director: "Christopher Nolan",
    genres: "Sci-Fi, Drama",
    format: "Dolby Atmos",
    formatClass: "text-primary-container",
    match: "97% Match",
    rating: "8.9",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCJzC2VTQXdtL01zpGFmJDyHzWhHtMuVQSUu3ZulUugtEq6j0AaOEkgL4CQYR45CAKv3BsZ8-2JgUmRL5xt9oxN0rqmOE2W5X8BoWTUeQepwtiZRBS4nIZpo4kgE8mjTm02D16j5TvZwRQeLU4nNJnECqk2T8h7tJ7XSycDOnpn4i8OWng5vJvsc94bIWm2k1E2ABiRK-zxGRyR_Vfo8nWgKGi6l5F4bY-bP-J-lAqk",
    alt: "An astronaut in a pristine white exploration suit walking across a reflective endless ocean world under a massive swirling golden black hole horizon, deep cosmic space aesthetic with lens flares and cosmic awe.",
  },
  {
    id: "ex-machina",
    title: "Ex Machina",
    year: "2014",
    director: "Alex Garland",
    genres: "Psychological, Sci-Fi",
    format: "A24",
    formatClass: "text-outline",
    match: "94% Match",
    rating: "7.9",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDIUfFoHS1IH68rr86vaz2tgMdu0F0aLJS0E7F6mARenq_l1rPN-v0MeXpGxdQ4Nocof76ewMJ9yDow_CjY71cPSKOLeXdrV90ryptyV8bP_JMfChKJVws1VcBVPk8B0_E9FBpH4UgQVwoxNo1k7ITo-UF-2t--_gum3GFoxW7NwgbLu3i10qy5HHcsxYEFerbCphMO1jo1xonJigxbZSytGCm-Gn9xeegFb_0UuTWK",
    alt: "Sleek glass interior laboratory with a female android featuring translucent synthetic skin, glowing internal carbon fiber mechanical mesh, soft moody cyan lighting and sharp glass reflections, architectural minimalist thriller.",
  },
  {
    id: "the-prestige",
    title: "The Prestige",
    year: "2006",
    director: "Christopher Nolan",
    genres: "Mystery, Thriller",
    format: "4K HDR",
    formatClass: "text-primary-container",
    match: "96% Match",
    rating: "8.5",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDGhAtDpfbFLxW7yyaEiYqX5ETRtwxIE5tlq3VmI8UCZm9A5aYPO3qTEMVeBfsBuwp_sYXqVotmtpDusvQsp8H-G1wmWQUaMsgsKSkQq4kL1tsumLYjoj4mSjT3oO5qj3Kx9fNcf_FOiFjxORACQtfRuViU5-d5I0qqqx6k1NMMB995fECZshWtZPrPnhJbyUugvtDcL5Mbfayh5rKlrmlXghkSSSd18--cFUhywg8v",
    alt: "Victorian theater stage glowing with crackling electric blue lightning coils designed by Nikola Tesla, two rival illusionists in dark coats staring intently across the mist and stage light, dramatic high contrast moody cinematography.",
  },
  {
    id: "arrival",
    title: "Arrival",
    year: "2016",
    director: "Denis Villeneuve",
    genres: "Sci-Fi, Mystery",
    format: "Dolby Vision",
    formatClass: "text-primary-container",
    match: "95% Match",
    rating: "8.2",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDvpnysgHC33PoFkBmWuJNc2aE7-0g6dYtbw8jM7Jj47U5dxw5Fs2K-p79SkvCiQ2kJaEvt7uW3a1_1AmX7LHBszhICQM6R2N3BqrA-p75sPyqYJKlo9vXZxLVbqkaQQJciE9D_sp4qOQTbV5nB1TUpmRWY6PmXJBiduJofzfAEDGsPqo68B4fw35YGabmWRb15y7y1cJ78K5bA406f_oSwAK-XxEXczjWTlH353190",
    alt: "A gigantic smooth obsidian alien shell craft hovering silently above misty green Montana valley, a linguist in a bright orange hazmat suit looking up into the mysterious foggy atmosphere, poetic contemplative sci-fi.",
  },
  {
    id: "edge-of-tomorrow",
    title: "Edge of Tomorrow",
    year: "2014",
    director: "Doug Liman",
    genres: "Action, Time-Loop",
    format: "4K HDR",
    formatClass: "text-primary-container",
    match: "92% Match",
    rating: "8.0",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDBJAF5oQqgwFuqwrxWaTVYe0Pk33AheEIlVfr0U-Co3UuFw2DjwK3A634pElrH7fz-6z1pOtjWGn8XiqQvQjMGYqSWHtulfWvdYJUoPTXpSanKaEZpDSRjs6TJ2xh5I2f5hM-gtszyn-0JS7QyvUKKlUuxJHTbwfwdR6VlRazMfETo3niwpH1y5Nt5oc4C6nkfJLP1gM9MkxqiTGE3V52hvmamLNVemGZASPFVVcVm",
    alt: "Heavy mechanical exoskeleton soldiers battling crystalline fiery alien mimics on a chaotic smoky battlefield beach under dark storm clouds, grit, sparks, explosive action movie poster composition.",
  },
  {
    id: "inception",
    title: "Inception",
    year: "2010",
    director: "Christopher Nolan",
    genres: "Thriller, Sci-Fi",
    format: "Oscar Winner",
    formatClass: "text-secondary",
    match: "99% Match",
    rating: "8.8",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB_d2MEbbDGuPrmuDNCtsGQq9v86W5bGSg61KtbTHaU3zfTATkSyEYUG3iR-ZP0VofqRqBG4IC5oAstAJrb1zw1Cz0T6XwOft9kCuTqdC8Xbd5UXfU7nIic8v1v5S0kXdUEEyEDAEg8n1atQHatH467sNw-ulZZJaBAfkTrFb14kMXHr1_HlgRInIgcM91n15mXIa-OjFJDqTdlS-aIF3hJNcwvDLxzPe4dtVxnP9PM",
    alt: "Surreal Paris metropolis architecture folding vertically upside down over itself into the sky with dream architects in suits standing on street intersection beneath geometric towers, mind-bending conceptual cinematic visual.",
  },
  {
    id: "tenet",
    title: "Tenet",
    year: "2020",
    director: "Christopher Nolan",
    genres: "Action, Temporal",
    format: "IMAX",
    formatClass: "text-primary-container",
    match: "88% Match",
    rating: "7.8",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuASRtX0sVFO6Tl4s6Yx1eMN55wNCye4Fxc21UkLB6AcgCQ9lnWTOoGtr6ix1zJWs_ZHsw6aBLCInEiAzRQl9MauJ9VLAwtPc-4iCedevI2CyMW-u4COSVMzf2KrjhKWtjk9xB5eyTcVVWSekquOY60FNPntMWbyorspcPcA0hQ9i4Di6P1UY_vNvw6jDceDpuFTZkLuwjPx3Ky1AcGVr95xDYF99Y763pGFs4iP5UtJ",
    alt: "An operative wearing tactical oxygen mask running through an exploding ruined opera house with bullets and debris flying backwards in reversed temporal entropy, cool blue steel color palette and high octane kinetic motion.",
  },
  {
    id: "the-matrix",
    title: "The Matrix",
    year: "1999",
    director: "Lana & Lilly Wachowski",
    genres: "Sci-Fi, Cyberpunk",
    format: "Cult Classic",
    formatClass: "text-secondary",
    match: "98% Match",
    rating: "8.7",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCb7dSzRZp_ZPjGePoX99vKczd0G6jGAKKE3hJAMkToiKr31rxOgT_n83MyelMhpz0O1A4YwpflwRUphW2Qmyku5YGBX6U9oPEWdoDo9EdjTXxglUspBF-5CEi7FFesMVEEeXTRtCqaFhHgYCQ2X9E54s_TvuK4P0vSV7oHrDMcipBJk1uGGUjf2VYBtS0N4mgU0eP82i8kGVwClDr2Z6Pt8ArtxpKNxdmuzqJQF-DU",
    alt: "Iconic green digital glyph waterfall rain falling across a dark sunglasses reflection of a leather clad trenchcoat hacker dodging glowing bullet trajectories on a skyscraper rooftop, definitive cyberpunk visual tone.",
  },
  {
    id: "annihilation",
    title: "Annihilation",
    year: "2018",
    director: "Alex Garland",
    genres: "Biopunk, Horror",
    format: "Paramount",
    formatClass: "text-outline",
    match: "90% Match",
    rating: "7.6",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAfXlCEnkhxdohTgJX_RDeYM4sJbaWGEXkSAxmCm731BLcDS1vbPTO_9Qkhm_DTbEFfnBPvI50MN3ZgNwgFjW12gdcwsHpYvv9D499Fu7yVIYMO-Bi0-PIiIua09kMG-p8CXGfFdaP6LU7RCkkT2fGlMfF-9Dxg-YPAz_NHDLdAAGh9FFeGrKW3ZzSKyUII7rAcv6xNx8zaGLaCE9jrYBXzbiCYFWBR-jY_suy877ZO",
    alt: "An iridescent, shimmering holographic soap-bubble anomaly perimeter enclosing an overgrown prehistoric southern swamp forest where mutated crystalline flowers grow from trees, haunting biopunk sci-fi movie poster.",
  },
  {
    id: "district-9",
    title: "District 9",
    year: "2009",
    director: "Neill Blomkamp",
    genres: "Sci-Fi, Action",
    format: "4K Remaster",
    formatClass: "text-primary-container",
    match: "93% Match",
    rating: "8.1",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA2hY7zyZEoAB-ol8w8CBql_1IcS5XBHC0PcetKNW8JjJvbFwJyeJqbW9HgR9jZWnJS55UA6aWsMFif9aWczkU9NHOpU--BPIx8jZ6s8zMx5MoHvwpiDAuCgTFy8kpwGhaD80xLRXH_VlJIPBhAMsDeAScOEr62qYeRndXtofun-Xxe7NOM9HfHHbwyjHG7I-6lALelVi1ewHvhXjdJqEisraDM35F_q0SXNu9CArXB",
    alt: "Gritty rusted township slum shacks beneath a colossal weathered alien mother spacecraft suspended motionless in dust-filled Johannesburg sky, documentary style sci-fi photojournalism aesthetic.",
  },
];

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState(
    "Denis Villeneuve dystopian neon",
  );
  const [remainingCount, setRemainingCount] = useState(36);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const searchInputRef = useRef(null);

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredMovies = MOVIES.filter((movie) => {
    if (!normalizedQuery) return true;
    return movie.title.toLowerCase().includes(normalizedQuery);
  });

  const handleClearSearch = () => {
    setSearchQuery("");
    searchInputRef.current?.focus();
  };

  const handleLoadMore = () => {
    if (isLoadingMore) return;
    setIsLoadingMore(true);
    setTimeout(() => {
      setIsLoadingMore(false);
      setRemainingCount(12);
    }, 600);
  };

  return (
    <main className="w-full pt-20 bg-surface min-h-[calc(100vh-20rem)]">
      <div className="flex flex-col w-full">
        {/* Atmospheric Background Glow Elements */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary-container/10 rounded-full blur-[128px] pointer-events-none"></div>
          <div className="absolute top-72 right-10 w-[30rem] h-[30rem] bg-tertiary-container/10 rounded-full blur-[140px] pointer-events-none"></div>
          <div className="w-full px-margin-mobile md:px-margin pt-6 pb-space-xl max-w-[1720px] mx-auto space-y-space-xl">
            {/* Top Explorer Bar & Instant Realtime Search Box */}
            <section className="space-y-space-md">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md">
                <div className="space-y-1">
                  <div className="flex items-center gap-space-xs text-primary font-label-sm text-label-sm uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-primary-container animate-ping"></span>
                    Neural Vault Engine
                  </div>
                  <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                    Parametric Film Search
                  </h1>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                    Deep indexing across 45,000+ cinematic records with
                    multi-dimensional taxonomy, sentiment weights, and provider
                    indexing.
                  </p>
                </div>
                <div className="flex items-center gap-space-sm self-start lg:self-end">
                  <span className="font-label-sm text-label-sm px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant flex items-center gap-1.5 shadow-sm">
                    <span className="material-symbols-outlined text-[15px] text-primary-container">
                      speed
                    </span>
                    Indexed Latency: 12ms
                  </span>
                  <span className="font-label-sm text-label-sm px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant flex items-center gap-1.5 shadow-sm">
                    <span className="material-symbols-outlined text-[15px] text-secondary">
                      verified
                    </span>
                    TMDb 4K Ready
                  </span>
                </div>
              </div>
              {/* Grand Search Field with Glow Matrix */}
              <div className="relative group">
                <div className="relative flex items-center bg-surface-container-high/90 backdrop-blur-xl rounded-2xl p-2 transition-all shadow-xl focus-within:shadow-[0_0_36px_rgba(56,189,248,0.22)]">
                  <div className="flex items-center pl-4 pr-3 text-primary-container">
                    <span className="material-symbols-outlined text-[28px]">
                      search
                    </span>
                  </div>
                  <input
                    ref={searchInputRef}
                    className="w-full bg-transparent text-on-surface font-body-lg text-body-lg placeholder:text-outline focus:outline-none py-3 pr-4"
                    id="instantSearchInput"
                    placeholder="Search by title, director, theme (e.g. 'Cyberpunk consciousness', 'Christopher Nolan')..."
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="flex items-center gap-2 pr-2">
                    <button
                      className="p-2 rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/70 transition-colors"
                      id="clearSearchBtn"
                      title="Clear input"
                      type="button"
                      onClick={handleClearSearch}
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        close
                      </span>
                    </button>
                    <div className="hidden sm:flex items-center px-3 py-1.5 rounded-xl bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                      Ctrl + K
                    </div>
                    <button
                      className="px-5 py-3 rounded-xl bg-primary-container hover:bg-primary text-on-primary-container font-label-md text-label-md transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] flex items-center gap-2"
                      type="button"
                    >
                      <span>Filter</span>
                      <span className="material-symbols-outlined text-[18px]">
                        tune
                      </span>
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 px-1 text-on-surface-variant font-body-sm text-body-sm">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-400"></span>
                    <span>
                      Searching 45,000+ films... Instant results ready
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-outline">
                    <span className="material-symbols-outlined text-[16px]">
                      psychology
                    </span>
                    Natural language semantic match active
                  </div>
                </div>
              </div>
              {/* Quick Query Presets */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline whitespace-nowrap mr-1">
                  Trending Tags:
                </span>
                <button
                  className="px-3.5 py-1.5 rounded-full font-label-md text-label-md bg-surface-container-high hover:bg-surface-variant text-on-surface transition-colors flex items-center gap-1.5 whitespace-nowrap shadow-sm"
                  type="button"
                >
                  <span className="text-primary-container text-[14px]">#</span>{" "}
                  Christopher Nolan
                </button>
                <button
                  className="px-3.5 py-1.5 rounded-full font-label-md text-label-md bg-primary-container/20 text-primary transition-colors flex items-center gap-1.5 whitespace-nowrap shadow-[0_0_12px_rgba(56,189,248,0.15)]"
                  type="button"
                >
                  <span className="text-primary-container text-[14px]">#</span>{" "}
                  Cyberpunk
                </button>
                <button
                  className="px-3.5 py-1.5 rounded-full font-label-md text-label-md bg-primary-container/20 text-primary transition-colors flex items-center gap-1.5 whitespace-nowrap shadow-[0_0_12px_rgba(56,189,248,0.15)]"
                  type="button"
                >
                  <span className="text-primary-container text-[14px]">#</span>{" "}
                  Denis Villeneuve
                </button>
                <button
                  className="px-3.5 py-1.5 rounded-full font-label-md text-label-md bg-surface-container-high hover:bg-surface-variant text-on-surface transition-colors flex items-center gap-1.5 whitespace-nowrap shadow-sm"
                  type="button"
                >
                  <span className="text-primary-container text-[14px]">#</span>{" "}
                  A24 Studios
                </button>
                <button
                  className="px-3.5 py-1.5 rounded-full font-label-md text-label-md bg-surface-container-high hover:bg-surface-variant text-on-surface transition-colors flex items-center gap-1.5 whitespace-nowrap shadow-sm"
                  type="button"
                >
                  <span className="text-secondary text-[14px]">★</span> Oscar
                  Winners 2024
                </button>
                <button
                  className="px-3.5 py-1.5 rounded-full font-label-md text-label-md bg-surface-container-high hover:bg-surface-variant text-on-surface transition-colors flex items-center gap-1.5 whitespace-nowrap shadow-sm"
                  type="button"
                >
                  <span className="text-primary-container text-[14px]">#</span>{" "}
                  Dystopian Future
                </button>
              </div>
            </section>
            {/* Advanced Multi-Facet Filter Panel */}
            <section className="bg-surface-container/70 backdrop-blur-xl rounded-2xl p-space-md md:p-space-lg shadow-xl space-y-space-lg">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-space-sm">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary-container/15 flex items-center justify-center text-primary-container">
                    <span className="material-symbols-outlined text-[20px]">
                      filter_alt
                    </span>
                  </div>
                  <div>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">
                      Curated Parametric Filters
                    </h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Fine-tune genre intersections, release decades, and
                      provider catalogs
                    </p>
                  </div>
                </div>
                {/* Sort and Preset Actions */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-2 bg-surface-container-high px-3 py-1.5 rounded-xl">
                    <span className="font-label-sm text-label-sm text-outline">
                      Sort by:
                    </span>
                    <select
                      className="bg-transparent font-label-md text-label-md text-on-surface focus:outline-none cursor-pointer pr-2"
                      defaultValue="AI Match Score (98%→)"
                    >
                      <option
                        className="bg-surface-container text-on-surface"
                        value="AI Match Score (98%→)"
                      >
                        AI Match Score (98%→)
                      </option>
                      <option
                        className="bg-surface-container text-on-surface"
                        value="Highest Rated (IMDb / TMDb)"
                      >
                        Highest Rated (IMDb / TMDb)
                      </option>
                      <option
                        className="bg-surface-container text-on-surface"
                        value="Most Popular"
                      >
                        Most Popular
                      </option>
                      <option
                        className="bg-surface-container text-on-surface"
                        value="Release Date (Newest First)"
                      >
                        Release Date (Newest First)
                      </option>
                    </select>
                  </div>
                  <button
                    className="p-2 bg-surface-container-high hover:bg-surface-variant rounded-xl text-on-surface-variant hover:text-on-surface transition-colors"
                    title="Save this filter view"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[19px]">
                      bookmark_add
                    </span>
                  </button>
                </div>
              </div>
              {/* Filter Grid Matrix */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-space-lg">
                {/* 1. Genre Taxonomy Multi-Pill (Col-span 5) */}
                <div className="xl:col-span-5 space-y-3">
                  <div className="flex items-center justify-between text-on-surface">
                    <span className="font-label-md text-label-md flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-primary-container">
                        category
                      </span>
                      Genre Intersections
                    </span>
                    <span className="font-label-sm text-label-sm text-outline">
                      2 active
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      className="px-3 py-1.5 rounded-xl font-label-md text-label-md bg-surface-container-high hover:bg-surface-variant text-on-surface-variant transition-colors flex items-center gap-1.5"
                      type="button"
                    >
                      <span>Action</span>
                      <span className="text-outline font-label-sm text-label-sm">
                        8.4k
                      </span>
                    </button>
                    <button
                      className="px-3 py-1.5 rounded-xl font-label-md text-label-md bg-primary-container text-on-primary-container shadow-[0_0_16px_rgba(56,189,248,0.3)] transition-all flex items-center gap-1.5"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[14px]">
                        check
                      </span>
                      <span>Sci-Fi</span>
                      <span className="font-label-sm text-label-sm opacity-90">
                        3.2k
                      </span>
                    </button>
                    <button
                      className="px-3 py-1.5 rounded-xl font-label-md text-label-md bg-surface-container-high hover:bg-surface-variant text-on-surface-variant transition-colors flex items-center gap-1.5"
                      type="button"
                    >
                      <span>Drama</span>
                      <span className="text-outline font-label-sm text-label-sm">
                        14.1k
                      </span>
                    </button>
                    <button
                      className="px-3 py-1.5 rounded-xl font-label-md text-label-md bg-primary-container text-on-primary-container shadow-[0_0_16px_rgba(56,189,248,0.3)] transition-all flex items-center gap-1.5"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[14px]">
                        check
                      </span>
                      <span>Thriller</span>
                      <span className="font-label-sm text-label-sm opacity-90">
                        5.8k
                      </span>
                    </button>
                    <button
                      className="px-3 py-1.5 rounded-xl font-label-md text-label-md bg-surface-container-high hover:bg-surface-variant text-on-surface-variant transition-colors flex items-center gap-1.5"
                      type="button"
                    >
                      <span>Comedy</span>
                      <span className="text-outline font-label-sm text-label-sm">
                        7.9k
                      </span>
                    </button>
                    <button
                      className="px-3 py-1.5 rounded-xl font-label-md text-label-md bg-surface-container-high hover:bg-surface-variant text-on-surface-variant transition-colors flex items-center gap-1.5"
                      type="button"
                    >
                      <span>Horror</span>
                      <span className="text-outline font-label-sm text-label-sm">
                        2.9k
                      </span>
                    </button>
                    <button
                      className="px-3 py-1.5 rounded-xl font-label-md text-label-md bg-surface-container-high hover:bg-surface-variant text-on-surface-variant transition-colors flex items-center gap-1.5"
                      type="button"
                    >
                      <span>Animation</span>
                      <span className="text-outline font-label-sm text-label-sm">
                        2.1k
                      </span>
                    </button>
                    <button
                      className="px-3 py-1.5 rounded-xl font-label-md text-label-md bg-surface-container-high hover:bg-surface-variant text-on-surface-variant transition-colors flex items-center gap-1.5"
                      type="button"
                    >
                      <span>Mystery</span>
                      <span className="text-outline font-label-sm text-label-sm">
                        1.8k
                      </span>
                    </button>
                    <button
                      className="px-3 py-1.5 rounded-xl font-label-md text-label-md bg-surface-container-high hover:bg-surface-variant text-on-surface-variant transition-colors flex items-center gap-1.5"
                      type="button"
                    >
                      <span>Documentary</span>
                      <span className="text-outline font-label-sm text-label-sm">
                        4.3k
                      </span>
                    </button>
                  </div>
                </div>
                {/* 2. Dual Range Release Slider (Col-span 3) */}
                <div className="xl:col-span-3 space-y-3 bg-surface-container-high/40 p-4 rounded-xl">
                  <div className="flex items-center justify-between text-on-surface">
                    <span className="font-label-md text-label-md flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-primary-container">
                        calendar_month
                      </span>
                      Release Window
                    </span>
                    <span className="font-label-sm text-label-sm text-primary font-bold">
                      2010 — 2024
                    </span>
                  </div>
                  <div className="space-y-2 pt-2">
                    <div className="relative h-2 w-full bg-surface-container rounded-full overflow-hidden">
                      <div className="absolute left-[58%] right-[2%] top-0 bottom-0 bg-primary-container rounded-full shadow-[0_0_8px_rgba(56,189,248,0.7)]"></div>
                    </div>
                    <div className="flex items-center justify-between text-outline font-label-sm text-label-sm pt-1">
                      <span>1970</span>
                      <span>1990</span>
                      <span className="text-primary font-bold">2010</span>
                      <span className="text-primary font-bold">2024</span>
                      <span>2025</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      className="flex-1 py-1 rounded bg-surface-container text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm"
                      type="button"
                    >
                      2020s Era
                    </button>
                    <button
                      className="flex-1 py-1 rounded bg-surface-container text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm"
                      type="button"
                    >
                      2010s Golden
                    </button>
                    <button
                      className="flex-1 py-1 rounded bg-surface-container text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm"
                      type="button"
                    >
                      All Decades
                    </button>
                  </div>
                </div>
                {/* 3. Minimum Rating Filter (Col-span 2) */}
                <div className="xl:col-span-2 space-y-3">
                  <span className="font-label-md text-label-md text-on-surface flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      star
                    </span>
                    Minimum Score
                  </span>
                  <div className="flex flex-col gap-2">
                    <button
                      className="w-full px-3 py-1.5 rounded-xl font-label-md text-label-md bg-surface-container-high hover:bg-surface-variant text-on-surface-variant text-left flex items-center justify-between"
                      type="button"
                    >
                      <span>7.0+ Recommended</span>
                      <span className="text-outline font-label-sm text-label-sm">
                        Good
                      </span>
                    </button>
                    <button
                      className="w-full px-3 py-1.5 rounded-xl font-label-md text-label-md bg-secondary/15 text-secondary shadow-[0_0_14px_rgba(255,198,64,0.2)] text-left flex items-center justify-between font-bold"
                      type="button"
                    >
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">
                          hotel_class
                        </span>
                        8.0+ Critical Acclaim
                      </span>
                      <span className="material-symbols-outlined text-[16px]">
                        check
                      </span>
                    </button>
                    <button
                      className="w-full px-3 py-1.5 rounded-xl font-label-md text-label-md bg-surface-container-high hover:bg-surface-variant text-on-surface-variant text-left flex items-center justify-between"
                      type="button"
                    >
                      <span>9.0+ Masterpiece Tier</span>
                      <span className="text-secondary font-label-sm text-label-sm">
                        Elite
                      </span>
                    </button>
                  </div>
                </div>
                {/* 4. Streaming Providers (Col-span 2) */}
                <div className="xl:col-span-2 space-y-3">
                  <span className="font-label-md text-label-md text-on-surface flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-primary-container">
                      live_tv
                    </span>
                    Provider Availability
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      className="px-2.5 py-2 rounded-xl bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-sm text-label-sm flex items-center gap-1.5 truncate"
                      type="button"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500 shrink-0"></span>
                      <span>Netflix</span>
                    </button>
                    <button
                      className="px-2.5 py-2 rounded-xl bg-primary-container/20 text-primary font-label-sm text-label-sm flex items-center gap-1.5 truncate shadow-sm"
                      type="button"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-300 shrink-0"></span>
                      <span>Apple TV+</span>
                    </button>
                    <button
                      className="px-2.5 py-2 rounded-xl bg-primary-container/20 text-primary font-label-sm text-label-sm flex items-center gap-1.5 truncate shadow-sm"
                      type="button"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0"></span>
                      <span>Max</span>
                    </button>
                    <button
                      className="px-2.5 py-2 rounded-xl bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-sm text-label-sm flex items-center gap-1.5 truncate"
                      type="button"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shrink-0"></span>
                      <span>Prime</span>
                    </button>
                    <button
                      className="col-span-2 px-2.5 py-1.5 rounded-xl bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-sm text-label-sm flex items-center justify-center gap-1.5"
                      type="button"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-400 shrink-0"></span>
                      <span>Disney+ &amp; 8 Others</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* Active Filters Summary Banner */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 bg-surface-container-lowest/60 px-4 py-3 rounded-xl shadow-inner">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                    Active Constraints:
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-surface-container-high text-on-surface font-label-sm text-label-sm">
                    Genre: Sci-Fi
                    <span className="material-symbols-outlined text-[14px] cursor-pointer hover:text-primary">
                      close
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-surface-container-high text-on-surface font-label-sm text-label-sm">
                    Genre: Thriller
                    <span className="material-symbols-outlined text-[14px] cursor-pointer hover:text-primary">
                      close
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-surface-container-high text-on-surface font-label-sm text-label-sm">
                    Rating ≥ 8.0
                    <span className="material-symbols-outlined text-[14px] cursor-pointer hover:text-secondary">
                      close
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-surface-container-high text-on-surface font-label-sm text-label-sm">
                    Era: 2010–2024
                    <span className="material-symbols-outlined text-[14px] cursor-pointer hover:text-primary">
                      close
                    </span>
                  </span>
                  <button
                    className="font-label-sm text-label-sm text-primary hover:underline ml-2"
                    type="button"
                  >
                    Clear All (4 active)
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 text-on-surface font-label-md text-label-md">
                    <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                    Showing{" "}
                    <span className="text-primary-container font-bold">
                      48 curated matches
                    </span>
                  </div>
                  <div className="flex items-center bg-surface-container-high rounded-lg p-0.5">
                    <button
                      className="p-1 rounded bg-surface-container text-primary"
                      title="Grid View"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        grid_view
                      </span>
                    </button>
                    <button
                      className="p-1 rounded text-on-surface-variant hover:text-on-surface"
                      title="Compact View"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        view_agenda
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
            {/* Dynamic Movie Results 4 to 5 Column Grid */}
            <section className="space-y-space-lg">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-gutter">
                {filteredMovies.map((movie) => (
                  <article
                    key={movie.id}
                    className="group relative flex flex-col bg-surface-container-low rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(56,189,248,0.25)]"
                  >
                    <div className="relative w-full aspect-[2/3] overflow-hidden bg-surface-container">
                      <img
                        alt={movie.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        data-alt={movie.alt}
                        src={movie.image}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/30 to-transparent"></div>
                      {/* Floating Top Badges */}
                      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                        <span className="px-2 py-0.5 rounded-md bg-surface-container-lowest/80 backdrop-blur-md text-primary font-metric-badge text-metric-badge shadow">
                          {movie.match}
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-surface-container-lowest/80 backdrop-blur-md text-secondary font-metric-badge text-metric-badge flex items-center gap-1 shadow">
                          <span className="material-symbols-outlined text-[13px]">
                            star
                          </span>{" "}
                          {movie.rating}
                        </span>
                      </div>
                      {/* Quick action hover tray */}
                      <div className="absolute bottom-3 right-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <button
                          className="p-2 rounded-xl bg-primary-container text-on-primary-container shadow-md hover:scale-105 transition-transform"
                          title="Play trailer"
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[18px]">
                            play_arrow
                          </span>
                        </button>
                        <button
                          className="p-2 rounded-xl bg-surface-container-high/90 backdrop-blur-md text-on-surface hover:text-primary shadow-md"
                          title="Add to watchlist"
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[18px]">
                            bookmark_add
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="p-3.5 space-y-1 bg-surface-container-low flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface line-clamp-1 group-hover:text-primary transition-colors">
                          {movie.title}
                        </h3>
                        <div className="flex items-center gap-2 text-outline font-label-sm text-label-sm pt-0.5">
                          <span>{movie.year}</span>
                          <span>•</span>
                          <span>{movie.director}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-2 text-on-surface-variant font-body-sm text-body-sm">
                        <span className="truncate">{movie.genres}</span>
                        <span
                          className={`${movie.formatClass} font-label-sm text-label-sm shrink-0`}
                        >
                          {movie.format}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
            {/* Advanced Pagination & Infinite Scroll Trigger Deck */}
            <section className="flex flex-col items-center justify-center pt-space-md space-y-space-md">
              {/* Big Load More CTA with Glowing Aura */}
              <button
                className="relative px-8 py-4 rounded-2xl bg-surface-container-high hover:bg-surface-container-highest text-primary font-headline-sm text-headline-sm transition-all duration-300 shadow-[0_0_24px_rgba(56,189,248,0.18)] hover:shadow-[0_0_36px_rgba(56,189,248,0.35)] hover:scale-[1.02] flex items-center gap-3 group"
                id="loadMoreBtn"
                type="button"
                onClick={handleLoadMore}
              >
                <span
                  className={`material-symbols-outlined text-[24px] text-primary-container group-hover:rotate-180 transition-transform duration-500 ${
                    isLoadingMore ? "animate-spin" : ""
                  }`}
                >
                  sync
                </span>
                <span>Load 24 More Neural Matches</span>
                <span className="px-2 py-0.5 rounded-md bg-primary-container/20 text-primary-container font-metric-badge text-metric-badge">
                  {remainingCount} REMAINING
                </span>
              </button>
              {/* Traditional Page Indicator with Glass Pill Controls */}
              <div className="flex items-center gap-4 bg-surface-container/80 backdrop-blur-md px-5 py-2.5 rounded-2xl shadow-lg">
                <button
                  className="p-2 rounded-xl text-outline hover:text-on-surface hover:bg-surface-container-high transition-colors"
                  disabled
                  title="Previous page"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    chevron_left
                  </span>
                </button>
                <div className="flex items-center gap-1.5 font-label-md text-label-md">
                  <button
                    className="w-8 h-8 rounded-lg bg-primary-container text-on-primary-container font-bold shadow-md"
                    type="button"
                  >
                    1
                  </button>
                  <button
                    className="w-8 h-8 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors"
                    type="button"
                  >
                    2
                  </button>
                  <button
                    className="w-8 h-8 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors"
                    type="button"
                  >
                    3
                  </button>
                  <span className="text-outline px-1">...</span>
                  <button
                    className="w-8 h-8 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors"
                    type="button"
                  >
                    4
                  </button>
                </div>
                <button
                  className="p-2 rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"
                  title="Next page"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    chevron_right
                  </span>
                </button>
              </div>
              <p className="font-body-sm text-body-sm text-outline">
                Showing 12 of 48 results • Powered by TMDb Semantic Rank API
                &amp; CineMatch Vector Weights
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
