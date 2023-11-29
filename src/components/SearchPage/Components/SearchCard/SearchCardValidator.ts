import { IDynamicImage } from "../../../Common/DynamicImage/DynamicImageValidator.ts";

export interface ISearhCardData {
  ID: string;
  Data: {
    Name: string;
    Facts: string[];
    Image: IDynamicImage;
  };
}

export interface ISearchCard {
  data: null | ISearhCardData[];
}
