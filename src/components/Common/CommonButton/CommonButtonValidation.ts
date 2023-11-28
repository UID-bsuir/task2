export interface ICommonButton {
  Text: string,
  Type: "button" | "submit" | "reset";
  Url: string;
  style?: object;
}
