export interface IHeader {
  Data: {
    Logo: {
      Src: string,
      Alt: string,
    },
    Menu: {
      Title: string,
      Url: string,
    }[],
  },
  style?: object;
}
