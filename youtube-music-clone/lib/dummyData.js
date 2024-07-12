import { getRandomInt } from "./utils";

export const dummyAllSongList = [
  {
    name: "GODSLAYER [NCS Release]",
    channelId: 1,
    channel: "1$k1",
    src: "/music/1$K1 - GODSLAYER [NCS Release].mp3",
    imageSrc: "/img/1$K1 - GODSLAYER [NCS Release].jpg",
  },
  {
    name: "Alone (feat. SGAR) [NCS Release]",
    channelId: 2,
    channel: "Blooom",
    src: "/music/Blooom - Alone (feat. SGAR) [NCS Release].mp3",
    imageSrc: "/img/Blooom - Alone (feat. SGAR) [NCS Release].jpg",
  },
  {
    name: "Rave Teacher [NCS Release]",
    channelId: 3,
    channel: "KEVU",
    src: "/music/KEVU - Rave Teacher [NCS Release].mp3",
    imageSrc: "/img/KEVU - Rave Teacher [NCS Release].jpg",
  },
  {
    name: "18_28 OUTBOUND [NCS Release]",
    channelId: 4,
    channel: "Sam Day",
    src: "/music/Sam Day - 18_28 OUTBOUND [NCS Release].mp3",
    imageSrc: "/img/Sam Day - 18_28 OUTBOUND [NCS Release].jpg",
  },
  {
    name: "Vibe [NCS Release]",
    channelId: 5,
    channel: "Spicyverse",
    src: "/music/Spicyverse - Vibe [NCS Release].mp3",
    imageSrc: "/img/Spicyverse - Vibe [NCS Release].jpg",
  },

  
];

export const getSongsBychannel = (channel) => {
  return dummyAllSongList.filter((song) => song.channel === channel);
};

// playlist
export const dummyPlaylistArray = [
  {
    id: 1,
    owner: "1$k1",
    playlistName: "1$k1's playlist",
    songList: getSongsBychannel("1$k1"),
  },
  {
    id: 2,
    owner: "Blooom",
    playlistName: "Blooom's playlist",
    songList: getSongsBychannel("Blooom"),
  },
  {
    id: 3,
    owner: "KEVU",
    playlistName: "KEVU's playlist ears",
    songList: getSongsBychannel("KEVU"),
  },
  {
    id: 4,
    owner: "Sam Day",
    playlistName: "Sam Day's playlist music",
    songList: getSongsBychannel("Sam Day"),
  },
  {
    id: 5,
    owner: "Spicyverse",
    playlistName: "Spicyverse's playlist music",
    songList: [
      ...getSongsBychannel("Spicyverse"),
      ...getSongsBychannel("Sam Day"),
      ...getSongsBychannel("KEVU"),
    ],
  },
];

export const getAllPlaylist = async () => [...dummyPlaylistArray];

export const getPlaylistByOwner = (owner) => {
  return dummyPlaylistArray.filter((playlist) => playlist.owner === owner);
};

export const getPlaylistById = async (id) => {
  return dummyPlaylistArray.filter((playlist) => playlist.id === id)?.[0];
};

export const getSongListTop10 = async () =>
  dummyAllSongList.map((song, idx) => {
    return {
      rank: idx,
      prevRank: idx + getRandomInt(-3, 3),
      ...song,
    };
  });

// channel
export const dummyChannelList = [
  {
    id: 1,
    subscribers: 4200,
    name: "1$k1",
    songList: getSongsBychannel("1$k1"),
    playlistArray: getPlaylistByOwner("1$k1"),
  },
  {
    id: 2,
    subscribers: 2900,
    name: "Blooom",
    songList: getSongsBychannel("Blooom"),
    playlistArray: getPlaylistByOwner("Blooom"),
  },
  {
    id: 3,
    subscribers: 3900,
    name: "KEVU",
    songList: getSongsBychannel("KEVU"),
    playlistArray: getPlaylistByOwner("KEVU"),
  },
  {
    id: 4,
    subscribers: 3900,
    name: "Sam Day",
    songList: getSongsBychannel("Sam Day"),
    playlistArray: getPlaylistByOwner("Sam Day"),
  },
  {
    id: 5,
    subscribers: 3900,
    name: "Spicyverse",
    songList: [
      ...getSongsBychannel("Sam Day"),
      ...getSongsBychannel("Spicyverse"),
    ],
    playlistArray: [
      ...getPlaylistByOwner("Sam Day"),
      ...getPlaylistByOwner("Spicyverse"),
    ],
  },
];

export const getChannelById = async (id) => {
  return dummyChannelList.filter((channel) => channel.id === Number(id))?.[0];
};

// home - 카테고리
export const homeCategoryList = [
  {
    label: "운동",
    src: "https://images.unsplash.com/photo-1487956382158-bb926046304a",
  },
  {
    label: "행복한 기분",
    src: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
  },
  {
    label: "에너지 충전",
    src: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94",
  },
  {
    label: "휴식",
    src: "https://images.unsplash.com/photo-1528962862197-29c4f24ccc04",
  },
  {
    label: "집중",
    src: "https://images.unsplash.com/photo-1472745433479-4556f22e32c2",
  },
  {
    label: "출퇴근길",
    src: "https://images.unsplash.com/photo-1657073895095-b050616ab369",
  },
  {
    label: "로맨스",
    src: "https://images.unsplash.com/photo-1581700501514-95e559cff7e9",
  },
  {
    label: "파티",
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
  },
  {
    label: "슬픔",
    src: "https://images.unsplash.com/photo-1534330207526-8e81f10ec6fc",
  },
  {
    label: "잠잘 때",
    src: "https://images.unsplash.com/photo-1429117237875-aa29229d99f0",
  },
];

// 분위기 및 장르
// Array.from(document.querySelectorAll("#items")[7].querySelectorAll("button")).map( el => el.textContent.replaceAll("\n","").trim())
export const dummyGenreList = [
  "잠잘 때",
  "인디 & 얼터너티브",
  "계절 변화를 위한 테마",
  "국내 발라드",
  "국내 록/얼터너티브",
  "슬픔",
  "연말연시",
  "아프리카",
  "출퇴근 & 등하교",
  "사랑 노래",
  "한국 힙합",
  "힙합",
  "국내 R&B",
  "2010년대",
  "R&B 및 소울",
  "록",
  "국내 댄스",
  "힘이 필요할 때",
  "편안한 분위기",
  "운동할 때",
  "OST & 뮤지컬",
  "파티 음악",
  "행복한 기분",
  "트로트",
  "Reggae & Caribbean",
  "집중할 때",
  "1980년대",
  "2000년대",
  "포크/어쿠스틱",
  "크리스마스",
  "1990년대",
  "Pop",
  "블랙 라이브즈 매터",
  "재즈",
  "클래식",
  "가족",
  "1970년대 음악",
  "아랍 음악",
  "1960년대",
  "댄스 & 일렉트로닉",
  "만도팝 및 캔터팝",
  "컨트리 & 아메리카나",
  "J팝",
  "블루스",
  "라틴",
  "메탈",
  "이라크 음악",
  "발리우드 & 인도",
];
