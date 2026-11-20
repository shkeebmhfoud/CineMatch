import React, { useEffect, useRef, useState } from "react";

const CAST_AND_CREW = [
  {
    id: "matthew-mcconaughey",
    name: "Matthew McConaughey",
    role: "Joseph Cooper",
    credit: "Lead Actor",
    roleClass: "text-primary-container",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBKQQLkemo2k3GTtiqsHaVTmNhWtmFfTck7ocKTuR02z8XDqaPSImRF3xb6rdwTuhtJk-za2No-5FxBk0NMTu7Bd3HxqchYPBqCGtVZmLlxK94aL4135czqNd3mCV9oXL5DRq4uzG4wjwmF6BvqbWu6_FQNMKX6ErTsXHkSYYvu5E-ZL3BCgCZjQ9bZ-Jnbemn33JUVKtlCBQiB064YmxoXUI7PtoZCMGtT3Rle6QTj",
    alt: "Intense studio portrait of actor Matthew McConaughey looking direct to camera in warm cinematic lighting with subtle shadow and deep brown backdrop",
  },
  {
    id: "anne-hathaway",
    name: "Anne Hathaway",
    role: "Dr. Amelia Brand",
    credit: "NASA Scientist",
    roleClass: "text-primary-container",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCEG4gt6NhYrllMMkEYhJRvvGELMjoYxd9FAN9X-t8M8hMp13Y3zYByf2CxmMSEUEyprQ_ZBj5OvUYuD-EyLMzBcArc3OuQ9mEAf7WuGjXD0GfkWNtcD5E8GrrdIr23LTZ-OarxQYE8Xy0PB3GU08lU5hSaHTuUwDw501VxNUjXWS9sFVivU0u2zOnTxAMtwow6uO6a2d_amFWVBympCCRb7467Hf6QPOHTauqao64A",
    alt: "Close up portrait of Anne Hathaway with short dark hair in astronaut undersuit looking solemn under cold sci fi laboratory lighting",
  },
  {
    id: "jessica-chastain",
    name: "Jessica Chastain",
    role: "Murphy Cooper (Adult)",
    credit: "Lead Physicist",
    roleClass: "text-primary-container",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDq60gmw3CtADZEtPlafq5VFE1sl5puA6f79Pj3VmKvHe-vPwYXat3aQfAhKLSZxraOrmjf_GSLcXiiM3WCbeS9Pl60WGSIFPWxoFBl-PwJGblA7E1nM8zu3b4bw_tKnzoWpo54vy_t4x-3gBBY9KYvPtQEFV845ckBW80dwDkW7GZeYZP4XCbEqPcrJD5CT0Di214vNC__JnIER3KwwnbGneNKXTraCoFaaZ-4s6NE",
    alt: "Portrait photo of actress Jessica Chastain with auburn red hair looking thoughtful in dimly lit archival library setting",
  },
  {
    id: "michael-caine",
    name: "Michael Caine",
    role: "Prof. John Brand",
    credit: "NASA Director",
    roleClass: "text-primary-container",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBcBnhmR_nhjiEzwUzaYIMAZxE-20xzCZ7JY6xwhrcMd5fcLHm3BbeqgsXWVCm4S0DqQe1oz9lIW0EeR6lRJ5vgxeLIncnawxS0QLFNoo_cMqcVAO8gXPq3ZpuZC4CwqtiXrJs0zAlfDdI0cbnJbV15dxDhmWMGCLVcogJfBm0hVJpF6guIzLcHfNIXcqFpT97mJQuTEe9dgPGS_zgYL9RORKe53V9Bv458nKXVb4Jh",
    alt: "Distinguished portrait of actor Michael Caine wearing spectacles in tweed professor coat against chalkboard equations",
  },
  {
    id: "matt-damon",
    name: "Matt Damon",
    role: "Dr. Mann",
    credit: "Lazarus Pilot",
    roleClass: "text-primary-container",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDSKap8VpyI76j3OWbX2CUPBY0pDx-ObnTrglXEc1IOk7-3DRSiXTYt5WbVv9tOjWoMVmTfJ9KjoAtk9E9zaoRbYPH4Yz5fzL87xqYQ_ykA3vVpeFOdAaYDxbDPdy7UtPupUJtAi5trMBQRHLjju1KRIVhaqr-hJvsNUshRb1zVlJyoZIF-IiUfyVMQWX0nADg5VBJlRwQO-k9vRDjvkW6BxnaWqiGortfeyNC1h1qg",
    alt: "Portrait of Matt Damon with frost on brow looking weary and desperate inside an ice planetary habitat pod",
  },
  {
    id: "timothee-chalamet",
    name: "Timothée Chalamet",
    role: "Young Tom",
    credit: "Cooper's Son",
    roleClass: "text-primary-container",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBZkS7CbHJdJFPIL_-ba_WXiIs-7_Enq8snyzndsK_ulRAdnXnVJosqnHTV_38Pbs2IYRCQp0ai-hw27wO55RvqcR_zOaCqBkNWpr4sDPHItosSYS7XY-cjJZGItqIInKbVyVBzigzGRX19VpW44SEY_tBgN2ZSPJZroZ1G6jFRYLanzyk4Zs3jXBkLOr95cB0-rbI2mJ-HOe5GAJW5X8UXBWYZ5vu1iEa-np8_k0fr",
    alt: "Young Timothée Chalamet portrait wearing dusty farmhouse jacket in midwestern rural dusk sunset",
  },
  {
    id: "kip-thorne",
    name: "Kip Thorne",
    role: "Executive Producer",
    credit: "Nobel Physicist",
    roleClass: "text-secondary",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAa8ANDc_J3RmLx3wqiq6oNv7o5T3_hP8h_a70fWkttlwKq3y2q8XrtEb5DVYI4CUikHm9Og0qHKLt1lRF0f3QZn0_rYozbmE1qDANAdv-zeOOZG-dDg-IEt1Y8p1umX2Sp6wRWwXVYKIOW1aWA-rFZaXdFLt2jon81ieFCgA0Oo9BunRwQWfjJHiqw_yxXhJj2KJ22gRFGrc297P7WqNurZIeoo4-WdwsBbkMu29pr",
    alt: "Portrait of Nobel laureate physicist Kip Thorne smiling with astrophysicist equations and gravitational wave diagram in background",
  },
];

const BTS_STILLS = [
  {
    id: "imax-rig",
    label: "Director with IMAX Rig",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAUoatdwxtBwDdRXOJNKxqX2lmRw7r9LDjEw3lZinxtiIYEQYN6mR8O1z4MCQuM6NH6NXm1PSUIzSzq0B89hMQG-act5yCCcEy59rqt9Ls10vjjxazDij23r7Ordh6rUTwXu3QR4J-Tnj8F_sVYLmqtvVbVUFEaPesiM-BtxQdEXs3s-5xwVcew7iOIQv0AP2EFFl8-zKzn1UXSE8usJDdR4UqknKK0zZBKhrYHCAtR",
    alt: "Christopher Nolan directing on water planet set with massive IMAX film camera on shoulder rig, cinematic candid photo",
  },
  {
    id: "endurance-rig",
    label: "Endurance Practical Rig",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBqdCPUESh2FTWh72O3wHKi4kixURMEdReJwkdWXdzjsnuS59wBLFklf3tsSnGiefDoeZ1be56mZOEvBKGhSqW-SZB2I1urGkF1FRHawyG1edP-vw96fo0ZbSulOHuFHcUqSR-i2YK-dVwb2KfH3EBIkc-of6i_gskj3l-EEdxi86ugns9cgZ5ENRGVdngukTOEbNSSqbK_pp5xWknkj6Ae7fJ9yeLzOf6KiCSMd5x6",
    alt: "Practical model miniature of the Endurance space station rotating against black velvet backdrops in Nolan studio workshop",
  },
  {
    id: "tars-model",
    label: "TARS Functional Model",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC41KwIhayuffNOu31cIF6HhLAdyNzTbNEiInNGxo655hTGs2pGDxXr2QZjl5EDE-9_GSWzGvbdp57htZlv3pm7dtfptePBuxfVJGkyKjZK-LhRDFfhroHxu16XlmP0k8-cRaryEDKQUy1AwFhUQ6qjA_lf5l5iyk_VZJcNvRGrLeqp74PJ5-s4asq1vEbZo11-UwlSIuRxxsm753gHcM4Y1uAxFhyuAW4A7eNPgRTM",
    alt: "The robotic companion TARS monolithic stainless steel structure standing on dusty gravel cornfield in Calgary sunset",
  },
  {
    id: "organ-score",
    label: "Organ Score Sessions",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAulgTPDEfqhLd3ZjhjZMLFgegteIdghTr1JrjYuZKtec0e4MSmVAKa_sd7H3b1DYRuglsb0K2wte_pZbZIeSeN7dMCX1Il7gUnLB3SbCoOUoGub8A3ZNJzuoGTH7UpqfdXSKhhxXlB9rSG-4Miu7yWq6zfBqAvyRtSF-FF8Zi2BhlPfo4y4YUoOmxP_KjOWiGYxgtyNY5oSyNGuOMA8peAgiq_t6_eK1HfbolqY1Ye",
    alt: "Composer Hans Zimmer playing historic 19th century church pipe organ in London temple church recording sessions for Interstellar theme",
  },
];

const RECOMMENDATIONS = [
  {
    id: "arrival",
    title: "Arrival",
    director: "Dir. Denis Villeneuve",
    match: "96% Match",
    rating: "8.0",
    year: "2016",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCOJ5apft9IHGXwYfS5d3xtwITPFQdlVNrbsmAC1q49JqzYBEglGySGISvqaON3Q2ybdwxXTQhQ2mDGCAyZOgG_sbmug91l_ksp6ko8m7daVxn4C_-X1kHUgBTKWkR0mO97U88Cys85IlIIyoUEBJcYUknSd82A3kmDhn1LP1qx10W_SX6YojI-_qmfhYVdidW0EqfhSiZas_hZBQEXhhDk4a2HwEGHw3qaeqiTHw4t",
    alt: "Movie poster for Arrival featuring enormous monolithic black pebble spacecraft hovering silently over misty Montana green valley landscape",
  },
  {
    id: "contact",
    title: "Contact",
    director: "Dir. Robert Zemeckis",
    match: "91% Match",
    rating: "7.5",
    year: "1997",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBpKXh-s1bhhQ1R-VS-zg4rrl61_IDVZNw_UwT4Ta7H_NYekoUALNRM7zhqRuee2RuiRobWLYHC3sG88ZHxwWen_BrC9fGliMoPeTW6Zsm51tI4X52L3nt4nnrf1mUeApIetK_BZF4Vm53fVmMa5j0GJ4sqXyYBFJx-PdWRRKBu_dBC1PHBgtPbN6brgnCdjq3U6iKjoRM3jdaSAKiMm20iCfzDJuqmTxPrW3HuBCj9",
    alt: "Movie poster for Contact with Jodie Foster leaning against massive radio telescope dish in New Mexico under brilliant starry night galaxy",
  },
  {
    id: "2001-space-odyssey",
    title: "2001: A Space Odyssey",
    director: "Dir. Stanley Kubrick",
    match: "95% Match",
    rating: "8.3",
    year: "1968",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB6W3oNXb1EtfzoJ0iC7sJFT0u6_p7d7qamN8Y4lD4iZa-VzHEQ-K3iOH_sIjSdJMPXSh0nWkHabhgIoUJowzS7xXVIJIbrtvt26Gg6IAtCV7sp5GuTqwifEYoHVkdlLV7QjTP568zRErp18oNftVv-sclkd-Xwy-mWHzPQt8Ydmj9NKpnbDViS5EzOXXKYkXyWct900Px1X3_HVXpFq8DUn-p7mrMYDjGKF1Awt3GJ",
    alt: "Poster for 2001 A Space Odyssey showcasing the circular spinning centrifugal chamber of Discovery One with red glowing HAL 9000 optic camera eye",
  },
  {
    id: "gravity",
    title: "Gravity",
    director: "Dir. Alfonso Cuarón",
    match: "89% Match",
    rating: "7.7",
    year: "2013",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCcg5gf1WbebxQzV3cRYqPZTO4d7hnVK74wQo1hIF-1dikFwKbha2rfgg8SAag6h6qjmkpCJwVJGgnaIAlJQs2Mn7iGFrdIvL63lDAY5H4ENJLjlVlp20eq4CP_Qdv_BfsyGWN9E7FbjbYYiW8tP3_rXA9pWdG8bP7hH6SscKaOmQzPqZobHAbpekrv-nEF0hzdf9CaGeYfsl_5fmAq5xoM370FiaWvwpfnnV4LfVwV",
    alt: "Movie poster for Gravity featuring an astronaut spinning detached into deep space orbit high above radiant blue Earth curvature",
  },
  {
    id: "the-martian",
    title: "The Martian",
    director: "Dir. Ridley Scott",
    match: "88% Match",
    rating: "8.0",
    year: "2015",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAR8ya5azsi_m3xDY2uY9_qOWA2ACJQ9G2x1ZAtNMys_YolDpA276HMG4rMyLRXqwSZYjUq2qjdGog33KDw1FpnZeEeaYodWlvzcNG3IXIVPX3bG4PI8x5yK92VSpQMQniDA_BK3p6hykV_fenISmZaoY33-ImfSnLr9GXh6sNSPKYBJWLENdGTTFggS_EnHzWrXNsarxLUb7fz5q0iYjoOjB1_-I-L0gQpS9PdSRHV",
    alt: "Movie poster for The Martian with astronaut face visor reflecting rust red Martian canyons and Ares rover habitat under harsh sunlight",
  },
];

const CHAPTER_CUTS = [
  {
    id: "theatrical",
    label: "Main Theatrical Trailer",
    title: "Interstellar — Official Teaser & 4K IMAX Trailer",
    bg: "https://lh3.googleusercontent.com/aida-public/AB6AXuAloD3CIEeMsUOM7xhWCUBG1fRDaF9IQ3P9WdMgO8RC1PMVdrL1YH_dDJUJ67e91SyGaTuH40d1JYUNymG415gyQZqvx-YV_FoLVwJvYZK_WOJ3T6C-3L3kauzPRZ_jqz6DEoF1646cOh79aHnXMbyGmoPnrj2yajMZQBd43RZmEhKdnqBIUIgXmazIL4qBSxko9q9fVmVzvieasYQIZ8o6Tx2nsfFXAh3vLrvQwO_3",
    duration: 169,
    initialSeconds: 138,
  },
  {
    id: "teaser",
    label: "Teaser Trailer",
    title: "Interstellar — Teaser Announcement (First Look)",
    bg: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNqVQn8RAJNLVi3__wFwz0MIIaAZS-8_v3a5LwblzxJy120naXB6u6nevs7M9O8hhOCV90xnAQYIgVpwFDK1b9rvuwwapTRgiVl6e8EhX2sy1sPs4KiuzTG__56CHdWU8G3noGW1EriZYUa4itc9wxw_0uanWQ-CmmSpjeilonqT56jXLsP_55ledFgNUaIAkfPpq-rVI3LZcIUqLgJiZCqeQ1NOxHHZfo-6vLWwfl",
    duration: 112,
    initialSeconds: 34,
  },
  {
    id: "imax-preview",
    label: "IMAX Special Preview",
    title: "Interstellar — IMAX 70mm Special Preview Reel",
    bg: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUoatdwxtBwDdRXOJNKxqX2lmRw7r9LDjEw3lZinxtiIYEQYN6mR8O1z4MCQuM6NH6NXm1PSUIzSzq0B89hMQG-act5yCCcEy59rqt9Ls10vjjxazDij23r7Ordh6rUTwXu3QR4J-Tnj8F_sVYLmqtvVbVUFEaPesiM-BtxQdEXs3s-5xwVcew7iOIQv0AP2EFFl8-zKzn1UXSE8usJDdR4UqknKK0zZBKhrYHCAtR",
    duration: 215,
    initialSeconds: 65,
  },
  {
    id: "gargantua-science",
    label: "The Science of Gargantua",
    title: "Interstellar — Featurette: The Science of Gargantua",
    bg: "https://lh3.googleusercontent.com/aida-public/AB6AXuAa8ANDc_J3RmLx3wqiq6oNv7o5T3_hP8h_a70fWkttlwKq3y2q8XrtEb5DVYI4CUikHm9Og0qHKLt1lRF0f3QZn0_rYozbmE1qDANAdv-zeOOZG-dDg-IEt1Y8p1umX2Sp6wRWwXVYKIOW1aWA-rFZaXdFLt2jon81ieFCgA0Oo9BunRwQWfjJHiqw_yxXhJj2KJ22gRFGrc297P7WqNurZIeoo4-WdwsBbkMu29pr",
    duration: 340,
    initialSeconds: 170,
  },
];

function formatTime(secs) {
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export default function MovieDetails() {
  const [inWatchlist, setInWatchlist] = useState(true);
  const [userRating, setUserRating] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeChapterId, setActiveChapterId] = useState(CHAPTER_CUTS[0].id);
  const [modalTitle, setModalTitle] = useState(CHAPTER_CUTS[0].title);
  const [videoFrameBg, setVideoFrameBg] = useState(CHAPTER_CUTS[0].bg);
  const [totalSeconds, setTotalSeconds] = useState(CHAPTER_CUTS[0].duration);
  const [currentSeconds, setCurrentSeconds] = useState(
    CHAPTER_CUTS[0].initialSeconds
  );
  const [isPlaying, setIsPlaying] = useState(true);

  const [volume, setVolume] = useState(85);
  const [prevVolume, setPrevVolume] = useState(85);
  const [quality, setQuality] = useState("4K 60FPS");
  const [isTheater, setIsTheater] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const castCarouselRef = useRef(null);
  const progressContainerRef = useRef(null);
  const playerViewportRef = useRef(null);

  const openTrailerModal = () => {
    setIsModalOpen(true);
    setIsPlaying(true);
    document.body.style.overflow = "hidden";
  };

  const closeTrailerModal = () => {
    setIsModalOpen(false);
    setIsPlaying(false);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    if (!isModalOpen || !isPlaying) return undefined;
    const timer = setInterval(() => {
      setCurrentSeconds((prev) => (prev < totalSeconds ? prev + 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [isModalOpen, isPlaying, totalSeconds]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isModalOpen) {
        closeTrailerModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const handleScrollCast = (offset) => {
    castCarouselRef.current?.scrollBy({ left: offset, behavior: "smooth" });
  };

  const handleScrubClick = (e) => {
    if (!progressContainerRef.current) return;
    const rect = progressContainerRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    setCurrentSeconds(Math.floor(ratio * totalSeconds));
  };

  const handleVolumeChange = (e) => {
    setVolume(parseInt(e.target.value, 10));
  };

  const handleVolumeToggle = () => {
    if (volume > 0) {
      setPrevVolume(volume);
      setVolume(0);
    } else {
      setVolume(prevVolume || 80);
    }
  };

  const handleToggleFullscreen = () => {
    const viewport = playerViewportRef.current;
    if (!viewport) return;
    if (!document.fullscreenElement) {
      viewport.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  };

  const handleSelectChapter = (chapter) => {
    setActiveChapterId(chapter.id);
    setModalTitle(chapter.title);
    setVideoFrameBg(chapter.bg);
    setTotalSeconds(chapter.duration || 160);
    setCurrentSeconds(0);
    setIsPlaying(true);
  };

  const progressPct = Math.min(
    100,
    Math.max(0, (currentSeconds / totalSeconds) * 100)
  );

  const volumeIcon =
    volume === 0 ? "volume_off" : volume < 50 ? "volume_down" : "volume_up";

  return (
    <main className="w-full pt-20 bg-surface min-h-[calc(100vh-20rem)]">
      <div className="flex flex-col w-full">
        {/* Immersive Backdrop & Hero Header Section */}
        <section className="relative w-full overflow-hidden bg-surface-container-lowest -mt-20 pt-20 pb-16">
          {/* Ambient Space Glow & Deep Backdrop Layer */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="w-full h-full bg-cover bg-center opacity-30 transform scale-105 filter blur-[1px]"
              data-alt="Deep space cosmic panorama with radiant accretion disk around Gargantua black hole, golden amber gravitational lensing, twinkling distant stars, dust nebulas, film grain cinematic shot from 70mm IMAX IMAX camera in deep navy, black, and electric cyan tones"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBNqVQn8RAJNLVi3__wFwz0MIIaAZS-8_v3a5LwblzxJy120naXB6u6nevs7M9O8hhOCV90xnAQYIgVpwFDK1b9rvuwwapTRgiVl6e8EhX2sy1sPs4KiuzTG__56CHdWU8G3noGW1EriZYUa4itc9wxw_0uanWQ-CmmSpjeilonqT56jXLsP_55ledFgNUaIAkfPpq-rVI3LZcIUqLgJiZCqeQ1NOxHHZfo-6vLWwfl')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest/60 to-transparent"></div>
            <div className="absolute -top-32 left-1/4 w-96 h-96 rounded-full bg-primary-container/10 filter blur-[100px]"></div>
            <div className="absolute top-1/2 right-12 w-80 h-80 rounded-full bg-secondary-container/10 filter blur-[90px]"></div>
          </div>
          <div className="relative w-full px-margin pt-6 max-w-7xl mx-auto flex flex-col gap-6">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md">
              <a
                className="hover:text-primary transition-colors flex items-center gap-1"
                data-path="home"
                href="#"
              >
                <span className="material-symbols-outlined text-[16px]">
                  home
                </span>
                Home
              </a>
              <span className="text-outline-variant">/</span>
              <a
                className="hover:text-primary transition-colors"
                data-path="search-filter"
                href="#"
              >
                Sci-Fi
              </a>
              <span className="text-outline-variant">/</span>
              <span className="text-on-surface font-semibold">
                Interstellar (2014)
              </span>
            </nav>
            {/* Two-Column Hero Showcase Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
              {/* Left Column: High-Fidelity Poster (2:3 Aspect Ratio) */}
              <div className="lg:col-span-4 flex flex-col items-center sm:items-start group">
                <div className="relative w-full max-w-[340px] aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl bg-surface-container-high transition-transform duration-500 group-hover:scale-[1.02]">
                  <img
                    alt="Official film poster of Interstellar showing an astronaut in space suit standing on an alien icy water planet surface under giant dark purple oceanic waves, starry cosmos overhead, glowing visor helmet, hyper-realistic cinematic photorealism"
                    className="w-full h-full object-cover"
                    data-alt="Official film poster of Interstellar showing an astronaut in space suit standing on an alien icy water planet surface under giant dark purple oceanic waves, starry cosmos overhead, glowing visor helmet, hyper-realistic cinematic photorealism"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzt6nIqoJeKsAnIxx9F6Dvrat50ORhlHFeNpu71MpeDV7SnhhV_jlnJznVuvO-leVgqQqzAo9HzkV5dGEpN5eMz1ce8HJygiOg8qrMkQKNBiLZUOgfd7_ldRuYjIuCJMB0qVfYurEeG6Zlbf-N6VjDsdUOiM_TwS7pfeDiUHQ15gWQin_3yJ3-ZtksenyKy9ascPfRZdmvkjle_q3xhp2xvSn5t2gqMzJN2y46KNBS"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-black/30"></div>
                  {/* Top Floating IMAX Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest/80 backdrop-blur-md shadow-md">
                    <span className="w-2 h-2 rounded-full bg-primary-container animate-ping"></span>
                    <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-bold">
                      IMAX 70mm Special
                    </span>
                  </div>
                  {/* Center Quick Play Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      aria-label="Play Trailer"
                      className="trailer-modal-trigger w-14 h-14 rounded-full bg-primary-container/90 text-on-primary-container flex items-center justify-center shadow-[0_0_24px_rgba(56,189,248,0.7)] hover:scale-110 hover:bg-primary transition-all"
                      type="button"
                      onClick={openTrailerModal}
                    >
                      <span
                        className="material-symbols-outlined text-[30px] pl-0.5"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        play_arrow
                      </span>
                    </button>
                  </div>
                  {/* Bottom Poster Quick Action */}
                  <div className="absolute bottom-4 inset-x-4 flex items-center justify-between p-3 rounded-xl bg-surface-container-high/80 backdrop-blur-md">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        Original Audio
                      </span>
                      <span className="font-label-md text-label-md text-on-surface">
                        Dolby Atmos • 7.1 HD
                      </span>
                    </div>
                    <button
                      aria-label="Audio Specs"
                      className="p-2 rounded-lg bg-surface-container text-primary hover:bg-primary-container hover:text-on-primary-container transition-all"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        volume_up
                      </span>
                    </button>
                  </div>
                </div>
                {/* Quick Streaming Availability Bar */}
                <div className="w-full max-w-[340px] mt-4 p-3 rounded-xl bg-surface-container-low flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[20px]">
                      verified
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Available on{" "}
                      <strong className="text-on-surface">
                        Prime Video &amp; Paramount+
                      </strong>
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-[18px] text-outline">
                    open_in_new
                  </span>
                </div>
              </div>
              {/* Right Column: Rich Metadata, Title, Ratings & Actions */}
              <div className="lg:col-span-8 flex flex-col gap-6">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-2.5 py-0.5 rounded-md bg-primary-container/20 text-primary font-label-sm text-label-sm font-bold uppercase tracking-wider">
                      Sci-Fi Epic Masterpiece
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-secondary/15 text-secondary font-label-sm text-label-sm font-bold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">
                        military_tech
                      </span>{" "}
                      Academy Award Winner
                    </span>
                  </div>
                  <h1 className="font-display-hero text-display-hero tracking-tight text-on-surface leading-none pt-1">
                    Interstellar
                  </h1>
                  <p className="font-headline-sm text-headline-sm italic text-primary-fixed-dim/90 font-normal">
                    “Mankind was born on Earth. It was never meant to die here.”
                  </p>
                </div>
                {/* Metadata Badges Row */}
                <div className="flex flex-wrap items-center gap-3 text-on-surface-variant font-label-md text-label-md">
                  <span className="px-3 py-1 rounded-lg bg-surface-container-high text-on-surface font-bold">
                    2014
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-surface-container-high text-outline">
                    PG-13
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px]">
                      schedule
                    </span>{" "}
                    2h 49m
                  </span>
                  <span className="text-outline-variant">•</span>
                  <span className="px-2.5 py-0.5 rounded bg-surface-container-high text-primary-container font-semibold">
                    Ultra HD 4K
                  </span>
                  <span className="text-outline-variant">•</span>
                  <span className="px-2.5 py-0.5 rounded bg-surface-container-high text-secondary-fixed font-semibold">
                    Dolby Vision
                  </span>
                </div>
                {/* Genre Tags Pill Row */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <button
                    className="px-3.5 py-1.5 rounded-full bg-primary-container/15 text-primary hover:bg-primary-container hover:text-on-primary-container font-label-md text-label-md transition-all"
                    type="button"
                  >
                    Sci-Fi
                  </button>
                  <button
                    className="px-3.5 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest font-label-md text-label-md transition-all"
                    type="button"
                  >
                    Adventure
                  </button>
                  <button
                    className="px-3.5 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest font-label-md text-label-md transition-all"
                    type="button"
                  >
                    Drama
                  </button>
                  <button
                    className="px-3.5 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest font-label-md text-label-md transition-all"
                    type="button"
                  >
                    Mystery
                  </button>
                  <button
                    className="px-3.5 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest font-label-md text-label-md transition-all"
                    type="button"
                  >
                    Deep Space Exploration
                  </button>
                </div>
                {/* Circular Meters & Score Matrix Section */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-surface-container/70 backdrop-blur-md shadow-lg">
                  {/* Meter 1: AI Match Score */}
                  <div className="flex items-center gap-3.5">
                    <div className="relative w-14 h-14 flex items-center justify-center shrink-0">
                      <svg
                        className="w-14 h-14 transform -rotate-90"
                        viewBox="0 0 48 48"
                      >
                        <circle
                          className="text-surface-variant"
                          cx="24"
                          cy="24"
                          fill="none"
                          r="20"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <circle
                          className="text-primary-container shadow-[0_0_12px_rgba(56,189,248,0.8)]"
                          cx="24"
                          cy="24"
                          fill="none"
                          r="20"
                          stroke="currentColor"
                          strokeDasharray="125.6"
                          strokeDashoffset="10.05"
                          strokeLinecap="round"
                          strokeWidth="4"
                        ></circle>
                      </svg>
                      <span className="absolute font-headline-sm text-headline-sm font-bold text-on-surface">
                        92%
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md text-primary-container font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">
                          psychology
                        </span>{" "}
                        CineMatch AI
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        98% Match for your Sci-Fi taste
                      </span>
                    </div>
                  </div>
                  {/* Meter 2: IMDb Rating */}
                  <div className="flex items-center gap-3.5 sm:border-l sm:border-outline-variant/30 sm:pl-4">
                    <div className="relative w-14 h-14 flex items-center justify-center shrink-0">
                      <svg
                        className="w-14 h-14 transform -rotate-90"
                        viewBox="0 0 48 48"
                      >
                        <circle
                          className="text-surface-variant"
                          cx="24"
                          cy="24"
                          fill="none"
                          r="20"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <circle
                          className="text-secondary"
                          cx="24"
                          cy="24"
                          fill="none"
                          r="20"
                          stroke="currentColor"
                          strokeDasharray="125.6"
                          strokeDashoffset="16.3"
                          strokeLinecap="round"
                          strokeWidth="4"
                        ></circle>
                      </svg>
                      <span className="absolute font-headline-sm text-headline-sm font-bold text-secondary">
                        8.7
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md text-on-surface font-bold flex items-center gap-1">
                        <span
                          className="material-symbols-outlined text-secondary text-[16px]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>{" "}
                        IMDb Top 25
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        1,940,300 Cinephiles
                      </span>
                    </div>
                  </div>
                  {/* Meter 3: Critics Consensus */}
                  <div className="flex items-center gap-3.5 sm:border-l sm:border-outline-variant/30 sm:pl-4">
                    <div className="relative w-14 h-14 flex items-center justify-center shrink-0">
                      <svg
                        className="w-14 h-14 transform -rotate-90"
                        viewBox="0 0 48 48"
                      >
                        <circle
                          className="text-surface-variant"
                          cx="24"
                          cy="24"
                          fill="none"
                          r="20"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <circle
                          className="text-primary"
                          cx="24"
                          cy="24"
                          fill="none"
                          r="20"
                          stroke="currentColor"
                          strokeDasharray="125.6"
                          strokeDashoffset="17.5"
                          strokeLinecap="round"
                          strokeWidth="4"
                        ></circle>
                      </svg>
                      <span className="absolute font-headline-sm text-headline-sm font-bold text-on-surface">
                        86%
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md text-on-surface font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-primary text-[16px]">
                          thumb_up
                        </span>{" "}
                        Critic Score
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        374 Verified Reviews
                      </span>
                    </div>
                  </div>
                </div>
                {/* Interactive Action CTA Bar */}
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  {/* Primary Trailer CTA with ambient glow */}
                  <button
                    className="trailer-modal-trigger flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-primary-container text-on-primary-container font-headline-sm text-headline-sm font-bold shadow-[0_0_24px_rgba(56,189,248,0.35)] hover:shadow-[0_0_32px_rgba(56,189,248,0.6)] hover:bg-primary transition-all cursor-pointer"
                    type="button"
                    onClick={openTrailerModal}
                  >
                    <span
                      className="material-symbols-outlined text-[24px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      play_arrow
                    </span>
                    <span>Watch Official Trailer (4K)</span>
                  </button>
                  {/* Toggle Watchlist State */}
                  <button
                    className={
                      inWatchlist
                        ? "flex items-center gap-2 px-5 py-3.5 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-primary font-label-md text-label-md transition-all shadow-md"
                        : "flex items-center gap-2 px-5 py-3.5 rounded-xl bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant font-label-md text-label-md transition-all shadow-md"
                    }
                    id="watchlist-toggle"
                    type="button"
                    onClick={() => setInWatchlist((prev) => !prev)}
                  >
                    <span
                      className="material-symbols-outlined text-[20px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {inWatchlist ? "check" : "bookmark_add"}
                    </span>
                    <span id="watchlist-label">
                      {inWatchlist ? "In Watchlist" : "Add to Watchlist"}
                    </span>
                  </button>
                  {/* Star Rating Trigger Interactive */}
                  <div className="relative group/rating">
                    <button
                      className="flex items-center gap-2 px-4 py-3.5 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-all shadow-md"
                      id="rate-modal-btn"
                      type="button"
                    >
                      <span
                        className="material-symbols-outlined text-[20px] text-secondary"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                      <span
                        className={
                          userRating ? "text-secondary font-bold" : undefined
                        }
                        id="user-rating-val"
                      >
                        {userRating ? `Rated ${userRating}/5 ★` : "Rate Film"}
                      </span>
                    </button>
                    {/* Quick 5-Star Dropdown Overlay */}
                    <div className="absolute left-0 top-full mt-2 hidden group-hover/rating:flex items-center gap-1 p-2 rounded-xl bg-surface-container-highest/95 backdrop-blur-xl shadow-2xl z-20">
                      {[1, 2, 3, 4, 5].map((score) => (
                        <button
                          key={score}
                          className="p-1 hover:scale-125 transition-transform text-secondary"
                          type="button"
                          onClick={() => setUserRating(score)}
                        >
                          <span
                            className="material-symbols-outlined text-[22px]"
                            style={
                              score === 5
                                ? { fontVariationSettings: "'FILL' 1" }
                                : undefined
                            }
                          >
                            star
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                  {/* Share & Download Quick Actions */}
                  <div className="flex items-center gap-2">
                    <button
                      aria-label="Share Movie"
                      className="p-3.5 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface transition-all shadow-md"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        share
                      </span>
                    </button>
                    <button
                      aria-label="Download for Offline Viewing"
                      className="p-3.5 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface transition-all shadow-md"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        download
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Main Narrative & Key Technical Specifications Grid */}
        <section className="w-full px-margin py-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Storyline Narrative Focus */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-6 rounded-full bg-primary-container"></span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                  The Storyline
                </h2>
              </div>
              <div className="p-6 sm:p-8 rounded-2xl bg-surface-container-low shadow-md space-y-4">
                <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                  In a near future where Earth&apos;s atmosphere is choked by
                  apocalyptic dust storms and widespread blight has collapsed
                  global food agriculture, former NASA pilot turned desperate
                  farmer{" "}
                  <strong className="text-primary-container font-semibold">
                    Joseph Cooper
                  </strong>{" "}
                  stumbles upon a cryptic gravitational anomaly inside his
                  daughter Murphy&apos;s bedroom.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Led to a covert underground research outpost spearheaded by
                  Professor Brand, Cooper is recruited for mankind&apos;s
                  ultimate gambit: piloting the spacecraft{" "}
                  <em className="text-on-surface">Endurance</em> across a newly
                  opened wormhole near Saturn. Leaving his heartbroken children
                  behind, Cooper must chart three candidate worlds orbiting{" "}
                  <span className="text-secondary font-medium">Gargantua</span>,
                  a supermassive black hole—risking extreme gravitational time
                  dilation where every passing hour on the surface costs seven
                  long years of Earth time.
                </p>
                <div className="pt-2 flex flex-wrap gap-4 text-outline font-label-sm text-label-sm uppercase tracking-widest">
                  <span>Themes: Relativistic Physics</span>
                  <span>•</span>
                  <span>Parental Devotion</span>
                  <span>•</span>
                  <span>Extinction Survival</span>
                </div>
              </div>
            </div>
            {/* Key Specs Bento Box */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-6 rounded-full bg-secondary"></span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                  Film Dossier
                </h2>
              </div>
              <div className="p-6 rounded-2xl bg-surface-container space-y-4 shadow-lg">
                <div className="flex items-start justify-between pb-3">
                  <span className="font-label-md text-label-md text-on-surface-variant">
                    Director
                  </span>
                  <span className="font-label-md text-label-md text-on-surface text-right font-bold">
                    Christopher Nolan
                  </span>
                </div>
                <div className="flex items-start justify-between py-3 bg-surface-container-high/40 px-3 rounded-lg">
                  <span className="font-label-md text-label-md text-on-surface-variant">
                    Writers
                  </span>
                  <span className="font-label-md text-label-md text-on-surface text-right font-medium">
                    Jonathan Nolan
                    <br />
                    Christopher Nolan
                  </span>
                </div>
                <div className="flex items-start justify-between py-3">
                  <span className="font-label-md text-label-md text-on-surface-variant">
                    Original Score
                  </span>
                  <span className="font-label-md text-label-md text-primary font-semibold text-right">
                    Hans Zimmer (Organ Score)
                  </span>
                </div>
                <div className="flex items-start justify-between py-3 bg-surface-container-high/40 px-3 rounded-lg">
                  <span className="font-label-md text-label-md text-on-surface-variant">
                    Box Office Global
                  </span>
                  <span className="font-label-md text-label-md text-secondary font-bold text-right">
                    $773.8 Million
                  </span>
                </div>
                <div className="flex items-start justify-between py-3">
                  <span className="font-label-md text-label-md text-on-surface-variant">
                    Production Budget
                  </span>
                  <span className="font-label-md text-label-md text-on-surface text-right font-medium">
                    $165 Million
                  </span>
                </div>
                <div className="flex items-start justify-between pt-2">
                  <span className="font-label-md text-label-md text-on-surface-variant">
                    Cinematography
                  </span>
                  <span className="font-label-md text-label-md text-on-surface text-right font-medium">
                    Hoyte van Hoytema (IMAX)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Cast & Key Crew Section */}
        <section className="w-full px-margin py-8 max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-6 rounded-full bg-primary-container"></span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                Cast &amp; Key Crew
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                aria-label="Scroll cast left"
                className="p-2 rounded-xl bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-all"
                id="cast-prev"
                type="button"
                onClick={() => handleScrollCast(-320)}
              >
                <span className="material-symbols-outlined text-[18px]">
                  arrow_back
                </span>
              </button>
              <button
                aria-label="Scroll cast right"
                className="p-2 rounded-xl bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-all"
                id="cast-next"
                type="button"
                onClick={() => handleScrollCast(320)}
              >
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
          {/* Scrollable Cast Strip */}
          <div
            ref={castCarouselRef}
            className="flex gap-4 overflow-x-auto pb-4 scroll-smooth scrollbar-none snap-x"
            id="cast-carousel"
          >
            {CAST_AND_CREW.map((person) => (
              <div
                key={person.id}
                className="flex flex-col items-center min-w-[150px] p-4 rounded-2xl bg-surface-container hover:bg-surface-container-high transition-all snap-start text-center group"
              >
                <div className="relative w-20 h-20 rounded-full overflow-hidden mb-3 shadow-md group-hover:scale-105 transition-transform">
                  <img
                    alt={person.alt}
                    className="w-full h-full object-cover"
                    data-alt={person.alt}
                    src={person.image}
                  />
                </div>
                <span className="font-label-md text-label-md text-on-surface font-semibold truncate w-full">
                  {person.name}
                </span>
                <span
                  className={`font-body-sm text-body-sm ${person.roleClass} truncate w-full`}
                >
                  {person.role}
                </span>
                <span className="font-label-sm text-label-sm text-outline mt-1">
                  {person.credit}
                </span>
              </div>
            ))}
          </div>
        </section>
        {/* Media Section: 16:9 Cinematic Video Player & Trailer Container */}
        <section
          className="w-full px-margin py-10 max-w-7xl mx-auto"
          id="trailer-player"
        >
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-6 rounded-full bg-primary-container"></span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                  Official Trailer &amp; Visual Stills
                </h2>
              </div>
              <span className="px-3 py-1 rounded-full bg-surface-container-high text-primary font-label-md text-label-md">
                4K UHD • 60 FPS HDR
              </span>
            </div>
          </div>
          {/* The 16:9 Custom Player */}
          <div
            className="trailer-modal-trigger relative w-full aspect-video rounded-3xl overflow-hidden bg-surface-container-lowest shadow-2xl group border border-outline-variant/30 hover:border-primary-container/50 transition-colors cursor-pointer"
            onClick={openTrailerModal}
          >
            {/* Video Screen Visual Placeholder */}
            <div
              className="w-full h-full bg-cover bg-center"
              data-alt="Wide cinematic 16:9 still from Interstellar trailer showing the Endurance spacecraft approaching the swirling massive golden vortex of Gargantua black hole against deep black stellar void"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAloD3CIEeMsUOM7xhWCUBG1fRDaF9IQ3P9WdMgO8RC1PMVdrL1YH_dDJUJ67e91SyGaTuH40d1JYUNymG415gyQZqvx-YV_FoLVwJvYZK_WOJ3T6C-3L3kauzPRZ_jqz6DEoF1646cOh79aHnXMbyGmoPnrj2yajMZQBd43RZmEhKdnqBIUIgXmazIL4qBSxko9q9fVmVzvieasYQIZ8o6Tx2nsfFXAh3vLrvQwO_3')",
              }}
            ></div>
            {/* Ambient Dark Gradient Scrims */}
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/95 via-transparent to-black/40"></div>
            {/* Center Big Play Button with Pulse Aura */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <button
                aria-label="Play Trailer"
                className="pointer-events-auto relative w-20 h-20 rounded-full bg-primary-container/90 text-on-primary-container flex items-center justify-center shadow-[0_0_32px_rgba(56,189,248,0.7)] group-hover:scale-110 transition-transform"
                id="trailer-play-trigger"
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  openTrailerModal();
                }}
              >
                <span
                  className="material-symbols-outlined text-[40px] pl-1"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  play_arrow
                </span>
                <span className="absolute inset-0 rounded-full bg-primary-container/40 animate-ping pointer-events-none"></span>
              </button>
            </div>
            {/* Player Controls Overlay Bar (Bottom) */}
            <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col gap-3 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/80 to-transparent">
              {/* Interactive Progress Timeline Bar */}
              <div className="relative w-full h-1.5 bg-surface-variant rounded-full overflow-hidden cursor-pointer group/bar">
                <div className="h-full bg-primary-container w-[42%] rounded-full shadow-[0_0_12px_rgba(56,189,248,0.9)] relative">
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white scale-0 group-hover/bar:scale-100 transition-transform"></span>
                </div>
              </div>
              <div className="flex items-center justify-between text-on-surface">
                <div className="flex items-center gap-4">
                  <button
                    aria-label="Play/Pause"
                    className="text-on-surface hover:text-primary transition-colors"
                    type="button"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="material-symbols-outlined text-[24px]">
                      play_circle
                    </span>
                  </button>
                  <div className="flex items-center gap-2">
                    <button
                      aria-label="Volume"
                      className="text-on-surface hover:text-primary transition-colors"
                      type="button"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        volume_up
                      </span>
                    </button>
                    <div className="w-16 h-1 bg-surface-variant rounded-full overflow-hidden hidden sm:block">
                      <div className="w-3/4 h-full bg-primary-container"></div>
                    </div>
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                    01:14 / 02:58
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-label-sm text-label-sm font-bold">
                    4K ULTRA HD
                  </span>
                  <button
                    aria-label="Closed Captions"
                    className="text-on-surface-variant hover:text-on-surface transition-colors"
                    type="button"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      closed_caption
                    </span>
                  </button>
                  <button
                    aria-label="Fullscreen"
                    className="text-on-surface-variant hover:text-on-surface transition-colors"
                    type="button"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      fullscreen
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Production Stills Behind-The-Scenes Carousel */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {BTS_STILLS.map((still) => (
              <div
                key={still.id}
                className="group relative aspect-[16/10] rounded-xl overflow-hidden bg-surface-container cursor-pointer shadow-md"
              >
                <img
                  alt={still.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  data-alt={still.alt}
                  src={still.image}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
                <span className="absolute bottom-2 left-2 px-2 py-1 rounded bg-black/70 text-on-surface font-label-sm text-label-sm">
                  {still.label}
                </span>
              </div>
            ))}
          </div>
        </section>
        {/* Recommendation Engine: 'Because you liked Interstellar' */}
        <section className="w-full px-margin py-12 max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-primary-container text-[20px]">
                  auto_awesome
                </span>
                <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-widest">
                  Algorithmic Match Matrix
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                Because you liked Interstellar
              </h2>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
              Deep space astrophysics, existential stakes, and high-fidelity
              sensory direction.
            </p>
          </div>
          {/* Recommendations Grid (5 Poster Cards) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
            {RECOMMENDATIONS.map((rec) => (
              <div key={rec.id} className="group flex flex-col gap-2.5">
                <div className="relative aspect-[2/3] w-full rounded-2xl overflow-hidden bg-surface-container shadow-md group-hover:shadow-[0_0_24px_rgba(56,189,248,0.25)] transition-all">
                  <img
                    alt={rec.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-alt={rec.alt}
                    src={rec.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent"></div>
                  <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-surface-container-lowest/80 backdrop-blur-md text-primary font-label-sm text-label-sm font-bold">
                    {rec.match}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-secondary font-bold flex items-center gap-0.5">
                      <span
                        className="material-symbols-outlined text-[14px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>{" "}
                      {rec.rating}
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      {rec.year}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface truncate group-hover:text-primary transition-colors">
                    {rec.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                    {rec.director}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Interactive Trailer Video Modal */}
        <div
          aria-labelledby="trailer-modal-title"
          aria-modal="true"
          className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 transition-all duration-300 ease-out ${
            isModalOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          id="trailer-modal"
          role="dialog"
        >
          {/* Frosted Glass Dark Backdrop */}
          <div
            className="absolute inset-0 bg-slate-950/85 backdrop-blur-xl transition-opacity duration-300 cursor-pointer"
            id="modal-backdrop"
            onClick={closeTrailerModal}
          ></div>
          {/* Modal Container */}
          <div
            className={`relative z-10 w-full ${
              isTheater ? "max-w-7xl" : "max-w-5xl"
            } rounded-2xl bg-surface-container-lowest/95 border border-slate-700/60 shadow-2xl shadow-sky-500/10 overflow-hidden transform ${
              isModalOpen ? "scale-100" : "scale-95"
            } transition-all duration-300 flex flex-col`}
            id="modal-content"
          >
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-outline-variant/30 bg-surface-container-lowest">
              <div className="flex flex-wrap items-center gap-3 pr-2">
                <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                <h3
                  className="font-headline-sm text-headline-sm text-on-surface font-semibold truncate"
                  id="trailer-modal-title"
                >
                  {modalTitle}
                </h3>
                <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full bg-primary-container/15 text-primary text-label-sm font-label-sm font-semibold border border-primary/20">
                  4K UHD • HDR10 • Dolby Atmos 7.1
                </span>
              </div>
              <button
                aria-label="Close trailer dialog"
                className="shrink-0 p-2 rounded-xl text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all border border-transparent hover:border-primary-container/40 hover:shadow-[0_0_12px_rgba(56,189,248,0.35)]"
                id="modal-close-btn"
                type="button"
                onClick={closeTrailerModal}
              >
                <span className="material-symbols-outlined text-[24px]">
                  close
                </span>
              </button>
            </div>
            {/* Embedded Video Screen & Player Area */}
            <div
              ref={playerViewportRef}
              className="relative w-full aspect-video bg-black overflow-hidden group/modal-player flex items-center justify-center select-none"
              id="player-viewport"
            >
              {/* Video Frame Background Visual */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                id="video-frame"
                style={{ backgroundImage: `url('${videoFrameBg}')` }}
              ></div>
              {/* Ambient Black Hole Accretion Disk Glow Filter */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/50 pointer-events-none"></div>
              <div className="absolute -inset-10 bg-radial from-primary-container/10 via-transparent to-transparent pointer-events-none opacity-60"></div>
              {/* Watermark & Specs Overlay Tag (Top Left of Video) */}
              <div className="absolute top-4 left-4 flex items-center gap-2 pointer-events-none opacity-90">
                <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-white font-mono text-label-sm border border-white/10 tracking-widest uppercase">
                  70mm IMAX RESTORATION
                </span>
                <div className="flex items-center gap-1 px-2 py-1 rounded bg-black/60 backdrop-blur-md text-secondary font-mono text-label-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></span>
                  <span id="player-live-status">
                    {isPlaying ? "PLAYING" : "PAUSED"}
                  </span>
                </div>
              </div>
              {/* Big Center Ripple Play/Pause Button Indicator */}
              <button
                aria-label="Toggle Play Pause"
                className="relative z-20 w-20 h-20 rounded-full bg-primary-container/90 text-on-primary-container flex items-center justify-center shadow-[0_0_40px_rgba(56,189,248,0.7)] hover:scale-110 active:scale-95 transition-transform"
                id="video-center-toggle"
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsPlaying((prev) => !prev);
                }}
              >
                <span
                  className={`material-symbols-outlined text-[44px] ${
                    isPlaying ? "" : "pl-1"
                  }`}
                  id="center-play-icon"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {isPlaying ? "pause" : "play_arrow"}
                </span>
                <span
                  className={`absolute inset-0 rounded-full bg-primary-container/40 ${
                    isPlaying ? "animate-ping" : ""
                  } pointer-events-none`}
                  id="center-pulse"
                ></span>
              </button>
              {/* Bottom Full Transport Control Deck */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 flex flex-col gap-2.5 bg-gradient-to-t from-black via-black/85 to-transparent z-20">
                {/* Scrubber Progress Bar with Hover Seeker */}
                <div
                  ref={progressContainerRef}
                  className="relative w-full h-2 bg-slate-700/80 rounded-full overflow-hidden cursor-pointer group/scrub"
                  id="progress-container"
                  onClick={handleScrubClick}
                >
                  <div
                    className="h-full bg-gradient-to-r from-sky-400 to-primary-container rounded-full shadow-[0_0_14px_rgba(56,189,248,0.9)] transition-all duration-100"
                    id="progress-bar"
                    style={{ width: `${progressPct}%` }}
                  ></div>
                  <div
                    className="absolute top-0 bottom-0 w-3 h-3 -mt-0.5 rounded-full bg-white shadow-md transition-all pointer-events-none hidden group-hover/scrub:block"
                    id="scrubber-knob"
                    style={{ left: `${progressPct}%` }}
                  ></div>
                </div>
                {/* Main Transport Controls Row */}
                <div className="flex items-center justify-between text-on-surface gap-3">
                  {/* Left: Play/Pause, Rewind, Forward, Volume, Time */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <button
                      aria-label="Play or Pause"
                      className="text-on-surface hover:text-primary transition-colors focus:outline-none"
                      id="deck-play-btn"
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsPlaying((prev) => !prev);
                      }}
                    >
                      <span
                        className="material-symbols-outlined text-[28px]"
                        id="deck-play-icon"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {isPlaying ? "pause" : "play_circle"}
                      </span>
                    </button>
                    <button
                      aria-label="Rewind 10 seconds"
                      className="text-on-surface-variant hover:text-on-surface transition-colors"
                      id="btn-rewind"
                      type="button"
                      onClick={() =>
                        setCurrentSeconds((prev) => Math.max(0, prev - 10))
                      }
                    >
                      <span className="material-symbols-outlined text-[22px]">
                        replay_10
                      </span>
                    </button>
                    <button
                      aria-label="Forward 10 seconds"
                      className="text-on-surface-variant hover:text-on-surface transition-colors"
                      id="btn-forward"
                      type="button"
                      onClick={() =>
                        setCurrentSeconds((prev) =>
                          Math.min(totalSeconds, prev + 10)
                        )
                      }
                    >
                      <span className="material-symbols-outlined text-[22px]">
                        forward_10
                      </span>
                    </button>
                    {/* Volume Slider & Mute Toggle */}
                    <div className="flex items-center gap-2 group/volume">
                      <button
                        aria-label="Mute or Unmute"
                        className="text-on-surface-variant hover:text-on-surface transition-colors"
                        id="volume-toggle-btn"
                        type="button"
                        onClick={handleVolumeToggle}
                      >
                        <span
                          className="material-symbols-outlined text-[22px]"
                          id="volume-icon"
                        >
                          {volumeIcon}
                        </span>
                      </button>
                      <input
                        aria-label="Volume slider"
                        className="w-16 sm:w-20 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary-container"
                        id="volume-slider"
                        max="100"
                        min="0"
                        type="range"
                        value={volume}
                        onChange={handleVolumeChange}
                      />
                    </div>
                    {/* Dynamic Time Display */}
                    <span
                      className="font-label-sm text-label-sm text-on-surface-variant font-mono tracking-wider ml-1"
                      id="time-display"
                    >
                      {formatTime(currentSeconds)} / {formatTime(totalSeconds)}
                    </span>
                  </div>
                  {/* Right: Quality pill, Theater toggle, Fullscreen */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="relative group/quality">
                      <button
                        className="px-2.5 py-1 rounded bg-slate-800/90 hover:bg-slate-700 text-primary-container font-label-sm text-label-sm font-bold border border-primary-container/30 flex items-center gap-1 transition-all"
                        id="quality-btn"
                        type="button"
                      >
                        <span>{quality}</span>
                        <span className="material-symbols-outlined text-[14px]">
                          expand_less
                        </span>
                      </button>
                      <div className="absolute bottom-full right-0 mb-1 hidden group-hover/quality:flex flex-col bg-surface-container-high border border-outline-variant/40 rounded-lg shadow-xl p-1 z-30 min-w-[100px]">
                        <button
                          className="px-2 py-1 text-left text-xs font-mono text-primary font-bold hover:bg-surface-container-highest rounded"
                          type="button"
                          onClick={() => setQuality("4K 60FPS")}
                        >
                          4K 60FPS (HDR)
                        </button>
                        <button
                          className="px-2 py-1 text-left text-xs font-mono text-on-surface-variant hover:bg-surface-container-highest rounded"
                          type="button"
                          onClick={() => setQuality("1080p HD")}
                        >
                          1080p HD
                        </button>
                        <button
                          className="px-2 py-1 text-left text-xs font-mono text-on-surface-variant hover:bg-surface-container-highest rounded"
                          type="button"
                          onClick={() => setQuality("720p HD")}
                        >
                          720p HD
                        </button>
                      </div>
                    </div>
                    <button
                      aria-label="Theater Mode"
                      className={`hidden sm:inline-flex p-1.5 rounded-lg ${
                        isTheater
                          ? "text-primary"
                          : "text-on-surface-variant hover:text-on-surface"
                      } hover:bg-slate-800 transition-colors`}
                      id="theater-toggle-btn"
                      title="Cinema Mode"
                      type="button"
                      onClick={() => setIsTheater((prev) => !prev)}
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        crop_landscape
                      </span>
                    </button>
                    <button
                      aria-label="Full Screen"
                      className="p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-slate-800 transition-colors"
                      id="fullscreen-btn"
                      title="Fullscreen"
                      type="button"
                      onClick={handleToggleFullscreen}
                    >
                      <span
                        className="material-symbols-outlined text-[20px]"
                        id="fullscreen-icon"
                      >
                        {isFullscreen ? "fullscreen_exit" : "fullscreen"}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Quick Trailer Switcher & Chapter Markers */}
            <div className="px-5 py-3.5 bg-surface-container-low border-t border-outline-variant/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-outline font-label-sm text-label-sm uppercase tracking-wider shrink-0">
                <span className="material-symbols-outlined text-[16px] text-primary">
                  video_library
                </span>
                <span>Selected Cut:</span>
              </div>
              <div
                className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none"
                id="chapter-list"
              >
                {CHAPTER_CUTS.map((chapter) => {
                  const isActive = chapter.id === activeChapterId;
                  return (
                    <button
                      key={chapter.id}
                      className={
                        isActive
                          ? "chapter-btn px-3 py-1.5 rounded-lg text-xs font-medium bg-primary-container text-on-primary-container font-semibold transition-all shrink-0 shadow-sm"
                          : "chapter-btn px-3 py-1.5 rounded-lg text-xs font-medium bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-all shrink-0"
                      }
                      type="button"
                      onClick={() => handleSelectChapter(chapter)}
                    >
                      {chapter.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}