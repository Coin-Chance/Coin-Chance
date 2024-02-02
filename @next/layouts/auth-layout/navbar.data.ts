import { GUEST_PATH } from "@routes";
interface INavBarData {
  id: number;
  name: string;
  link: string;
}

export const authNavData: INavBarData[] = [
  { id: 1, name: "Home", link: GUEST_PATH.root },
  { id: 2, name: "Lottery", link: "#" },
  { id: 3, name: "NFT Auctions", link: "#" },
  { id: 4, name: "Airdrop", link: "#" },
  { id: 5, name: "Referrals", link: GUEST_PATH?.referrals },
];
