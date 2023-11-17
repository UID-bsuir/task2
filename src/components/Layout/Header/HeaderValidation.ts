export interface IHeader {
  data: {
    Logo: {
      Src: string,
      Alt: string,
    },
    Menu: {
      Title: string,
      Url: string,
    }[],
  }
}
