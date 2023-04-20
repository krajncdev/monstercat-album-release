export interface HamburgerMenuListElementI {
  id: number;
  name: string;
  elements?: {
    id: number;
    content: string;
  }[];
}

export interface LogoI {
  id: number;
  src: string;
  alt: string;
}

export interface SongI {
  id: number;
  artists: string[];
  title: string;
  duration: string;
}

export interface AlbumI {
  name: string;
  artist: string;
  img: string;
  releaseDate: string;
  songs: SongI[];
  youtubeURL: string;
}

export interface CompanyInformationI {
  id: number;
  content: string;
}
