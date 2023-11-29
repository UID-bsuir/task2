export interface Database {
  Header: Header
  Footer: Footer
  MainPage: MainPage
  SearchPage: SearchPage
  ArtistPage: ArtistPage
  NotFoundPage: NotFoundPage
  Artists: Artist[]
}

export interface Header {
  Logo: Logo
  Menu: Menu[]
}

export interface Logo {
  Src: string
  Alt: string
}

export interface Menu {
  Title: string
  Url: string
}

export interface Footer {
  Logo: Logo2
  Text: string
}

export interface Logo2 {
  Src: string
  Alt: string
}

export interface MainPage {
  Header: Header2
  ArtistOfTheDay: ArtistOfTheDay
  ProjectInfo: ProjectInfo
  Developers: Developers
}

export interface Header2 {
  Title: string
  SubInfo: string
  Button: string
}

export interface ArtistOfTheDay {
  Title: string
  SubTitle: string
}

export interface ProjectInfo {
  Title: string
  Facts: Fact[]
}

export interface Fact {
  Title: string
  Subtitle: string
  Info: string[]
}

export interface Developers {
  Title: string
  Devs: Dev[]
  Note: Note
}

export interface Dev {
  Nickname: string
  GHLink: string
  Facts: string[]
  ImgSrc: string
}

export interface Note {
  Title: string
  Info: string
}

export interface SearchPage {
  Hint: string
}

export interface ArtistPage {
  Places: Places
  Video: Video
  Gallery: Gallery
}

export interface Places {
  Title: string
}

export interface Video {
  Title: string
}

export interface Gallery {
  Title: string
}

export interface NotFoundPage {
  Title: string
  Button: string
}

export interface Artist {
  ID: string
  Name: string
  Years: string
  ShortInfo: string
  QuickFacts: string[]
  Biography: Biography[]
  Places: Places2
  Video: Video2
  Gallery: string[]
}

export interface Biography {
  date: string
  info: string
}

export interface Places2 {
  Latitude: number
  Longitude: number
  Title: string
  Description: string
}

export interface Video2 {
  Link: string
}
