"use client";
import { useState } from "react";
import {
  Hero,
  WhyItMatters,
  Innovation,
  WorldConnect,
  Empowering,
  HowItWorks,
  Banner,
  Faq,
  FooterNav,
  JoinWaitList,
} from "@/components";
import { JoinModal } from "@/ui";

export default function Home() {
  const [showJoinModal, setShowJoinModal] = useState(false);

  function handleOpenModal() {
    setShowJoinModal(true);
  }

  function handleCloseModal() {
    setShowJoinModal(false);
  }
  return (
    <>
      <Hero handleOpenModal={handleOpenModal} />
      <WhyItMatters />
      <Innovation />
      <WorldConnect handleOpenModal={handleOpenModal} />
      <Empowering />
      <HowItWorks />
      <Banner />
      <Faq />
      <FooterNav />
      <JoinWaitList handleOpenModal={handleOpenModal} />
      {showJoinModal && <JoinModal handleCloseModal={handleCloseModal} />}
    </>
  );
}