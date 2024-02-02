import { StaticImageData } from "next/image";

export interface IAuctionCard {
  image: StaticImageData;
  amount: number | string;
  id: string;
  enterData: string | number;
  name: string;
  hours: string;
}
