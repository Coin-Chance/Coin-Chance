import React from "react";
import {
  HomeHeader,
  HomeWaitList,
  NftAuctions,
  GlobalPromoters,
  EducatingOrphans,
  HowLotteryWorks,
  CoinChangeRoadMap,
  FrequentlyAskedQuestion,
  ContactUs,
  CoinChoiceTokenNomincs,
  PlayLottery,
} from "@organisms";
import { Footer } from "@molecules";
import { Box } from "@mui/material";

export const HomePage = () => {
  return (
    <>
      <head>
        <title>Home</title>
      </head>
      <Box>
        <HomeHeader />
        <HomeWaitList />
        <NftAuctions />
        <PlayLottery />
        <CoinChoiceTokenNomincs />
        <CoinChangeRoadMap />
        <GlobalPromoters />
        <FrequentlyAskedQuestion />
        <EducatingOrphans />
        <HowLotteryWorks />
        <ContactUs />
        <Footer />
      </Box>
    </>
  );
};
