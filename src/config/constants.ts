import {
  HamburgerMenuListElementI,
  LogoI,
  AlbumI,
  CompanyInformationI,
} from './types';

import InstagramIcon from '../assets/CompanyLogoList/instagram.svg';
import TiktokIcon from '../assets/CompanyLogoList/tiktok.svg';
import TwitterIcon from '../assets/CompanyLogoList/twitter.svg';
import TwitchIcon from '../assets/CompanyLogoList/twitch.svg';
import FacebookIcon from '../assets/CompanyLogoList/facebook.svg';
import DiscordIcon from '../assets/CompanyLogoList/discord.svg';
import MonstercatPlayerIcon from '../assets/CompanyLogoList/monstercat-player.svg';
import Albumcover from '../assets/small-poster.webp';

import YoutubeIcon from '../assets/StreamingLogoList/youtube.svg';
import BandcampIcon from '../assets/StreamingLogoList/bandcamp.svg';
import SoundcloudIcon from '../assets/StreamingLogoList/soundcloud.svg';
import SpotifyIcon from '../assets/StreamingLogoList/spotify.svg';
import AppleIcon from '../assets/StreamingLogoList/apple.svg';
import MonstercatPlayerIconBig from '../assets/StreamingLogoList/monstercat-player.svg';

import TrillerIcon from '../assets/triller.svg';

export const hamburgerMenuListContent: HamburgerMenuListElementI[] = [
  {
    id: 1,
    name: 'Music',
    elements: [
      { id: 1, content: 'Our music' },
      { id: 2, content: 'Instinct' },
      { id: 3, content: 'Uncaged' },
      { id: 4, content: 'Silk' },
    ],
  },

  { id: 2, name: 'Artists' },
  {
    id: 3,
    name: 'About',
    elements: [
      { id: 1, content: 'About Monstercar' },
      { id: 2, content: 'Diversity & Inclusion' },
      { id: 3, content: 'Code of ethics' },
      { id: 4, content: 'Environmental' },
      { id: 5, content: 'Contact us' },
    ],
  },
  { id: 4, name: 'News' },
  {
    id: 5,
    name: 'Events',
    elements: [
      { id: 1, content: 'Monstercat events experience' },
      { id: 2, content: 'Upcoming events' },
    ],
  },
  {
    id: 6,
    name: 'Programming',
    elements: [
      { id: 1, content: 'MonstercatTV' },
      { id: 2, content: 'Call of the wild' },
      { id: 3, content: 'Silk showcase' },
      { id: 4, content: 'Upcoming shows' },
    ],
  },
  { id: 7, name: 'Gold' },
  { id: 8, name: 'Partners' },
  { id: 9, name: 'Press' },
  { id: 10, name: 'Player' },
  { id: 11, name: 'Shop' },
  { id: 12, name: 'Lost civilization' },
];

export const companyLogoList: LogoI[] = [
  { id: 1, alt: 'instagram-icon', src: InstagramIcon },
  { id: 2, alt: 'tiktok-icon', src: TiktokIcon },
  { id: 3, alt: 'twitter-icon', src: TwitterIcon },
  { id: 4, alt: 'twitch-icon', src: TwitchIcon },
  { id: 5, alt: 'facebook-icon', src: FacebookIcon },
  { id: 6, alt: 'discord-icon', src: DiscordIcon },
  { id: 7, alt: 'monstercat-player-icon', src: MonstercatPlayerIcon },
];

export const streamingLogoList: LogoI[] = [
  { id: 1, alt: 'monstercat-player-icon', src: MonstercatPlayerIconBig },
  { id: 2, alt: 'bandcamp-icon', src: BandcampIcon },
  { id: 3, alt: 'soundcloud-icon', src: SoundcloudIcon },
  { id: 4, alt: 'apple-icon', src: AppleIcon },
  { id: 5, alt: 'youtube-icon', src: YoutubeIcon },
  { id: 6, alt: 'spotify-icon', src: SpotifyIcon },
];

export const albumContent: AlbumI = {
  name: 'Level Days',
  artist: 'Conro',
  img: Albumcover,
  releaseDate: 'May 22, 2020',
  songs: [
    { id: 1, title: 'The Small Things', duration: '3:35', artists: ['Conro'] },
    { id: 2, title: 'Without your love', duration: '3:09', artists: ['Conro'] },
    { id: 3, title: 'Therapy', duration: '3:06', artists: ['Conro'] },
    { id: 4, title: 'Fighters', duration: '3:46', artists: ['Conro'] },
    { id: 5, title: 'Way Up', duration: '3:32', artists: ['Conro', 'Nevve'] },
    { id: 6, title: 'Waiting', duration: '3:07', artists: ['Conro'] },
    { id: 7, title: 'Dreaming', duration: '2:57', artists: ['Conro'] },
    { id: 8, title: 'Tatto', duration: '3:29', artists: ['Conro'] },
    { id: 9, title: 'Out for the Night', duration: '3:05', artists: ['Conro'] },
    { id: 10, title: 'Overdue', duration: '2:48', artists: ['Conro'] },
    { id: 11, title: 'Say It', duration: '3:04', artists: ['Conro'] },
    { id: 12, title: 'Here to Stay', duration: '2:44', artists: ['Conro'] },
  ],
  youtubeURL: 'https://www.youtube.com/embed/7nObtWENgxA',
};

export const companyInformationColumnOne: CompanyInformationI[] = [
  { id: 1, content: 'About Monstercat' },
  { id: 2, content: 'Contact us' },
  { id: 3, content: 'Careers' },
  { id: 4, content: 'News' },
  { id: 5, content: 'Press' },
];

export const companyInformationColumnTwo: CompanyInformationI[] = [
  { id: 1, content: 'Terms of Service' },
  { id: 2, content: 'Privacy Policy' },
];

export const formText =
  "Don't miss a thing, stay up to date with the latest news from us.";

export const rightsReserved = '2011 - 2023 © Monstercat, All Rights Reserved';

export const footerAck = [
  "We acknowledge with gratitude the traditional, ancestral and unceded land of the Coast Salish peoples, including the territories of the Sḵwx̱wú7mesh (Squamish), Stó:lō and Səl̓ílwətaʔ/Selilwitulh (Tsleil-Waututh) and xʷməθkʷəy̓əm (Musqueam) Nations, on which Monstercat's Vancouver HQ stands.",
  'We acknowledge the unceded and ancestral territories of the Gabrielino/Tongva peoples on which our LA team live and work.',
];

export const footerLogoList: LogoI[] = [
  { id: 1, src: YoutubeIcon, alt: 'youtube-icon' },
  { id: 2, src: InstagramIcon, alt: 'instagram-icon' },
  { id: 3, src: TiktokIcon, alt: 'tiktok-icon' },
  { id: 4, src: TwitterIcon, alt: 'twitter-icon' },
  { id: 5, src: SpotifyIcon, alt: 'spotify-icon' },
  { id: 6, src: AppleIcon, alt: 'apple-icon' },
  { id: 7, src: TwitchIcon, alt: 'twitch-icon' },
  { id: 8, src: FacebookIcon, alt: 'facebook-icon' },
  { id: 9, src: DiscordIcon, alt: 'discord-icon' },
  { id: 10, src: TrillerIcon, alt: 'triller-icon' },
  { id: 11, src: MonstercatPlayerIcon, alt: 'monstercat-icon' },
];
