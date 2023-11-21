import { IDynamicImage } from "../../../Common/DynamicImage/DynamicImageValidator";

export interface IDeveloperCard {
  Image: IDynamicImage,
  Nickname: string,
  Facts: string[],
}
