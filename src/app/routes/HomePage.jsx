import React, { useState, useRef } from "react";

export default function HomePage() {
  // State for interactive features
  const [isWatchlistAdded, setIsWatchlistAdded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [quickWatchlistStates, setQuickWatchlistStates] = useState({});

  // Refs for scrolling shelves
  const trendingShelfRef = useRef(null);
  const topShelfRef = useRef(null);
  const scifiShelfRef = useRef(null);
  const upcomingShelfRef = useRef(null);

  const scrollShelf = (ref, offset) => {
    if (ref.current) {
      ref.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const toggleHeroWatchlist = () => {
    setIsWatchlistAdded(!isWatchlistAdded);
  };

  const toggleQuickWatchlist = (e, index) => {
    e.stopPropagation();
    setQuickWatchlistStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <>
      <div className="flex flex-col w-full relative">
        {/* Ambient Atmospheric Backdrops */}
        <div className="absolute top-12 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
        <div className="absolute top-[48rem] right-10 w-[420px] h-[420px] bg-secondary/5 rounded-full blur-[130px] pointer-events-none -z-10"></div>

        {/* Grand Cinematic Hero Banner */}
        <section className="relative w-full -mt-20 overflow-hidden bg-surface-container-lowest">
          {/* Hero Backdrop Stills with Dynamic Scrims */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 scale-105"
            data-alt="Epic cinematic movie still from Dune Part Two, featuring Paul Atreides and Chani standing atop a massive orange-tinted desert dune during a golden eclipse, atmospheric dust swirling, high budget IMAX cinematography, rim lighting, deep space sci-fi aesthetic, hyperrealistic film grain."
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuADGm4tkF1wZRP8Hr6GAexGT6BDfiElQpSXJgWLkCxlBQi9r0dj-RaqcqLKAnz-Em3bxiOJ_CSEdUwYmoFg5jSTr2vAHePI60gkO0UmxLXjA_2Ajn8NGdrutTUQldjNefh9CjK1Nt751qt1CEduS6agBpgTedIDmj0F-_HqrYnX-EEpJklY8jixsw7j38oPFXSOqrk2FPau5QEjZYZDH39wi4ZgCONCBKJ3xhfD05cZ")`,
            }}
          ></div>

          {/* Multi-layered Scrims for Text Legibility & Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest/85 to-transparent z-10 w-full lg:w-3/5"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-surface-container-lowest/70 z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent z-10 pointer-events-none"></div>

          {/* Hero Content Container */}
          <div className="relative z-20 px-margin pt-40 pb-20 max-w-7xl">
            {/* Highlighting Badges Bar */}
            <div className="flex flex-wrap items-center gap-space-sm mb-space-md">
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-high/80 backdrop-blur-md shadow-sm">
                <span
                  className="material-symbols-outlined text-[15px] text-secondary"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
                <span className="font-metric-badge text-metric-badge text-on-surface">
                  8.9 TMDb
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm uppercase tracking-wider backdrop-blur-md shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
                <span>Trending #1</span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-surface-container-high/60 backdrop-blur-sm text-on-surface-variant font-label-sm text-label-sm">
                Sci-Fi / Adventure
              </span>
              <span className="px-2.5 py-1 rounded-full bg-surface-container-high/60 backdrop-blur-sm text-on-surface-variant font-label-sm text-label-sm">
                2h 46m
              </span>
              <span className="px-2 py-0.5 rounded bg-surface-container-highest/90 text-primary-fixed font-metric-badge text-[10px] tracking-wider uppercase">
                4K Ultra HD
              </span>
            </div>

            {/* Glowing Typographic Display */}
            <div className="space-y-space-sm max-w-3xl">
              <h1 className="font-display-hero text-display-hero uppercase tracking-tighter text-on-surface drop-shadow-2xl">
                DUNE:{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
                  PART TWO
                </span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Paul Atreides unites with Chani and the Fremen while seeking
                revenge against the conspirators who destroyed his family.
                Facing a choice between the love of his life and the fate of the
                universe, he endeavors to prevent a terrible future only he can
                foresee.
              </p>
            </div>

            {/* Hero Call-to-Actions */}
            <div className="mt-space-lg flex flex-wrap items-center gap-space-md">
              <button
                className="flex items-center gap-space-sm px-6 py-3.5 rounded-xl bg-primary-container text-on-primary-container font-headline-sm text-headline-sm font-bold shadow-xl shadow-primary-container/25 hover:bg-primary transition-all duration-200 cursor-pointer active:scale-95"
                onClick={() => setIsModalOpen(true)}
                type="button"
              >
                <span
                  className="material-symbols-outlined text-[24px]"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  play_arrow
                </span>
                <span>Watch Trailer</span>
              </button>

              <button
                className={`flex items-center gap-space-sm px-6 py-3.5 rounded-xl font-label-md text-label-md backdrop-blur-md transition-all duration-200 cursor-pointer active:scale-95 shadow-md ${
                  isWatchlistAdded
                    ? "bg-primary-container text-on-primary-container"
                    : "bg-surface-container-high/80 hover:bg-surface-container-highest text-on-surface"
                }`}
                onClick={toggleHeroWatchlist}
                type="button"
              >
                <span className="material-symbols-outlined text-[20px] transition-transform duration-300">
                  {isWatchlistAdded ? "check" : "add"}
                </span>
                <span>
                  {isWatchlistAdded ? "Saved to Watchlist" : "Add to Watchlist"}
                </span>
              </button>

              <div className="flex items-center gap-space-xs pl-space-xs">
                <button
                  aria-label="Sound Toggle"
                  className={`p-3 rounded-xl bg-surface-container-high/70 hover:bg-surface-container-highest backdrop-blur-md transition-colors cursor-pointer ${
                    isMuted ? "text-on-surface-variant" : "text-primary"
                  }`}
                  onClick={toggleMute}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {isMuted ? "volume_off" : "volume_up"}
                  </span>
                </button>
                <button
                  aria-label="More Info Details"
                  className="p-3 rounded-xl bg-surface-container-high/70 hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface backdrop-blur-md transition-colors cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    info
                  </span>
                </button>
              </div>
            </div>

            {/* Live Audience Insight Bar */}
            <div className="mt-space-xl pt-space-lg flex flex-wrap items-center gap-space-xl">
              <div className="flex items-center gap-space-sm">
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary-container shadow-inner">
                  <svg className="w-6 h-6 -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-surface-variant"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    ></path>
                    <path
                      className="text-primary-container stroke-current"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      strokeDasharray="97, 100"
                      strokeLinecap="round"
                      strokeWidth="3"
                    ></path>
                  </svg>
                </div>
                <div>
                  <div className="font-headline-sm text-headline-sm text-on-surface">
                    97%
                  </div>
                  <div className="font-label-sm text-label-sm text-outline">
                    Match Compatibility
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-space-sm">
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-secondary shadow-inner">
                  <span
                    className="material-symbols-outlined text-[20px]"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    theater_comedy
                  </span>
                </div>
                <div>
                  <div className="font-headline-sm text-headline-sm text-on-surface">
                    Denis Villeneuve
                  </div>
                  <div className="font-label-sm text-label-sm text-outline">
                    Visionary Director
                  </div>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-space-sm">
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary shadow-inner">
                  <span className="material-symbols-outlined text-[20px]">
                    movie_filter
                  </span>
                </div>
                <div>
                  <div className="font-headline-sm text-headline-sm text-on-surface">
                    Hans Zimmer
                  </div>
                  <div className="font-label-sm text-label-sm text-outline">
                    Original Sound Design
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Filter Chips Row */}
        <section className="w-full px-margin py-space-lg relative z-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md bg-surface-container-low/90 backdrop-blur-xl p-space-md rounded-2xl shadow-xl">
            <div className="flex items-center gap-space-xs overflow-x-auto scrollbar-none py-1">
              {["all", "action", "scifi", "drama", "thriller", "animation"].map(
                (genre) => {
                  const label =
                    genre === "all"
                      ? "All Films"
                      : genre.charAt(0).toUpperCase() +
                        genre.slice(1).replace("-", " ");
                  const isActive = selectedGenre === genre;
                  return (
                    <button
                      key={genre}
                      className={`genre-chip px-space-md py-space-sm rounded-xl font-label-md text-label-md cursor-pointer transition-all ${
                        isActive
                          ? "bg-primary-container text-on-primary-container shadow-md"
                          : "bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface"
                      }`}
                      onClick={() => setSelectedGenre(genre)}
                      type="button"
                    >
                      {label}
                    </button>
                  );
                },
              )}
            </div>
            <div className="flex items-center gap-space-sm self-end sm:self-auto text-outline font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-[18px] text-primary">
                tune
              </span>
              <span>
                Algorithmic Feed:{" "}
                <strong className="text-on-surface">Curated Prime</strong>
              </span>
            </div>
          </div>
        </section>

        {/* Carousel Rows Container */}
        <div className="w-full px-margin space-y-space-xl pb-space-xl">
          {/* 1. Trending Now Carousel */}
          <section className="space-y-space-md relative">
            <div className="flex items-end justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-secondary font-headline-lg text-headline-lg">
                    🔥
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                    Trending Now
                  </h2>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  Hot films cinema lovers are streaming this week
                </p>
              </div>
              <div className="flex items-center gap-space-xs">
                <button
                  aria-label="Previous"
                  className="p-2 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer shadow-sm"
                  onClick={() => scrollShelf(trendingShelfRef, -320)}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    chevron_left
                  </span>
                </button>
                <button
                  aria-label="Next"
                  className="p-2 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer shadow-sm"
                  onClick={() => scrollShelf(trendingShelfRef, 320)}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>

            <div
              className="flex gap-space-md overflow-x-auto scroll-smooth scrollbar-none pb-4 pt-1 -mx-2 px-2"
              ref={trendingShelfRef}
            >
              {[
                {
                  title: "Interstellar",
                  year: "2014",
                  genre: "Sci-Fi / Epic",
                  rating: "9.0",
                  badge: "4K",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCARQ3u2XZofKwS9SoaSoNusL8TBWwUOhNpKHCmkTFP7ziS0QufhEj9oaDY2yvF_YD7SnwxoL6Cth_DZLHL_VcO4R_sfc1fIdF26ccafarXOe5wkNdAPouflGiEm-2SO3AeO2CuatNcaonae1axddzPryz2ivn7-h04h59Ax2NPyouWefW8qpciQn8CTUEYPO-VysdmYkNulROsEvsb5FKUWAUP-igOxC5SrFMYHEET",
                },
                {
                  title: "Blade Runner 2049",
                  year: "2017",
                  genre: "Neo-Noir / Sci-Fi",
                  rating: "8.5",
                  badge: "HDR",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4A5QxYBPT2IDPuFeDeh9ap5_SwCszT8awW9qx87nGRSDqcCYVVnHHnCk3iuM0jHHd9w8yieZkLvnH6bhSq3CX3lbVt_Hbs4ERAhjt7ifyTv5Tz0pGee4A6SMHTYM2WpRFCDfU1mL6tpaAz1-9LqptNeVjjQD9gYJh4gGtx268Hpp5u7eY8Qsz8RAJ8YyKYHNDXovcITV3-gtkjTSe-_QWdbah98bsDnmuomvLaHuP",
                },
                {
                  title: "Cyberpunk: Edgerunners",
                  year: "2022",
                  genre: "Action / Anime",
                  rating: "8.6",
                  badge: "HD",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXJM5ne273pYWZ15HAgWxTNtBDh8q1CD1bJsOpuzE5fSfqmxNCv6n4atuwXeNUTXlq06fmlz8-LaV55rJZ0-CfN1r8naqdSh6NFom-XxJ-AKrMTNFnet_jRGCOdcuciWb3XgHIT1EtTNp_WDdNIOkCnc2ZrZrRYKpVTrkm030AdeXdRP8pfz1Bth7gSnm47tL5MfvF1ImgRiuwKp95cfYibSJ2qj7nv4SVa_iAWV_G",
                },
                {
                  title: "The Batman",
                  year: "2022",
                  genre: "Crime / Mystery",
                  rating: "8.2",
                  badge: "4K",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBs-aKbLSTsNxVjS61eyEqZuY5fOTFRVwJDiw8O-pJK87M350txx2I3NvzouUKUlAHxXEgy8U-TsmOi64Ybz_t9bQuxgfc8EpjeaKUm3YXQhBaua4xTiL5tPt93YdlNAGTH91ljf_oa55CvcRtdsxBl25YCt1pZ6H7cN1ESnqKttQ9hJndBSuhBC45Hj7etuAsttu4kVDU0U4xOC80750jI2Lu5-ujgH4wg9SoOMM2",
                },
                {
                  title: "Inception",
                  year: "2010",
                  genre: "Sci-Fi / Heist",
                  rating: "8.8",
                  badge: "4K",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqXba93WWRBNVg3bunqupcgDFvrMsnatgMyJn69qB3tFHsb9tV1UoosTKlU6_krBqUMxwcld9pC6HfoRL5nO5OTwIllMuc3b1nFJ3L15ffLLWeG08wGMARPLNHeWy1jLR3jHxi32PaxAIGEnn97MC2xh89z00au4DcUNsDNb57CSKfl4d0ceeTWyD0rbla8atl0vLMKeGWQ358auyZvGxkAwcRDzmj-5KTqudsrBA9",
                },
                {
                  title: "Dune",
                  year: "2021",
                  genre: "Adventure / Sci-Fi",
                  rating: "8.1",
                  badge: "4K",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2S2bXakp-iMiedL8DEX_RiyCNHM7uDNy7HgigQ-neUyrmTsdAZ-IdI-uM8ElXYbC1UORq0Hmz8O_mUwhoNkiLIRBtMSTlNqsIzeYYM__8LVUyRykPHryYjbwUv3oDfG6lwQEB7jAwP7yg736-U4XbvpNFzBpjmvvVMIIF1J7Jarq2A0UW9YLA05t3nnRYqiEFrQPFn5yJdYDQKLX0IvZ6ZqKyoXibKHiY2pKx_EmS",
                },
              ].map((movie, idx) => {
                const isAdded = quickWatchlistStates[`trending-${idx}`];
                return (
                  <div
                    key={idx}
                    className="movie-card min-w-[210px] w-[210px] sm:min-w-[230px] sm:w-[230px] flex-shrink-0 group cursor-pointer"
                  >
                    <div className="aspect-[2/3] w-full rounded-2xl bg-surface-container-high relative overflow-hidden transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_12px_32px_rgba(56,189,248,0.2)]">
                      <img
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        src={movie.img}
                        alt={movie.title}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-90"></div>
                      <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-surface-container-lowest/80 backdrop-blur-md text-primary font-metric-badge text-metric-badge">
                        {movie.badge}
                      </div>
                      <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-lowest/85 backdrop-blur-md shadow">
                        <span
                          className="material-symbols-outlined text-secondary text-[14px]"
                          style={{ fontVariationSettings: '"FILL" 1' }}
                        >
                          star
                        </span>
                        <span className="font-metric-badge text-metric-badge text-on-surface">
                          {movie.rating}
                        </span>
                      </div>
                      <button
                        aria-label={`Add ${movie.title} to Watchlist`}
                        className={`absolute bottom-3 right-3 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 shadow-lg ${
                          isAdded
                            ? "bg-primary text-on-primary"
                            : "bg-surface-container-high/90 hover:bg-primary-container text-on-surface hover:text-on-primary-container"
                        }`}
                        onClick={(e) =>
                          toggleQuickWatchlist(e, `trending-${idx}`)
                        }
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          {isAdded ? "check" : "add"}
                        </span>
                      </button>
                    </div>
                    <div className="mt-space-sm px-1">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface truncate group-hover:text-primary transition-colors">
                        {movie.title}
                      </h3>
                      <p className="font-body-sm text-body-sm text-outline">
                        {movie.year} • {movie.genre}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* 2. Top Rated Classics & Hits Carousel */}
          <section className="space-y-space-md relative">
            <div className="flex items-end justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-secondary font-headline-lg text-headline-lg">
                    ⭐
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                    Top Rated Classics &amp; Hits
                  </h2>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  Hall of fame cinematic masterworks revered by global audiences
                </p>
              </div>
              <div className="flex items-center gap-space-xs">
                <button
                  aria-label="Previous"
                  className="p-2 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer shadow-sm"
                  onClick={() => scrollShelf(topShelfRef, -320)}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    chevron_left
                  </span>
                </button>
                <button
                  aria-label="Next"
                  className="p-2 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer shadow-sm"
                  onClick={() => scrollShelf(topShelfRef, 320)}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>

            <div
              className="flex gap-space-md overflow-x-auto scroll-smooth scrollbar-none pb-4 pt-1 -mx-2 px-2"
              ref={topShelfRef}
            >
              {[
                {
                  title: "The Dark Knight",
                  year: "2008",
                  genre: "Action / Crime",
                  rating: "9.0",
                  badge: "4K",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBk3f2GikenWTL6K7D8zQt7B5cNyvXd_DpOZ7Cl8pSQdh9KkCB0YUFZNgBO1Nk1vmfy4mGbBrRpwvv2eOg3ihOjC-VgVs9A_Dvly9cQTdWRNY-3fDtkR0dbbqnB4sx9dLjF3C8fyz2WPA-IxGbntLVFYdNiD6aR6FvPV64hLTnqvuup5QLOyrckcFrt3SVU27aNCqZWN3WqzD-B7adIc5e2108FTzlhQvg-52IfyUcQ",
                },
                {
                  title: "Parasite",
                  year: "2019",
                  genre: "Drama / Thriller",
                  rating: "8.5",
                  badge: "4K",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAd5yuBvTQ9x4sGWGGF0yS15PxdyU8an0Ir907hE94X7sLFw6ZMGOr43vgmEQqS0SrEiEX8ooTlGWUmVi77S7o8xpoPi52mJ0IRvc1dZ5XnGwsTl_apASN9rgz_qB9XA8IRR0wrbJZ7FiPQMMZfK35Cio-16zs3la2I0IwPyAI6Li2-TA1XQgP8tBA5dsgYJSWt5VpWxQ9GF7rnh7_wVtlMCkFvO6rS1LYw0ibVTNWm",
                },
                {
                  title: "Pulp Fiction",
                  year: "1994",
                  genre: "Crime / Cult",
                  rating: "8.9",
                  badge: "HD",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuClFIFcusv47pDv8Gmor0DY-lGKLsFRYRuU_AAQMFHXoiJ5UilCLxa3ZCVO_MxrGBbtXi5cjFoK2xl7w1mve6SqOIERaKbTobXX6sdDfFeYmSCfs0EDB3V9sfSL5mlKci7tsbuK9m1R2djaMeDpyEU7SZ_EjwWYnHMcIXmXgZKasblx3Zw18Hn8qqQvvBH-5xygOLty3_YtKYI28hGDTcr0rtA3ioh61biIamow3Qnw",
                },
                {
                  title: "Spirited Away",
                  year: "2001",
                  genre: "Fantasy / Anime",
                  rating: "8.6",
                  badge: "HD",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGsZlpXH04fYABI_RiFVTQvltpXYjAHEvTvY0gK9w3I6B7ze45KD_JEAD3luZPizZyB3RhLBqWzb88X6s-TM6ptEWRZHZ82yyKRXX2SLKXOS-k_g__LWFpOSL8nt8NvWavZRHSSaU5GlOLeQ49G1wW4Fm-kKB-q3r4MdzuU6hDyDZkvYBjyeKAOLP-3kOCRbuHuNFYiPVDEXdzdE24hIOk_uaOxqwBVD1hO1e0Ok_g",
                },
                {
                  title: "Whiplash",
                  year: "2014",
                  genre: "Drama / Music",
                  rating: "8.5",
                  badge: "HD",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvtk6qcWNn1IdAGDxkTtH6rlKAdhzY41uUKiMhPuHdThPJmu1uhtZOS3dzXwbQsNYbZQSa4WXOOT9s6e_sDvfGJJDCKE4HGhOwzVIIe1-Uo6iiqlgjzH2OE1X9vNd1PqqWIL-yERl3K3WKoLs652kL2JL8e9aqcv3QVvvosJ89c7_q7ZtR24XirNEtG4cyoS9tmvjs00YgpxTS1McLvigFAJsLxnZVv9upMZAu-bhT",
                },
              ].map((movie, idx) => {
                const isAdded = quickWatchlistStates[`top-${idx}`];
                return (
                  <div
                    key={idx}
                    className="movie-card min-w-[210px] w-[210px] sm:min-w-[230px] sm:w-[230px] flex-shrink-0 group cursor-pointer"
                  >
                    <div className="aspect-[2/3] w-full rounded-2xl bg-surface-container-high relative overflow-hidden transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_12px_32px_rgba(56,189,248,0.2)]">
                      <img
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        src={movie.img}
                        alt={movie.title}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-90"></div>
                      <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-surface-container-lowest/80 backdrop-blur-md text-primary font-metric-badge text-metric-badge">
                        {movie.badge}
                      </div>
                      <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-lowest/85 backdrop-blur-md shadow">
                        <span
                          className="material-symbols-outlined text-secondary text-[14px]"
                          style={{ fontVariationSettings: '"FILL" 1' }}
                        >
                          star
                        </span>
                        <span className="font-metric-badge text-metric-badge text-on-surface">
                          {movie.rating}
                        </span>
                      </div>
                      <button
                        aria-label={`Add ${movie.title} to Watchlist`}
                        className={`absolute bottom-3 right-3 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 shadow-lg ${
                          isAdded
                            ? "bg-primary text-on-primary"
                            : "bg-surface-container-high/90 hover:bg-primary-container text-on-surface hover:text-on-primary-container"
                        }`}
                        onClick={(e) => toggleQuickWatchlist(e, `top-${idx}`)}
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          {isAdded ? "check" : "add"}
                        </span>
                      </button>
                    </div>
                    <div className="mt-space-sm px-1">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface truncate group-hover:text-primary transition-colors">
                        {movie.title}
                      </h3>
                      <p className="font-body-sm text-body-sm text-outline">
                        {movie.year} • {movie.genre}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* 3. Sci-Fi & Action Hits Carousel */}
          <section className="space-y-space-md relative">
            <div className="flex items-end justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-primary font-headline-lg text-headline-lg">
                    ⚡
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                    Sci-Fi &amp; Action Hits
                  </h2>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  Mind-bending realities, high concept action, and adrenaline
                  pulses
                </p>
              </div>
              <div className="flex items-center gap-space-xs">
                <button
                  aria-label="Previous"
                  className="p-2 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer shadow-sm"
                  onClick={() => scrollShelf(scifiShelfRef, -320)}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    chevron_left
                  </span>
                </button>
                <button
                  aria-label="Next"
                  className="p-2 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer shadow-sm"
                  onClick={() => scrollShelf(scifiShelfRef, 320)}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>

            <div
              className="flex gap-space-md overflow-x-auto scroll-smooth scrollbar-none pb-4 pt-1 -mx-2 px-2"
              ref={scifiShelfRef}
            >
              {[
                {
                  title: "Arrival",
                  year: "2016",
                  genre: "Sci-Fi / Mystery",
                  rating: "8.0",
                  badge: "4K",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0TgjozfLwmRyjl38O7hy9iDOkKVFC_sthb15vaGuMxO7_ipwjxB7P57ikIaKoltsLBAakhUQXkFN0yb9Z8obpZN67k7syfuJoUipLxmgF6HpqwG0lj5VySlZOcy0ci1l98-srIbG-3aYYZl1cARyRwltooFa01w1xq-wg0I9sPWejgv8Ksx99QGmEtiRqD972aKejWTffqm7_TdkefqFFxlC4JliOrl0AMuUe5ix4",
                },
                {
                  title: "Tenet",
                  year: "2020",
                  genre: "Action / Sci-Fi",
                  rating: "7.8",
                  badge: "4K",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBarsTbv11KF1aBijMpV_lyxyP8DIlBMRMVAy8LyJ7m28DYN8NHpHMcNMw5mBXbzMaZSQ_0n9V4GWi_ahM-wRaLR_srxX9IgF-96o_KPFvgo03quoNwXq_-PIlxAICq29hItIoRdpV4YgoJ2Otzkcv3MSQaJcHTckm8SYdAAGAT6LACc1D2Q2MyDZQzKRpozBsN8QcozT9hLbgqq_gyBKW7EchlWFxEPGLx-de3-xPB",
                },
                {
                  title: "Edge of Tomorrow",
                  year: "2014",
                  genre: "Action / Time-Loop",
                  rating: "7.9",
                  badge: "HDR",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUl7A4ju6PF3FZLhIdRhNw07fbNramCLQwqcVaSkeIKa6nIzpygXFJ5JlOwPeud1jjgfrkv-LgHiI_7-pvrCXwJqWLLjWg7jbtWzcB347guHhYuljCf9mMBWchFqZSfcUtAnPeZPiX2tCWeT8mNkmHtnx4f61BaKFmiB8NYA3E3FI3zVjXLEVcrIlwi819PVWIHUREQ81-Y5gt3VeL6o62Ts3_NWVFm2gUOdzGC89P",
                },
                {
                  title: "Ex Machina",
                  year: "2014",
                  genre: "AI / Sci-Fi",
                  rating: "7.7",
                  badge: "HD",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSYKRAOaVZRhevVlRcmjUXDYGWm_7I5LlES9Anq6xADZ8j_NVv7hsTOvNJ1GTUje_tDfSgb7W1kdyTqTD0VX-Xv9VLZT1wK7RB4LKai-H2gBC6h9Jy5US-clhtR1BOoQsPgmyqqGlPvtOUQ-dFSgcbna6-27hANLKZVM9jQ9rKT4j0IjJF5ga01EYAvFQHdYC0tsaRf2sV2ealESldT8ERQlEEvQQkBRnM_kSFVJLI",
                },
                {
                  title: "The Matrix Resurrections",
                  year: "2021",
                  genre: "Cyberpunk / Action",
                  rating: "6.5",
                  badge: "4K",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVrljWWi0ejhB6ItwAu_KORvsBxnEGiiBY89qNHEofnECFv-sCdsoLk0wtZRbkZwHqodEKYwpvu6vIQ7ovoA2tl_nvqKYl7ht8kN6-MINPGYolPEFNXunTtaWd2Tukq_gl-3c4XPHcSrg6IVdAOH4SgLIONhT1eClOTMO-CNJJ8401Us6DzJIFbzhjbfB_bopRzlksg8PwPELB57ajtgkaDzk2hQFPL0ZIlqwB3yy9",
                },
              ].map((movie, idx) => {
                const isAdded = quickWatchlistStates[`scifi-${idx}`];
                return (
                  <div
                    key={idx}
                    className="movie-card min-w-[210px] w-[210px] sm:min-w-[230px] sm:w-[230px] flex-shrink-0 group cursor-pointer"
                  >
                    <div className="aspect-[2/3] w-full rounded-2xl bg-surface-container-high relative overflow-hidden transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_12px_32px_rgba(56,189,248,0.2)]">
                      <img
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        src={movie.img}
                        alt={movie.title}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-90"></div>
                      <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-surface-container-lowest/80 backdrop-blur-md text-primary font-metric-badge text-metric-badge">
                        {movie.badge}
                      </div>
                      <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-lowest/85 backdrop-blur-md shadow">
                        <span
                          className="material-symbols-outlined text-secondary text-[14px]"
                          style={{ fontVariationSettings: '"FILL" 1' }}
                        >
                          star
                        </span>
                        <span className="font-metric-badge text-metric-badge text-on-surface">
                          {movie.rating}
                        </span>
                      </div>
                      <button
                        aria-label={`Add ${movie.title} to Watchlist`}
                        className={`absolute bottom-3 right-3 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 shadow-lg ${
                          isAdded
                            ? "bg-primary text-on-primary"
                            : "bg-surface-container-high/90 hover:bg-primary-container text-on-surface hover:text-on-primary-container"
                        }`}
                        onClick={(e) => toggleQuickWatchlist(e, `scifi-${idx}`)}
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          {isAdded ? "check" : "add"}
                        </span>
                      </button>
                    </div>
                    <div className="mt-space-sm px-1">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface truncate group-hover:text-primary transition-colors">
                        {movie.title}
                      </h3>
                      <p className="font-body-sm text-body-sm text-outline">
                        {movie.year} • {movie.genre}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* 4. Upcoming Releases & Previews Carousel */}
          <section className="space-y-space-md relative">
            <div className="flex items-end justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-tertiary-container font-headline-lg text-headline-lg">
                    📅
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                    Upcoming Releases &amp; Previews
                  </h2>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  Highly anticipated theatrical premieres landing next month
                </p>
              </div>
              <div className="flex items-center gap-space-xs">
                <button
                  aria-label="Previous"
                  className="p-2 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer shadow-sm"
                  onClick={() => scrollShelf(upcomingShelfRef, -320)}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    chevron_left
                  </span>
                </button>
                <button
                  aria-label="Next"
                  className="p-2 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer shadow-sm"
                  onClick={() => scrollShelf(upcomingShelfRef, 320)}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>

            <div
              className="flex gap-space-md overflow-x-auto scroll-smooth scrollbar-none pb-4 pt-1 -mx-2 px-2"
              ref={upcomingShelfRef}
            >
              {[
                {
                  title: "Mickey 17",
                  date: "Mar 2025",
                  genre: "Sci-Fi / Thriller",
                  status: "In Theaters",
                  countdown: "In 14 Days",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2NmrOIhVQTx5XylT6jkkR1q0cmuzTUFOOt7hKOp5ayC2zHb0VUz9pCb5JOH5L6Ycdv0RoTPVDPIPNzAT1bQpVGNb657aj0oCvE0VLXhZEHY2mlVYksbyVp2ID04e79sTC1UM7MsFwTcMXNZKE7S30mq-l-Owo6sx8yCX2RDUybtt2EDfVC9Kwsf_beBsHIu_VTukBs5Q8v2yl5_Ec3YZneVWcM-2odqSK1QVE20xz",
                },
                {
                  title: "Ballerina",
                  date: "Apr 2025",
                  genre: "Action / Neo-Noir",
                  status: "IMAX Premiere",
                  countdown: "In 22 Days",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCE8S7lX7y5xbKMqrUF_4bRAOeD4sQrCKVcCEf-9k_8y_E4DMZcZQVGYt814X16ZXI0iFjDBUMEDNpe2tR_KoQHLCAGkD29inFfD3a40_FpDQ2taiwTWl5PqrTVnVUu_Zil6_YC2c639Jz7eOHnyi30Be_IEEkIkkNtueCLuRoY5pT-zv45C9ilcabyaFlzTpuSyaPEjj8jn5zU4iOIHP02qBkUDnWQfMSEeTSRemjl",
                },
                {
                  title: "Superman",
                  date: "May 2025",
                  genre: "Action / Hero",
                  status: "Early Screening",
                  countdown: "In 30 Days",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBy_58fniW405aKiSbZ9C4coHqKL4HJgtt_8Nkn0xtmoHbe5r45i7nbYQo0nvWoI2YItWk_MU4kriX79uZMXjut4nP-Xz5IXkmiY4BDFn-aB-or_oh-H2RSyVMkxYwFRQUiHIcN3Hzr6Selb2mG-Ay-6wE3js5B2P_t1T3OASdoroA53QyZeo_RzCpuyeh3Ai6yaRLCJs78yJWqX2IaysfEjaa8ulpTeKt26iyRw1Dl",
                },
                {
                  title: "TRON: Ares",
                  date: "Jun 2025",
                  genre: "Sci-Fi / Cyber",
                  status: "In Theaters",
                  countdown: "In 45 Days",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDY5fmt3nL5ZBpgkZnLljD5vW1xl7qp_O61P5nmBIX7lYUBAYncD_rgKtk8s7Az67gGTeN9Z5pJr8MqFDsMK5siTBkmxk-8bzU-8l3fiQFsOOTqJOsMoNvqkSAlF3K4EpdMd1BUGG_8EV9Px1xp77R2UYMzdz_FiJs0EbNostnM3bvIq3fc5Inxnh4j52UU6aF5U3vUZ_I9VHIfPakiMuXgs5_X5_r64RpS4CLlXO8n",
                },
              ].map((movie, idx) => {
                const isAdded = quickWatchlistStates[`upcoming-${idx}`];
                return (
                  <div
                    key={idx}
                    className="movie-card min-w-[210px] w-[210px] sm:min-w-[230px] sm:w-[230px] flex-shrink-0 group cursor-pointer"
                  >
                    <div className="aspect-[2/3] w-full rounded-2xl bg-surface-container-high relative overflow-hidden transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_12px_32px_rgba(56,189,248,0.2)]">
                      <img
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        src={movie.img}
                        alt={movie.title}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-90"></div>
                      <div className="absolute top-3 left-3 px-2 py-1 rounded-md bg-secondary-container/90 text-on-secondary-container font-label-sm text-label-sm shadow">
                        {movie.status}
                      </div>
                      <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-surface-container-lowest/85 backdrop-blur-md shadow text-primary font-metric-badge text-metric-badge">
                        {movie.countdown}
                      </div>
                      <button
                        aria-label="Set Reminder"
                        className={`absolute bottom-3 right-3 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 shadow-lg ${
                          isAdded
                            ? "bg-primary text-on-primary"
                            : "bg-surface-container-high/90 hover:bg-primary-container text-on-surface hover:text-on-primary-container"
                        }`}
                        onClick={(e) =>
                          toggleQuickWatchlist(e, `upcoming-${idx}`)
                        }
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[19px]">
                          notifications_active
                        </span>
                      </button>
                    </div>
                    <div className="mt-space-sm px-1">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface truncate group-hover:text-primary transition-colors">
                        {movie.title}
                      </h3>
                      <p className="font-body-sm text-body-sm text-outline">
                        {movie.date} • {movie.genre}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        {/* Interactive Trailer Modal Overlay */}
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-surface-container-lowest/90 backdrop-blur-2xl transition-opacity duration-300 p-space-md ${
            isModalOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          id="trailerModal"
        >
          <div className="relative w-full max-w-4xl bg-surface-container rounded-2xl overflow-hidden shadow-2xl">
            <div className="px-space-lg py-space-md flex items-center justify-between bg-surface-container-high">
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-primary">
                  play_circle
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  Dune: Part Two — Official IMAX Trailer
                </span>
              </div>
              <button
                className="p-1 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-colors cursor-pointer"
                onClick={() => setIsModalOpen(false)}
                type="button"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="relative aspect-video w-full bg-surface-container-lowest flex items-center justify-center overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkhuhCXk2D62eaT8Xr6dhDYO6yXAmGmiHP7TZ_ePMbYXzuCPle8Y3e3Rj6kg9-SruGen5_MiDYdp4dx7bC_hLs88h5S3Oz55_7EueJFT9KJ1WLtVmrKfa9YGHKrMbtaF1zSfewHmMZC5lJSTtr0M3t2YgNW39k8yITTiwQPkjHAekqSI3A-SVs6ko7qGHZGD2S7CCdFSgGd5pcy-wT0SpCsBk8ouWZDz0d8qiX8zT4"
                alt="Trailer preview"
              />
              <div className="absolute inset-0 bg-surface-container-lowest/40 backdrop-blur-[2px] flex flex-col items-center justify-center gap-space-sm">
                <div className="w-16 h-16 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                  <span
                    className="material-symbols-outlined text-[36px]"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    play_arrow
                  </span>
                </div>
                <span className="font-label-md text-label-md text-on-surface bg-surface-container-lowest/70 px-3 py-1 rounded-full">
                  Stream Trailer [4K • Dolby Atmos]
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
