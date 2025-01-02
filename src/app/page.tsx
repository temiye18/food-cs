"use client";
import { useState } from "react";
import {
  Hero,
  Innovation,
  WorldConnect,
  Empowering,
  HowItWorks,
  Banner,
  Faq,
  FooterNav,
  JoinWaitList,
} from "@/components";
import { ConfettiModal, JoinModal } from "@/ui";

export default function Home() {
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [showConfettiModal, setShowConfettiModal] = useState(false);

  function handleOpenModal() {
    setShowJoinModal(true);
  }

  function handleCloseModal() {
    setShowJoinModal(false);
  }
  function handleOpenConfettiModal() {
    setShowConfettiModal(true);
  }

  function handleCloseConfettiModal() {
    setShowConfettiModal(false);
  }
  return (
    <>
      <Hero handleOpenModal={handleOpenModal} />
      <Innovation />
      <WorldConnect handleOpenModal={handleOpenModal} />
      <Empowering />
      <HowItWorks />
      <Banner />
      <Faq />
      <FooterNav />
      <JoinWaitList handleOpenModal={handleOpenModal} />
      {showJoinModal && (
        <JoinModal
          showJoinModal={showJoinModal}
          handleCloseModal={handleCloseModal}
          handleOpenConfettiModal={handleOpenConfettiModal}
        />
      )}
      {showConfettiModal && (
        <ConfettiModal
          showConfettiModal={showConfettiModal}
          handleCloseConfettiModal={handleCloseConfettiModal}
        />
      )}
    </>
  );
}
