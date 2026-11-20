import React, { useState, useMemo, useRef } from "react";

const INITIAL_MOVIES = [
  {
    id: 1,
    order: 1,
    title: "Dune: Part Two",
    year: 2024,
    genres: "Sci-Fi / Adventure",
    durationLabel: "2h 46m",
    runtime: 166,
    rating: 8.8,
    status: "unwatched",
    watchedLabel: "Watched",
    note: "Watch in IMAX 70mm if possible",
    description:
      "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    poster:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuASzfnxVZZi7s6lFoN5BphGe0kdlTj_cTGqUpvgIAX5jj0MLZMl8AZ6S3JIQHssHxVqw_n55HDa263ALK52pM4TbMNNc5QLz44sCMNFzogGeQ1PQak5knpQjNCzbS0bCgewF1YlMXuMLdE9h6SUK1kHh_2wioLUgzL3gWLrFNPQjyvIyyMZ2VhwiPgvdBCYRYZH7RKjoskWj0Bk8Ej6TtjCb9FazeU_Swtdy3DAvWp8",
  },
  {
    id: 2,
    order: 2,
    title: "Interstellar",
    year: 2014,
    genres: "Sci-Fi / Drama",
    durationLabel: "2h 49m",
    runtime: 169,
    rating: 8.9,
    status: "watched",
    watchedLabel: "Watched (Re-watch)",
    note: null,
    description:
      "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot is tasked to pilot a spacecraft through a mysterious wormhole.",
    poster:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBbfTGkhg1QfE2q6gg4LDa0Ui8INbMPOHk2yYzXxYZXbQFFsQnJiMGE-utfI1CnhCtry2IkIjkqc9kH4WbtOBvjMD1GW79bteoQiFV7EgNUC7RAeJEktB8pRD6JPw7TK3xJLSYlxdQtloEieyOTmGngtP-c7M-qPjXe0SKMCip6sOUbBdJn5612v17NguuF0X9hSBRzOKeWDyuLg8uVdXiCCxcrSsjgZje-qXLXyRPJ",
  },
  {
    id: 3,
    order: 3,
    title: "Blade Runner 2049",
    year: 2017,
    genres: "Neo-Noir / Sci-Fi",
    durationLabel: "2h 44m",
    runtime: 164,
    rating: 8.5,
    status: "unwatched",
    watchedLabel: "Watched",
    note: null,
    description:
      "Young Blade Runner K unearths a long-buried secret that leads him to track down former blade runner Rick Deckard.",
    poster:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB8BISXAZB9kYGW9JGdxJPiEUFH43WPpSbWOqqgdIEAYJ5rzSR_O2l6ESjefLPWtRpivRw1nAIyD1P8ygMUn6l1gHdM810iLBYWc0rdLXPizac4f-ZuY-8f0FJdBe63iwn47WPOsEbGnCsHGYObENgIQCkOlzX_Q71zdKGAOpjTwhVqpmg0-2HEzzq5wE7eVT9qHjkHFTrK-jImalMjOLE0H8Q_2H06Gd5Jfre1mUEr",
  },
  {
    id: 4,
    order: 4,
    title: "Oppenheimer",
    year: 2023,
    genres: "Biography / Drama",
    durationLabel: "3h 00m",
    runtime: 180,
    rating: 8.9,
    status: "unwatched",
    watchedLabel: "Watched",
    note: null,
    description:
      "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.",
    poster:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCazZowhdhvRaqnRvnZiW3VqdH7ul7kDI95Ou9XMDJbAgaQCxEijxzvyjmhC5FxugFPI5Im7LcFu4CB6E6xyN9pi64w_rvrod4M4gB6iceop4mooOfOvyBQvzaoB7pzY1pSZeeZL1T9trviMubpn2S567CfbxR4TeiaIV22t45N3RPJag0VRNqmuxRIZHVFVPo3IfWQ-2y108Ga_a32gDlmIV1dsFyz5u1nTbXXij4w",
  },
];

const RECOMMENDATIONS = [
  {
    id: "rec-1",
    title: "Arrival",
    displayTitle: "Arrival",
    year: 2016,
    genreLabel: "2016 • Sci-Fi / Mystery",
    rating: "7.9",
    match: "98% Match",
    poster:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJhrIEQXumr9etc61ED8AuxoFGNvaxzga44XpdFD0-x39a2rgV6zaQWZ7j81wDejg0y8J6ab68k8HRcbDyLNudz3wVGI1TmlSw3ioo4YGRaDJU-Bt4gaww7u5ysYN4vafXQ5_U09VxlzAUU4DIxQwvcj9TrKe8pLsp-M-8LIQ2Th-J9jH_JWVjnZ7Di_doH2oX6Ixx0XhB05ju9ph_zbanEdICo7HErAsBh0t9cmzt",
  },
  {
    id: "rec-2",
    title: "Tenet",
    displayTitle: "Tenet",
    year: 2020,
    genreLabel: "2020 • Action / Sci-Fi",
    rating: "7.3",
    match: "94% Match",
    poster:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCAgTeTC5BQnv3WH8-5AcF4gwCKLjUmx5CQ-h-lZhMmRtXQbcbGYDwSH2iSscx0qNKPfIqrDkfJWMgiAeXThxoO_RtHQD_WY85qQ6RE1XUzunA4kZgu3Y7Oms6GQBEKS0LiFXPngJKnVPKpeJ23Df-EV5u9c87rQG0FWlw3ipRek8d15QmZtMjIylTPhnamUoOWImPRorW52Qme-yK4BpfSfWeXOZRFBeWHSdtcOuvm",
  },
  {
    id: "rec-3",
    title: "Solaris",
    displayTitle: "Solaris (1972)",
    year: 1972,
    genreLabel: "1972 • Philosophical Sci-Fi",
    rating: "8.0",
    match: "91% Match",
    poster:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCkGCMsZqIZUJzlgRCg0iI3BPevEKyPJnU1oOimm60K2a0oiVPAQ7Wu9PBKOfpXsuCeaF74of1yDjHJtVVEZFNd6GejXEEnimuVZcIsKc79CNAqkGsHBRcEtxUGW2-gMKl5jY0hvQBxkHiHphLPLmKFa5SK_yzeXVXTKsds0J08WzBXRxTQUpEiXVlt6KlTjrHr5bhgE77JcebbdSRO_1F21ngJC70r1St3i8Oy20la",
  },
  {
    id: "rec-4",
    title: "2001: A Space Odyssey",
    displayTitle: "2001: A Space Odyssey",
    year: 1968,
    genreLabel: "1968 • Masterpiece Sci-Fi",
    rating: "8.3",
    match: "99% Match",
    poster:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC8n9jZSLknnfZ0cYxQRTyTS1z0Ca1042HWY5aUywZj6GS-T1tI6a834hKpI86-Ah3O9FPeIcs1dOnCc23XanOZn43KssBY47XMN3QfFY8xaWlX9i6CGfPf798loHxVkw5mhTcP5dqjDfCScOpj3mtrnt_3Q7PaV2lIjk4FeWkLzfCz883FvQS9J5o5KXv_rXTwK4SoeT7txPcJdveZjSyhSrwJN-BS3W7oJiFMicxs",
  },
];

export default function Watchlist() {
  const [movies, setMovies] = useState(INITIAL_MOVIES);
  const [filter, setFilter] = useState("all"); // 'all' | 'unwatched' | 'watched'
  const [sortBy, setSortBy] = useState("newest"); // 'newest' | 'rating' | 'runtime'
  const [viewMode, setViewMode] = useState("grid"); // 'grid' | 'list'
  const [removingIds, setRemovingIds] = useState({});
  const [highlightedId, setHighlightedId] = useState(null);
  const [shareCopied, setShareCopied] = useState(false);
  const [recStatuses, setRecStatuses] = useState({}); // { [id]: 'added' | 'vaulted' }

  const cardRefs = useRef({});

  // Derived Counts
  const totalCount = movies.length;
  const unwatchedCount = useMemo(
    () => movies.filter((m) => m.status === "unwatched").length,
    [movies],
  );
  const watchedCount = useMemo(
    () => movies.filter((m) => m.status === "watched").length,
    [movies],
  );

  // Filtered & Sorted Movies
  const displayedMovies = useMemo(() => {
    const filtered = movies.filter(
      (movie) => filter === "all" || movie.status === filter,
    );

    return [...filtered].sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "runtime") return b.runtime - a.runtime;
      return a.order - b.order;
    });
  }, [movies, filter, sortBy]);

  // Handlers
  const handleToggleWatch = (id) => {
    setMovies((prev) =>
      prev.map((movie) => {
        if (movie.id !== id) return movie;
        const nextStatus =
          movie.status === "unwatched" ? "watched" : "unwatched";
        return {
          ...movie,
          status: nextStatus,
          watchedLabel: "Watched",
        };
      }),
    );
  };

  const handleRemoveMovie = (id) => {
    setRemovingIds((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setMovies((prev) => prev.filter((movie) => movie.id !== id));
      setRemovingIds((prev) => {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      });
    }, 200);
  };

  const handleQuickAdd = (recId) => {
    setRecStatuses((prev) => ({ ...prev, [recId]: "added" }));
    setTimeout(() => {
      setRecStatuses((prev) => ({ ...prev, [recId]: "vaulted" }));
    }, 1500);
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setShareCopied(true);
    setTimeout(() => setShareCopied(false), 1800);
  };

  const handleExport = () => {
    const exportData = movies.map(({ title, year, rating, status }) => ({
      title,
      year,
      rating,
      status,
    }));
    const blob = new Blob([JSON.stringify(exportData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "cinematch-watchlist.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleAiShuffle = () => {
    if (!displayedMovies.length) return;
    const randomMovie =
      displayedMovies[Math.floor(Math.random() * displayedMovies.length)];
    const el = cardRefs.current[randomMovie.id];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    setHighlightedId(randomMovie.id);
    setTimeout(() => setHighlightedId(null), 1800);
  };

  return (
    <>
      <div className="flex flex-col w-full">
        <div className="w-full px-margin-mobile md:px-margin py-space-lg md:py-space-xl flex flex-col gap-space-xl">
          {/* Top Overview & Strategic Insights */}
          <div className="relative flex flex-col gap-space-lg">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
              <div className="space-y-space-xs">
                <div className="flex items-center gap-space-sm text-primary font-label-sm text-label-sm tracking-widest uppercase">
                  <span className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_#38bdf8]" />
                  <span>Local Vault Sync • Encrypted</span>
                </div>
                <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                  My Cinematic Watchlist
                </h1>
                <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-2">
                  <span>Personal collection stored locally</span>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-outline" />
                  <span className="text-primary font-medium">
                    {totalCount} movies saved
                  </span>
                </p>
              </div>

              {/* Export & Share Action Tools */}
              <div className="flex flex-wrap items-center gap-space-sm">
                <button
                  onClick={handleExport}
                  className="group relative px-space-md py-space-sm rounded-xl bg-surface-container-high hover:bg-surface-variant text-on-surface transition-all flex items-center gap-space-xs shadow-md"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px] text-primary">
                    ios_share
                  </span>
                  <span className="font-label-md text-label-md">
                    Export (JSON / CSV)
                  </span>
                </button>

                <button
                  onClick={handleShare}
                  className="px-space-md py-space-sm rounded-xl bg-surface-container-high hover:bg-surface-variant text-on-surface transition-all flex items-center gap-space-xs shadow-md"
                  type="button"
                >
                  {shareCopied ? (
                    <>
                      <span className="material-symbols-outlined text-[18px] text-emerald-400">
                        done
                      </span>
                      <span className="font-label-md text-label-md text-emerald-400">
                        Link Copied!
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-[18px] text-secondary">
                        link
                      </span>
                      <span className="font-label-md text-label-md">
                        Share Link
                      </span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleAiShuffle}
                  className="px-space-md py-space-sm rounded-xl bg-primary-container text-on-primary-container hover:bg-primary font-label-md text-label-md flex items-center gap-space-xs transition-all shadow-[0_0_20px_rgba(56,189,248,0.25)]"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    auto_awesome
                  </span>
                  <span>AI Next Pick</span>
                </button>
              </div>
            </div>

            {/* Atmospheric Metagrid Stats Bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-space-md">
              <div className="relative overflow-hidden rounded-2xl bg-surface-container-low p-space-md shadow-md flex items-center justify-between">
                <div className="space-y-space-xs">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">
                    Titles in Queue
                  </span>
                  <span className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                    {totalCount}
                  </span>
                  <span className="font-body-sm text-body-sm text-primary flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">
                      motion_photos_on
                    </span>{" "}
                    100% Synced
                  </span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container">
                  <span className="material-symbols-outlined text-[24px]">
                    movie
                  </span>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl bg-surface-container-low p-space-md shadow-md flex items-center justify-between">
                <div className="space-y-space-xs">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">
                    Total Runtime
                  </span>
                  <span className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                    9h 42m
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    582 minutes binge
                  </span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-[24px]">
                    schedule
                  </span>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl bg-surface-container-low p-space-md shadow-md flex items-center justify-between">
                <div className="space-y-space-xs">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">
                    Average Rating
                  </span>
                  <div className="flex items-center gap-space-xs">
                    <span className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                      8.68
                    </span>
                    <span
                      className="text-secondary text-[18px] material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    High-caliber selection
                  </span>
                </div>
                {/* Micro Visual Donut Meter SVG */}
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 transform -rotate-90"
                    viewBox="0 0 36 36"
                  >
                    <path
                      className="text-surface-container-highest"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.5"
                    />
                    <path
                      className="text-primary-container"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeDasharray="87, 100"
                      strokeLinecap="round"
                      strokeWidth="3.5"
                    />
                  </svg>
                  <span className="absolute font-label-sm text-label-sm text-on-surface font-bold">
                    87%
                  </span>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl bg-surface-container-low p-space-md shadow-md flex items-center justify-between">
                <div className="space-y-space-xs">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">
                    Top Genres
                  </span>
                  <span className="font-headline-sm text-headline-sm text-on-surface font-semibold truncate block">
                    Sci-Fi &amp; Thriller
                  </span>
                  <div className="flex items-center gap-1.5 pt-0.5">
                    <span className="px-2 py-0.5 rounded-full bg-surface-container text-primary font-label-sm text-label-sm">
                      75% Space
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm">
                      Drama
                    </span>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined text-[24px]">
                    category
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Controls Panel: Status, View, Sort */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md p-space-sm rounded-2xl bg-surface-container-low shadow-sm">
              {/* Status Tabs Segmented Control */}
              <div className="flex items-center bg-surface-container-lowest p-1 rounded-xl gap-1">
                <button
                  onClick={() => setFilter("all")}
                  className={`px-space-md py-1.5 rounded-lg font-label-md text-label-md transition-all flex items-center gap-1.5 ${
                    filter === "all"
                      ? "bg-primary-container text-on-primary-container"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                  type="button"
                >
                  <span>All Saved</span>
                  <span className="px-1.5 py-0.2 rounded-full bg-surface-container-lowest text-on-surface font-metric-badge text-metric-badge">
                    {totalCount}
                  </span>
                </button>

                <button
                  onClick={() => setFilter("unwatched")}
                  className={`px-space-md py-1.5 rounded-lg font-label-md text-label-md transition-all flex items-center gap-1.5 ${
                    filter === "unwatched"
                      ? "bg-primary-container text-on-primary-container"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                  type="button"
                >
                  <span>Unwatched</span>
                  <span className="px-1.5 py-0.2 rounded-full bg-surface-container-high text-on-surface-variant font-metric-badge text-metric-badge">
                    {unwatchedCount}
                  </span>
                </button>

                <button
                  onClick={() => setFilter("watched")}
                  className={`px-space-md py-1.5 rounded-lg font-label-md text-label-md transition-all flex items-center gap-1.5 ${
                    filter === "watched"
                      ? "bg-primary-container text-on-primary-container"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                  type="button"
                >
                  <span>Watched</span>
                  <span className="px-1.5 py-0.2 rounded-full bg-surface-container-high text-on-surface-variant font-metric-badge text-metric-badge">
                    {watchedCount}
                  </span>
                </button>
              </div>

              {/* Utility Bar: Sort and Layout View Switcher */}
              <div className="flex items-center gap-space-sm self-end md:self-auto">
                <div className="flex items-center gap-space-xs bg-surface-container-highest px-space-md py-1.5 rounded-xl">
                  <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                    sort
                  </span>
                  <label className="sr-only" htmlFor="sort-select">
                    Sort By
                  </label>
                  <select
                    id="sort-select"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-transparent text-on-surface font-body-sm text-body-sm focus:outline-none cursor-pointer"
                  >
                    <option
                      className="bg-surface-container-high text-on-surface"
                      value="newest"
                    >
                      Date Added (Newest)
                    </option>
                    <option
                      className="bg-surface-container-high text-on-surface"
                      value="rating"
                    >
                      Highest Rating
                    </option>
                    <option
                      className="bg-surface-container-high text-on-surface"
                      value="runtime"
                    >
                      Runtime Duration
                    </option>
                  </select>
                </div>

                <div className="flex items-center bg-surface-container-lowest p-1 rounded-xl">
                  <button
                    aria-label="Grid View"
                    onClick={() => setViewMode("grid")}
                    className={`p-1.5 rounded-lg transition-all ${
                      viewMode === "grid"
                        ? "bg-surface-container-high text-primary shadow-sm"
                        : "text-on-surface-variant hover:text-on-surface"
                    }`}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      grid_view
                    </span>
                  </button>
                  <button
                    aria-label="List View"
                    onClick={() => setViewMode("list")}
                    className={`p-1.5 rounded-lg transition-all ${
                      viewMode === "list"
                        ? "bg-surface-container-high text-primary shadow-sm"
                        : "text-on-surface-variant hover:text-on-surface"
                    }`}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      view_agenda
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Active Watchlist Cinema Grid / List */}
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg transition-all"
                : "flex flex-col gap-space-md transition-all"
            }
          >
            {displayedMovies.map((movie) => {
              const isRemoving = Boolean(removingIds[movie.id]);
              const isHighlighted = highlightedId === movie.id;
              const isWatched = movie.status === "watched";

              return (
                <article
                  key={movie.id}
                  ref={(el) => {
                    cardRefs.current[movie.id] = el;
                  }}
                  style={
                    isRemoving
                      ? { opacity: 0, transform: "scale(0.95)" }
                      : undefined
                  }
                  className={`group relative flex flex-col rounded-2xl bg-surface-container-low overflow-hidden shadow-xl hover:-translate-y-1 hover:shadow-[0_0_28px_-6px_rgba(56,189,248,0.3)] transition-all duration-300 ${
                    viewMode === "list" ? "md:flex-row" : ""
                  } ${isHighlighted ? "ring-2 ring-primary-container" : ""}`}
                >
                  <div
                    className={
                      viewMode === "grid"
                        ? "relative w-full aspect-[2/3] overflow-hidden bg-surface-container-highest"
                        : "relative w-full md:w-56 h-64 shrink-0 overflow-hidden bg-surface-container-highest"
                    }
                  >
                    <img
                      alt={movie.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={movie.poster}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/30 to-transparent" />

                    {/* Status Pill Top Left */}
                    <div className="absolute top-3 left-3 z-10">
                      {isWatched ? (
                        <span className="px-2.5 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-emerald-400 font-label-sm text-label-sm shadow flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          {movie.watchedLabel}
                        </span>
                      ) : (
                        <span className="px-2.5 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-primary font-label-sm text-label-sm shadow flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
                          Unwatched
                        </span>
                      )}
                    </div>

                    {/* Score Badge Top Right */}
                    <div className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md shadow">
                      <span
                        className="material-symbols-outlined text-[15px] text-secondary"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                      <span className="font-metric-badge text-metric-badge text-on-surface">
                        {movie.rating.toFixed(1)}
                      </span>
                    </div>

                    {/* Quick User Note */}
                    {movie.note && (
                      <div className="absolute bottom-3 left-3 right-3 z-10">
                        <div className="px-2.5 py-1 rounded-lg bg-surface-container-high/90 backdrop-blur-md text-secondary font-label-sm text-label-sm flex items-center gap-1.5 shadow-sm">
                          <span className="material-symbols-outlined text-[14px]">
                            edit_note
                          </span>
                          <span className="truncate">{movie.note}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-space-md flex flex-col flex-1 justify-between gap-space-md">
                    <div className="space-y-space-xs">
                      <div className="flex items-center justify-between text-outline font-label-sm text-label-sm">
                        <span>
                          {movie.year} • {movie.genres}
                        </span>
                        <span>{movie.durationLabel}</span>
                      </div>
                      <h2 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors line-clamp-1">
                        {movie.title}
                      </h2>
                      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                        {movie.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-space-xs pt-space-xs">
                      <button
                        onClick={() => handleToggleWatch(movie.id)}
                        className={`flex-1 py-space-sm px-space-xs rounded-xl ${
                          isWatched
                            ? "bg-surface-container-highest"
                            : "bg-surface-container-high"
                        } hover:bg-primary-container hover:text-on-primary-container text-on-surface transition-all font-label-sm text-label-sm flex items-center justify-center gap-1`}
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          {isWatched ? "replay" : "check_circle"}
                        </span>
                        <span>
                          {isWatched ? "Queue Rewatch" : "Mark Watched"}
                        </span>
                      </button>

                      <button
                        aria-label={`Remove ${movie.title} from watchlist`}
                        onClick={() => handleRemoveMovie(movie.id)}
                        className="p-space-sm rounded-xl bg-surface-container-high hover:bg-error hover:text-on-error text-on-surface-variant transition-all"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          close
                        </span>
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Curated Algorithmic Recommendations Footer Section */}
          <section className="mt-space-lg pt-space-xl border-t border-outline-variant/30 flex flex-col gap-space-lg">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
              <div>
                <div className="flex items-center gap-2 text-secondary font-label-sm text-label-sm uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[16px]">
                    recommend
                  </span>
                  <span>Based on your Sci-Fi &amp; Heavy Cinema appetite</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1">
                  Looking for more cinematic depth?
                </h2>
              </div>
              <a
                className="inline-flex items-center gap-1 text-primary hover:text-primary-container font-label-md text-label-md transition-colors"
                data-path="search-filter"
                href="#"
              >
                <span>Explore Entire Catalog</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md">
              {RECOMMENDATIONS.map((rec) => {
                const status = recStatuses[rec.id];

                return (
                  <div
                    key={rec.id}
                    className="group rounded-2xl bg-surface-container-low p-space-sm flex flex-col justify-between shadow-md hover:bg-surface-container transition-all"
                  >
                    <div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden bg-surface-container-highest">
                      <img
                        alt={rec.displayTitle}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                        src={rec.poster}
                      />
                      <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-lowest/90 text-secondary font-metric-badge text-metric-badge">
                        <span
                          className="material-symbols-outlined text-[13px]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                        {rec.rating}
                      </div>
                      <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-primary-container text-on-primary-container font-metric-badge text-metric-badge">
                        {rec.match}
                      </div>
                    </div>

                    <div className="py-space-sm space-y-1">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface truncate">
                        {rec.displayTitle}
                      </h3>
                      <p className="font-body-sm text-body-sm text-outline">
                        {rec.genreLabel}
                      </p>
                    </div>

                    <button
                      onClick={() => handleQuickAdd(rec.id)}
                      className={`w-full py-2 px-space-xs rounded-xl bg-surface-container-high hover:bg-primary-container hover:text-on-primary-container font-label-sm text-label-sm transition-all flex items-center justify-center gap-1 shadow-sm ${
                        status
                          ? "bg-surface-variant text-emerald-400"
                          : "text-on-surface"
                      }`}
                      type="button"
                    >
                      {status === "added" ? (
                        <>
                          <span className="material-symbols-outlined text-[16px] text-emerald-400">
                            check
                          </span>
                          <span>Added!</span>
                        </>
                      ) : status === "vaulted" ? (
                        <>
                          <span className="material-symbols-outlined text-[16px]">
                            bookmark_add
                          </span>
                          <span>Added to Vault</span>
                        </>
                      ) : (
                        <>
                          <span className="material-symbols-outlined text-[16px]">
                            bookmark_add
                          </span>
                          <span>Add to Watchlist</span>
                        </>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
