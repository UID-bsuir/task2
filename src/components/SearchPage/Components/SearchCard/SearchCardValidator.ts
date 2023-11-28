import { IDynamicImage } from "../../../Common/DynamicImage/DynamicImageValidator.ts";

export interface ISearchCard {
  data: null | {
    ID: string,
    Data: {
      Name: string, 
      Facts: string[], 
      Image:   IDynamicImage,
    }
  }[];
}
