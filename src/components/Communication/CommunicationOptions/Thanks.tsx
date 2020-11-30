import React from "react";
import { ILayout, Layout } from "../Layout";
import { TeamsTheme } from "../../../themes";

const DEFAULT_STRINGS = {
  title: "You’re awesome.",
  desc: "You’ve just completed your weekly goal in record time.",
  actions: {
    primary: {
      label: "Start the next challenge",
      action: () => alert("Next challenge action called"),
    },
    secondary: {
      label: "Celebrate with your colleagues",
      action: () => alert("Celebrate action called"),
    },
  },
};

const Thanks = ({ theme, values }: { theme: TeamsTheme; values?: ILayout }) => {
  let config: ILayout = DEFAULT_STRINGS;
  if (values) {
    config = { ...config, ...values };
  }
  return <Layout image={illustrations[theme]} {...config} />;
};

const illustrations = {
  [TeamsTheme.Default]: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 119.8 120">
      <defs />
      <circle cx="61.5" cy="69.7" r="44.1" fill="#EDEBE9" />
      <radialGradient
        id="a"
        cx="52.3"
        cy="-167.6"
        r="15.5"
        gradientTransform="scale(1 -1) rotate(-3.1 2614 136.3)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#9b643d" />
        <stop offset=".4" stopColor="#bf916b" />
        <stop offset=".8" stopColor="#d7b089" />
        <stop offset="1" stopColor="#e0bb95" />
      </radialGradient>
      <path
        fill="url(#a)"
        d="M62.1 30c-2.2-1.9-.3-6-3.3-10.5l-6.4.9-7-2.6-2.8 18s.8.3 6.3 3.7c2.6 1.7 5 1.7 6.8 1.8.8 0 21.7 12.1 21.7 12.1L86 41s-23.4-10.4-24-11z"
      />
      <g fill="#E0BB95">
        <path d="M58.8 19.5c-3.4-5.3-4.5-5.2-4-8.7.6-3.5-3.3-4-4.1-.1a13 13 0 001.7 9.7s-3 5.5.6 10.1c4 5 6.4 5.5 6.4 5.5s1.8-12.7-.6-16.5z" />
        <path d="M48.4 25l-4.3-2c-1.7-.8-2.6-2.7-2-4 .6-1.5 2.5-1.8 4.1-.8l4 2.2a3 3 0 011.4 3.7c-.3.9-1.9 1.6-3.2 1z" />
        <path d="M46.8 29.3l-5-2c-1.7-.7-2.7-2.4-2.1-3.8.6-1.4 2.4-1.8 4-1l4.8 2.5c1.3.6 1.9 2 1.4 3.2-.5 1.1-1.8 1.6-3.1 1.1z" />
        <path d="M46 33.3l-4-1c-1.6-.4-3-1.9-2.3-3.6.5-1.4 1.5-1.8 3.9-.9l4.9 1.7c.3 0 1 1.3.6 2.4-.4 1.1-1.7 1.8-3 1.4z" />
        <path d="M44.4 37l-1.7-.3c-1.5-.3-2.5-1.6-2.3-2.8.3-1.3 1.8-2 3.3-1.5l2.9 1c1.2.3 2 1.5 1.7 2.5-.3 1.4-1.4 1.6-4 1.2z" />
      </g>
      <path
        fill="#E8D441"
        d="M71.5 54.6l34 18.8a44.5 44.5 0 00-7.1-28l-23.7-9.6-3.2 18.8z"
      />
      <radialGradient
        id="b"
        cx="23.8"
        cy="-9.4"
        r="12.7"
        gradientTransform="rotate(3.1 -939.8 -233)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#9b643d" />
        <stop offset=".4" stopColor="#af7c55" />
        <stop offset=".7" stopColor="#bb8a63" />
        <stop offset="1" stopColor="#bf8f68" />
      </radialGradient>
      <path
        fill="url(#b)"
        d="M32.5 45.7c-3-2.5-.4-8.3-4.6-14.4L19 32.5 10 29 5.5 53.8s1-.4 8.8 4C18 60 22.7 60 25 60.2c1.1.1 7.4 3.7 13 7 5.5-3.3 7.6-7.8 9.5-14.1-6.2-2.9-14.4-6.6-15.1-7.3z"
      />
      <path
        fill="#FFF"
        d="M38.1 48.6l-2.5 24.2L90.4 103c8.1-7 13.6-16.9 15-28.1L38 48.6z"
      />
      <g fill="#BF8F68">
        <path d="M28 31.3c-4.8-7.3-5.6-7.4-5.5-12 .1-4.7-4.9-5-5.8-.1-1.3 6 1.6 12 2.9 13.4 0 0-4.5 7.6.4 14 5.3 6.8 8.8 7.4 8.8 7.4s2.5-17.5-.9-22.7z" />
        <path d="M13.8 38.5L8.2 36c-2.2-1.1-3.5-3.6-2.7-5.5.8-1.8 3.3-2.2 5.4-.9l5.3 2.9c1.9.9 2.6 3.1 1.9 5-.5 1-2.5 2-4.3 1.1z" />
        <path d="M11.6 44.2L5 41.4c-2.2-.9-3.5-3-2.7-4.9.8-1.8 3.2-2.4 5.3-1.3l6.4 3.3c1.7.8 2.4 2.7 1.8 4.2-.6 1.5-2.5 2.1-4.2 1.5z" />
        <path d="M10.8 49.4l-5.4-1.2c-2-.6-4-2.6-3.1-4.9.7-1.8 2-2.3 5.2-1.1l6.4 2.1c.5.2 1.3 1.8.8 3.3-.5 1.4-2.3 2.3-4 1.8z" />
        <path d="M8.5 54.4L6.3 54c-2-.5-3.4-2.2-3-3.8.4-1.6 2.3-2.5 4.3-2l3.8 1.3c1.6.4 2.7 2 2.3 3.4-.5 1.8-1.8 2-5.2 1.5z" />
      </g>
      <g>
        <linearGradient
          id="c"
          x1="39"
          x2="48.2"
          y1="52.8"
          y2="58.8"
          gradientTransform="rotate(3.1 -535.4 -222)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#e0ad95" />
          <stop offset=".3" stopColor="#ecc1a4" />
          <stop offset=".7" stopColor="#f6d2b0" />
          <stop offset="1" stopColor="#fad8b4" />
        </linearGradient>
        <path
          fill="url(#c)"
          d="M66.6 101.5s-26.5-11.1-27-11.6c-2.4-2-.4-6.4-3.6-11L30.3 82l-6.7-4.8-2.7 19s.8.2 6.6 3.8c2.7 1.7 5.3 1.8 7.1 1.9l16.6 9.1c9.9 5.5 15.4-9.5 15.4-9.5z"
        />
        <path
          fill="#A6A7DC"
          d="M45.3 110.7a44 44 0 0038.1-2.7L48.2 93.7l-2.9 17z"
        />
        <g fill="#FAD8B4">
          <path d="M36 78.9c-3.6-5.6-4.5-5.5-4.1-9.2.3-3.5-3.5-4.3-4.4-.1-1 4.6.8 9 1.8 10.2 0 0-3 5.8.7 10.7 4 5.2 6.7 5.7 6.7 5.7s4-10.7-.7-17.3z" />
          <path d="M25.5 83.9l-4.6-2c-1.8-.7-2.9-2.7-2.3-4.2.5-1.5 2.5-1.8 4.2-.9l4.3 2.1c1.6.7 2.2 2.4 1.7 3.9-.3.9-1.9 1.7-3.3 1z" />
          <path d="M24 88.4l-5.4-1.9c-1.8-.6-2.9-2.4-2.4-3.8.6-1.5 2.5-2 4.2-1.3l5.2 2.4c1.4.6 2 2 1.6 3.3-.4 1.2-1.9 1.8-3.3 1.3z" />
          <path d="M23.4 92.7l-4.3-.8c-1.7-.4-3.3-2-2.6-3.8.5-1.4 1.5-1.9 4-1.1l5.2 1.5c.4 0 1.2 1.4.8 2.5-.4 1.2-1.7 2-3 1.7z" />
          <path d="M21.6 96.7l-1.8-.4c-1.5-.5-2.5-1.9-2.2-3.2.4-1.3 2-1.9 3.5-1.3l3 1.1c1.3.4 2 1.8 1.7 2.8-.5 1.5-1.6 1.6-4.2 1z" />
        </g>
      </g>
      <path
        fill="#FFFACF"
        d="M31.2 11.3a6.2 6.2 0 01-2.1 3c-.2.1-.2.4 0 .5 1 .9 1.7 2 2.1 3.2.1.4.5.4.6 0a7.4 7.4 0 012.2-3.2c.2-.1.1-.4 0-.5-1-.7-1.8-1.8-2.2-3a.3.3 0 00-.6 0z"
      />
      <g>
        <path
          fill="#FFFACF"
          d="M40.4 0c-.8 0-1.4.5-1.7 1.2-.3 1-1 2-1.9 2.6a1.7 1.7 0 000 2.7c.8.8 1.5 1.8 1.9 3 .2.7 1 1.2 1.7 1.2s1.4-.5 1.6-1.2c.4-1.2 1-2.2 2-3a1.7 1.7 0 00-.1-2.7A5.5 5.5 0 0142 1.2C41.8.5 41.1 0 40.4 0z"
          opacity=".5"
        />
        <path
          fill="#FAE969"
          d="M40.4 1.4c.1 0 .3 0 .3.2A6.9 6.9 0 0043.1 5c.2.2.2.4 0 .6-1 1-2 2.1-2.4 3.5 0 .2-.2.3-.3.3-.2 0-.3 0-.4-.3a8.2 8.2 0 00-2.4-3.5.4.4 0 010-.6c1.2-.8 2-2 2.4-3.3l.4-.2"
        />
      </g>
      <path
        fill="#FFFACF"
        d="M4.9 64.2a7.3 7.3 0 01-2.5 3.5c-.2.1-.2.4 0 .6 1 1 2 2.3 2.4 3.7.2.4.7.4.8 0A8.6 8.6 0 018 68.3c.2-.2.2-.5 0-.6-1.2-.9-2-2-2.5-3.5a.4.4 0 00-.7 0z"
      />
      <g>
        <path
          fill="#E2E2F6"
          d="M101.2 87h-.1a.8.8 0 01-.6-1 86.4 86.4 0 0114-34.8.8.8 0 011.2 1s-9.5 12.1-13.7 34.1c0 .4-.4.6-.8.6z"
        />
        <circle cx="117.7" cy="47.9" r="2.1" fill="#E2E2F6" />
        <path
          fill="#E2E2F6"
          d="M95.2 101.5H95a.5.5 0 01-.3-.7c1.9-8.8 10.5-18.8 10.8-19.2a.5.5 0 11.8.6c0 .1-8.8 10.3-10.6 18.9-.1.2-.3.4-.5.4z"
        />
        <path
          fill="#E2E2F6"
          d="M100.9 74.5c3.6-4.4 10.2-8.3 14.5-5.3 6.5 4.7-1.6 17.2-3 19a25 25 0 01-10.1 8.3c-3.2 1.1-5.3.6-7-1-4.3-5.4 2-16.7 5.6-21zM88.5 80c3 5.2 3.4 10 3.2 12.8-.2 2.3-2.2 4.5-4.5 4.6-4.8 0-9.5-2.8-13.8-7.4a21.6 21.6 0 01-6.3-13.6 7.7 7.7 0 016.7-7.5c5-.9 10.6 4 14.7 11z"
        />
        <path
          fill="#E2E2F6"
          d="M84.7 60c-2.9 28.5 4.6 32.4 7.6 32.7C98 93.2 104 82 106.7 63s-8.4-19.7-8.4-19.7c-6.5-1.6-12.5 5.2-13.6 16.7z"
        />
        <path
          fill="#BDBDE6"
          d="M84.7 60c-2.9 28.5 4.6 32.4 7.6 32.7C98 93.2 104 82 106.7 63s-8.4-19.7-8.4-19.7c-6.5-1.6-12.5 5.2-13.6 16.7z"
          opacity=".5"
        />
        <path
          fill="#A6A7DC"
          d="M90.8 101.5a.5.5 0 01-.5-.3c-3.4-8.1-7-12.6-10.7-17.4l-.3-.4a.5.5 0 01.8-.6l.3.4c3.8 4.8 7.3 9.4 10.9 17.6a.5.5 0 01-.5.7z"
        />
        <path
          fill="#BDBDE6"
          d="M88.5 80c3 5.2 3.4 10 3.2 12.8-.2 2.3-2.2 4.5-4.5 4.6-4.8 0-9.5-2.8-13.8-7.4a21.6 21.6 0 01-6.3-13.6 7.7 7.7 0 016.7-7.5c5-.9 10.6 4 14.7 11z"
          opacity=".5"
        />
        <path
          fill="#6264A7"
          d="M84 73.9c.5 14.8 5.1 18.1 7.7 18.7.2-2.8-.2-7.5-3.2-12.7a33.6 33.6 0 00-4.4-6z"
          opacity=".1"
        />
        <g>
          <path
            fill="#A6A7DC"
            d="M92.9 99.4a.5.5 0 01-.5-.5c-1-19.1 2.3-38.5 2.4-38.7 0-.3.3-.5.6-.4.2 0 .4.3.4.6 0 .2-3.3 19.4-2.4 38.5 0 .2-.2.5-.5.5z"
          />
        </g>
        <g>
          <path
            fill="#C8C6C4"
            d="M103.7 120a5 5 0 003.4-4.7l-4.3-16c0-.2-.3-.4-.6-.4h-19c-.3 0-.5.2-.6.5l-4.3 16a5 5 0 003.4 4.6h22z"
          />
        </g>
      </g>
    </svg>
  ),
  [TeamsTheme.Dark]: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 117.7 120">
      <defs />
      <circle cx="59.5" cy="69.7" r="44.1" fill="#BDBDE6" opacity=".5" />
      <radialGradient
        id="a"
        cx="50.1"
        cy="-162.3"
        r="15.5"
        gradientTransform="scale(1 -1) rotate(-3.1 2514.6 136.3)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#9b643d" />
        <stop offset=".4" stopColor="#bf916b" />
        <stop offset=".8" stopColor="#d7b089" />
        <stop offset="1" stopColor="#e0bb95" />
      </radialGradient>
      <path
        fill="url(#a)"
        d="M60 30c-2.2-1.9-.2-6-3.3-10.5l-6.4.9-7-2.6-2.7 18s.8.3 6.2 3.7c2.6 1.7 5.1 1.7 6.9 1.8.8 0 21.6 12.1 21.6 12.1L84.1 41S60.6 30.5 60 30z"
      />
      <g fill="#E0BB95">
        <path d="M56.7 19.5c-3.4-5.3-4.4-5.2-3.9-8.7.5-3.5-3.3-4-4.2-.1a13 13 0 001.7 9.7s-2.9 5.5.7 10.1c3.9 5 6.4 5.5 6.4 5.5s1.8-12.7-.7-16.5z" />
        <path d="M46.4 25L42 23c-1.7-.8-2.6-2.7-2-4 .6-1.5 2.4-1.8 4-.8l4 2.2a3 3 0 011.5 3.7c-.4.9-2 1.6-3.2 1z" />
        <path d="M44.7 29.3l-5-2c-1.7-.7-2.6-2.4-2-3.8.5-1.4 2.3-1.8 4-1l4.8 2.5c1.2.6 1.8 2 1.4 3.2-.5 1.1-1.9 1.6-3.2 1.1z" />
        <path d="M44 33.3l-4-1c-1.6-.4-3-1.9-2.4-3.6.6-1.4 1.5-1.8 4-.9l4.8 1.7c.4 0 1 1.3.6 2.4-.4 1.1-1.7 1.8-3 1.4z" />
        <path d="M42.3 37l-1.6-.3c-1.5-.3-2.6-1.6-2.3-2.8.3-1.3 1.7-2 3.2-1.5l3 1c1.2.3 2 1.5 1.7 2.5-.4 1.4-1.4 1.6-4 1.2z" />
      </g>
      <path
        fill="#E8D441"
        d="M69.4 54.6l34 18.8a44.5 44.5 0 00-7-28l-23.8-9.6-3.2 18.8z"
      />
      <g>
        <radialGradient
          id="b"
          cx="21.6"
          cy="-18.3"
          r="12.7"
          gradientTransform="rotate(3.1 -1104.2 -234.7)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#9b643d" />
          <stop offset=".4" stopColor="#af7c55" />
          <stop offset=".7" stopColor="#bb8a63" />
          <stop offset="1" stopColor="#bf8f68" />
        </radialGradient>
        <path
          fill="url(#b)"
          d="M30.4 45.7c-3-2.5-.4-8.3-4.5-14.4l-9 1.2L8 29 3.6 53.8s1-.4 8.7 4C16 60 20.7 60 23.1 60.2c1 .1 7.4 3.7 13 7 5.5-3.3 7.5-7.8 9.5-14.1-6.2-2.9-14.4-6.6-15.2-7.3z"
        />
        <path
          fill="#FFF"
          d="M36 48.6l-2.4 24.2L88.4 103c8-7 13.6-16.9 14.9-28.1L36 48.6z"
        />
        <g fill="#BF8F68">
          <path d="M25.9 31.3c-4.7-7.3-5.6-7.4-5.5-12 .2-4.7-4.8-5-5.8-.1-1.3 6 1.7 12 3 13.4 0 0-4.6 7.6.3 14 5.4 6.8 8.8 7.4 8.8 7.4s2.5-17.5-.8-22.7z" />
          <path d="M11.8 38.5L6 36c-2.2-1.1-3.4-3.6-2.6-5.5.7-1.8 3.2-2.2 5.3-.9l5.3 2.9c2 .9 2.7 3.1 2 5-.5 1-2.6 2-4.3 1.1z" />
          <path d="M9.6 44.2l-6.7-2.8c-2.2-.9-3.4-3-2.7-4.9.8-1.8 3.2-2.4 5.3-1.3l6.4 3.3c1.7.8 2.5 2.7 1.9 4.2-.7 1.5-2.5 2.1-4.2 1.5z" />
          <path d="M8.7 49.4l-5.4-1.2c-2-.6-4-2.6-3-4.9.7-1.8 2-2.3 5.1-1.1l6.4 2.1c.5.2 1.4 1.8.8 3.3-.5 1.4-2.2 2.3-3.9 1.8z" />
          <path d="M6.4 54.4L4.3 54c-2-.5-3.4-2.2-3-3.8.3-1.6 2.3-2.5 4.2-2l3.9 1.3c1.6.4 2.6 2 2.3 3.4-.5 1.8-1.9 2-5.3 1.5z" />
        </g>
      </g>
      <g>
        <linearGradient
          id="c"
          x1="36.4"
          x2="45.4"
          y1="43.7"
          y2="49.6"
          gradientTransform="rotate(3.1 -699.9 -223.7)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#e0ad95" />
          <stop offset=".1" stopColor="#e3b198" />
          <stop offset=".7" stopColor="#f4cdac" />
          <stop offset="1" stopColor="#fad8b4" />
        </linearGradient>
        <path
          fill="url(#c)"
          d="M64.6 101.5S38 90.4 37.5 89.9c-2.4-2-.3-6.4-3.5-11L28.3 82l-6.7-4.8-2.8 19s.9.2 6.6 3.8c2.7 1.7 5.4 1.8 7.2 1.9.4 0 19.2 10.6 19.2 10.6l12.8-11z"
        />
        <path
          fill="#A6A7DC"
          d="M43.3 110.7a44 44 0 0038-2.7L46.1 93.7l-2.8 17z"
        />
        <g fill="#FAD8B4">
          <path d="M34 78.9c-3.6-5.6-4.6-5.5-4.2-9.2.4-3.5-3.5-4.3-4.4-.1-1 4.6.8 9 1.8 10.2 0 0-3 5.8.7 10.7 4.1 5.2 6.7 5.7 6.7 5.7s4-10.7-.6-17.3z" />
          <path d="M23.5 83.9l-4.7-2c-1.8-.7-2.8-2.7-2.3-4.2.6-1.5 2.5-1.8 4.3-.9L25 79c1.5.7 2.2 2.4 1.7 3.9-.4.9-2 1.7-3.3 1z" />
          <path d="M21.9 88.4l-5.4-1.9c-1.8-.6-2.9-2.4-2.3-3.8.5-1.5 2.4-2 4.2-1.3l5.2 2.4c1.3.6 2 2 1.6 3.3-.5 1.2-2 1.8-3.3 1.3z" />
          <path d="M21.4 92.7l-4.4-.8c-1.6-.4-3.2-2-2.6-3.8.5-1.4 1.5-1.9 4.1-1.1l5.2 1.5c.4 0 1.1 1.4.8 2.5-.4 1.2-1.8 2-3.1 1.7z" />
          <path d="M19.5 96.7l-1.7-.4c-1.6-.5-2.6-1.9-2.2-3.2.3-1.3 2-1.9 3.5-1.3l3 1.1c1.2.4 2 1.8 1.7 2.8-.5 1.5-1.6 1.6-4.3 1z" />
        </g>
      </g>
      <path
        fill="#FFFACF"
        d="M29.2 11.3a6.2 6.2 0 01-2.2 3v.5c1 .9 1.7 2 2.2 3.2 0 .4.5.4.6 0a7.4 7.4 0 012.1-3.2c.2-.1.2-.4 0-.5-1-.7-1.7-1.8-2.1-3a.3.3 0 00-.6 0z"
      />
      <g>
        <path
          fill="#FFFACF"
          d="M38.3 0c-.7 0-1.4.5-1.6 1.2-.4 1-1 2-2 2.6a1.7 1.7 0 000 2.7c.9.8 1.6 1.8 2 3 .2.7.9 1.2 1.6 1.2.8 0 1.4-.5 1.7-1.2.4-1.2 1-2.2 2-3a1.7 1.7 0 00-.1-2.7 5.5 5.5 0 01-2-2.6C39.8.5 39.2 0 38.4 0z"
          opacity=".5"
        />
        <path
          fill="#FAE969"
          d="M38.3 1.4c.2 0 .3 0 .4.2A6.9 6.9 0 0041 5c.2.2.2.4 0 .6-1 1-1.9 2.1-2.3 3.5 0 .2-.2.3-.4.3-.1 0-.3 0-.3-.3a8.2 8.2 0 00-2.4-3.5.4.4 0 010-.6c1.1-.8 2-2 2.4-3.3l.3-.2"
        />
      </g>
      <path
        fill="#FFFACF"
        d="M2.8 64.2a7.3 7.3 0 01-2.5 3.5c-.2.1-.2.4 0 .6 1.1 1 2 2.3 2.5 3.7.1.4.6.4.7 0A8.6 8.6 0 016 68.3c.2-.2.2-.5 0-.6-1.1-.9-2-2-2.5-3.5a.4.4 0 00-.7 0z"
      />
      <g>
        <path
          fill="none"
          stroke="#8B8CC7"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M113 51.7s-9.5 12-13.8 34.5"
        />
        <circle cx="115.6" cy="47.9" r="2.1" fill="#8B8CC7" />
        <path
          fill="none"
          stroke="#8B8CC7"
          strokeLinecap="round"
          strokeMiterlimit="10"
          d="M103.9 82S95 92.1 93 101"
        />
        <path
          fill="#8B8CC7"
          d="M98.8 74.5c3.6-4.4 10.3-8.3 14.6-5.3 6.4 4.7-1.7 17.2-3 19a25 25 0 01-10.2 8.3c-3.2 1.1-5.3.6-7-1-4.3-5.4 2-16.7 5.6-21z"
        />
        <path
          fill="#E2E2F6"
          d="M86.4 80c3 5.2 3.4 10 3.2 12.8-.2 2.3-2.1 4.5-4.5 4.6-4.7 0-9.5-2.8-13.7-7.4A21.6 21.6 0 0165 76.4a7.7 7.7 0 016.6-7.5c5-.9 10.7 4 14.7 11z"
        />
        <path
          fill="#E2E2F6"
          d="M82.6 60c-2.8 28.5 4.7 32.4 7.6 32.7 5.9.5 11.8-10.7 14.5-29.7s-8.4-19.7-8.4-19.7c-6.6-1.6-12.5 5.2-13.7 16.7z"
        />
        <path
          fill="#BDBDE6"
          d="M82.6 60c-2.8 28.5 4.7 32.4 7.6 32.7 5.9.5 11.8-10.7 14.5-29.7s-8.4-19.7-8.4-19.7c-6.6-1.6-12.5 5.2-13.7 16.7z"
          opacity=".5"
        />
        <path
          fill="none"
          stroke="#A6A7DC"
          strokeLinecap="round"
          strokeMiterlimit="10"
          d="M77.6 83c3.9 5 7.5 9.6 11.2 18"
        />
        <path
          fill="#BDBDE6"
          d="M86.4 80c3 5.2 3.4 10 3.2 12.8-.2 2.3-2.1 4.5-4.5 4.6-4.7 0-9.5-2.8-13.7-7.4A21.6 21.6 0 0165 76.4a7.7 7.7 0 016.6-7.5c5-.9 10.7 4 14.7 11z"
          opacity=".5"
        />
        <path
          fill="#6264A7"
          d="M82 73.9c.5 14.8 5 18.1 7.6 18.7.2-2.8-.2-7.5-3.2-12.7a33.6 33.6 0 00-4.4-6z"
          opacity=".1"
        />
        <path
          fill="none"
          stroke="#A6A7DC"
          strokeLinecap="round"
          strokeMiterlimit="10"
          d="M90.8 98.9c-1-19.3 2.4-38.6 2.4-38.6"
        />
        <g>
          <path
            fill="#C8C6C4"
            d="M101.6 120a5 5 0 003.5-4.7l-4.4-16c0-.2-.3-.4-.6-.4h-19c-.2 0-.5.2-.5.5l-4.4 16a5 5 0 003.5 4.6h22z"
          />
        </g>
      </g>
    </svg>
  ),
  [TeamsTheme.HighContrast]: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 117.7 120">
      <defs>
        <path
          id="reuse-0"
          fill="#FFF"
          stroke="#000"
          strokeMiterlimit="10"
          d="M82.6 60c-2.8 28.5 4.7 32.4 7.6 32.7 5.9.5 11.8-10.7 14.5-29.7s-8.4-19.7-8.4-19.7c-6.6-1.6-12.5 5.2-13.7 16.7z"
        />
      </defs>
      <circle
        cx="59.5"
        cy="69.7"
        r="44.1"
        fill="#FFF"
        stroke="#000"
        strokeMiterlimit="10"
      />
      <path
        stroke="#FFF"
        strokeMiterlimit="10"
        d="M60 30c-2.2-1.9-.2-6-3.3-10.5l-6.4.9-7-2.6-2.7 18s.8.3 6.2 3.7c2.6 1.7 5.1 1.7 6.9 1.8.8 0 21.6 12.1 21.6 12.1L84.1 41S60.6 30.5 60 30z"
      />
      <path
        stroke="#FFF"
        strokeLinecap="round"
        strokeMiterlimit="10"
        d="M56.7 19.5c-3.4-5.3-4.4-5.2-3.9-8.7.5-3.5-3.3-4-4.2-.1a13 13 0 001.7 9.7s-2.9 5.5.7 10.1"
      />
      <path
        stroke="#FFF"
        strokeMiterlimit="10"
        d="M46.4 25L42 23c-1.7-.8-2.6-2.7-2-4 .6-1.5 2.4-1.8 4-.8l4 2.2a3 3 0 011.5 3.7c-.4.9-2 1.6-3.2 1z"
      />
      <path
        stroke="#FFF"
        strokeMiterlimit="10"
        d="M44.7 29.3l-5-2c-1.7-.7-2.6-2.4-2-3.8s2.3-1.8 4-1l4.8 2.5c1.2.6 1.8 2 1.4 3.2s-1.9 1.6-3.2 1.1z"
      />
      <path
        stroke="#FFF"
        strokeMiterlimit="10"
        d="M44 33.3l-4-1c-1.6-.4-3-1.9-2.4-3.6.6-1.4 1.5-1.8 4-.9l4.8 1.7c.4 0 1 1.3.6 2.4s-1.7 1.8-3 1.4z"
      />
      <path
        stroke="#FFF"
        strokeMiterlimit="10"
        d="M42.3 37l-1.6-.3c-1.5-.3-2.6-1.6-2.3-2.8.3-1.3 1.7-2 3.2-1.5l3 1c1.2.3 2 1.5 1.7 2.5-.4 1.4-1.4 1.6-4 1.2z"
      />
      <path
        fill="#FFF"
        stroke="#000"
        strokeMiterlimit="10"
        d="M69.4 54.6l34 18.8.2-3.7a43.9 43.9 0 00-7.3-24.2l-23.7-9.7-3.2 18.8z"
      />
      <g fill="#FFF" stroke="#000" strokeMiterlimit="10">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M30.4 45.7c-3-2.5-.4-8.3-4.5-14.4l-8.4 1.3L8 29 4 53.7s.6-.3 8.3 4.2c3.7 2.1 8.4 2 10.8 2.2 1 .1 7.4 3.7 13 7 5.5-3.3 7.5-7.8 9.5-14.1-6.2-2.8-14.4-6.6-15.2-7.3z"
        />
        <path d="M36 48.6l-2.4 24.2L88.4 103c8-7 13.6-16.9 14.9-28.1L36 48.6z" />
        <path
          strokeLinecap="round"
          d="M26 31.6c-4.6-7.3-5.7-7.7-5.6-12.3.2-4.7-4.8-5-5.8-.1-1.3 6 1.7 12 3 13.4 0 0-4.6 7.6.3 14"
        />
        <path d="M11.8 38.5L6 36c-2.2-1.1-3.4-3.6-2.6-5.5.7-1.8 3.2-2.2 5.3-.9l5.3 2.9c2 .9 2.7 3.1 2 5-.5 1-2.6 2-4.3 1.1z" />
        <path d="M9.6 44.2l-6.7-2.8c-2.2-.9-3.4-3-2.7-4.9.8-1.8 3.2-2.4 5.3-1.3l6.4 3.3c1.7.8 2.5 2.7 1.9 4.2-.7 1.5-2.5 2.1-4.2 1.5z" />
        <path d="M8.7 49.5l-5.4-1.3c-2-.6-4-2.6-3-4.9.7-1.8 2-2.3 5.1-1.1l6.4 2.1c.5.2 1.4 1.8.8 3.3-.5 1.4-2.2 2.3-3.9 1.8z" />
        <path d="M6.4 54.4L4.3 54c-2-.5-3.4-2.2-3-3.8.3-1.6 2.3-2.5 4.2-2l3.9 1.3c1.6.4 2.6 2 2.3 3.4-.5 1.8-1.9 2-5.3 1.5z" />
      </g>
      <g strokeMiterlimit="10">
        <path
          fill="#FFF"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.6 77.2l-2.8 19s.9.2 6.6 3.8c2.7 1.7 5.4 1.8 7.2 1.9.4 0 19.2 10.6 19.2 10.6l12.8-11S38 90.4 37.5 89.9c-2.4-2-.3-6.4-3.5-11"
        />
        <path
          stroke="#FFF"
          d="M43.3 110.7a44 44 0 0016.2 3 43.8 43.8 0 0021.8-5.7L46.1 93.7l-2.8 17z"
        />
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          d="M34.4 79.6l-.4-.7c-3.6-5.6-4.6-5.5-4.2-9.2.4-3.5-3.5-4.3-4.4-.1-1 4.6.8 9 1.8 10.2 0 0-3 5.8.7 10.7"
        />
        <path
          fill="#FFF"
          stroke="#000"
          d="M23.4 83.9l-4.6-2c-1.8-.7-2.8-2.7-2.3-4.2.6-1.5 2.5-1.8 4.3-.9L25 79c1.5.7 2.2 2.4 1.7 3.9-.4.9-2 1.7-3.3 1z"
        />
        <path
          fill="#FFF"
          stroke="#000"
          d="M21.9 88.4l-5.4-1.9c-1.8-.6-2.9-2.4-2.3-3.8.5-1.5 2.4-2 4.2-1.3l5.2 2.4c1.3.6 2 2 1.6 3.3-.5 1.2-2 1.8-3.3 1.3z"
        />
        <path
          fill="#FFF"
          stroke="#000"
          d="M21.4 92.7l-4.4-.8c-1.6-.4-3.2-2-2.6-3.8.5-1.4 1.5-1.9 4.1-1.1l5.2 1.5c.4 0 1.1 1.4.8 2.5-.4 1.2-1.8 2-3.1 1.7z"
        />
        <path
          fill="#FFF"
          stroke="#000"
          d="M19.5 96.7l-1.7-.4c-1.6-.5-2.6-1.9-2.2-3.2.3-1.3 2-1.9 3.5-1.3l3 1.1c1.2.4 2 1.8 1.7 2.8-.5 1.5-1.6 1.6-4.3 1z"
        />
      </g>
      <path
        fill="#FFF"
        stroke="#000"
        strokeMiterlimit="10"
        d="M29.2 11.3a6.2 6.2 0 01-2.2 3 .3.3 0 000 .5 7.4 7.4 0 012.2 3.2c0 .4.5.4.6 0a7.4 7.4 0 012.1-3.2.3.3 0 000-.5 6.2 6.2 0 01-2.1-3 .3.3 0 00-.6 0z"
      />
      <path
        fill="#FFF"
        d="M38.3 1.4c.2 0 .3 0 .4.2A6.9 6.9 0 0041 5a.4.4 0 010 .6A8.2 8.2 0 0038.7 9a.4.4 0 01-.4.3.4.4 0 01-.3-.3 8.2 8.2 0 00-2.4-3.5.4.4 0 010-.6A6.9 6.9 0 0038 1.6a.4.4 0 01.3-.2"
      />
      <path
        fill="#FFF"
        stroke="#000"
        strokeMiterlimit="10"
        d="M2.8 64.2a7.3 7.3 0 01-2.5 3.5.4.4 0 000 .6A8.6 8.6 0 012.8 72a.4.4 0 00.7 0A8.6 8.6 0 016 68.3a.4.4 0 000-.6 7.3 7.3 0 01-2.5-3.5.4.4 0 00-.7 0z"
      />
      <path
        fill="none"
        stroke="#FFF"
        strokeLinecap="round"
        strokeMiterlimit="10"
        d="M113 51.7s-9.5 12-13.8 34.5"
      />
      <circle
        cx="115.6"
        cy="47.9"
        r="2.1"
        fill="#FFF"
        stroke="#000"
        strokeMiterlimit="10"
      />
      <path
        fill="none"
        stroke="#FFF"
        strokeMiterlimit="10"
        d="M103.9 82S95 92.1 93 101"
      />
      <path
        stroke="#FFF"
        strokeMiterlimit="10"
        d="M98.8 74.5c3.6-4.4 10.3-8.3 14.6-5.3 6.4 4.7-1.7 17.2-3 19a25 25 0 01-10.2 8.3c-3.2 1.1-5.3.6-7-1-4.3-5.4 2-16.7 5.6-21z"
      />
      <path
        fill="#FFF"
        stroke="#000"
        strokeMiterlimit="10"
        d="M86.4 80c3 5.2 3.4 10 3.2 12.8-.2 2.3-2.1 4.5-4.5 4.6-4.7 0-9.5-2.8-13.7-7.4A21.6 21.6 0 0165 76.5a7.7 7.7 0 016.6-7.5c5-.9 10.7 4 14.7 11z"
      />
      <use strokeMiterlimit="10" xlinkHref="#reuse-0" />
      <use strokeMiterlimit="10" opacity=".5" xlinkHref="#reuse-0" />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit="10"
        d="M77.6 83c3.9 5 7.5 9.6 11.2 18"
      />
      <path d="M82 73.9c.5 14.8 5 18.1 7.6 18.7.2-2.8-.2-7.5-3.2-12.7a33.7 33.7 0 00-4.4-6z" />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit="10"
        d="M90.8 98.9c-1-19.3 2.4-38.6 2.4-38.6"
      />
      <path
        fill="#FFF"
        stroke="#000"
        strokeMiterlimit="10"
        d="M101.6 120a5 5 0 003.5-4.7l-4.4-16a.6.6 0 00-.6-.4h-19a.6.6 0 00-.5.5l-4.4 16a5 5 0 003.5 4.6h22z"
      />
    </svg>
  ),
};

export default Thanks;
