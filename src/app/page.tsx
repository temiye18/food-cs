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
  MetaTags,
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
      <MetaTags
        title="FoodCS | Bridging Creativity and Industry for Groundbreaking Food Innovation"
        description="FoodCS is where food product development experts and businesses collaborate to create groundbreaking solutions. Our platform bridges the gap between creativity and industry needs, driving innovation while fostering meaningful professional connections."
        image="https://res.cloudinary.com/shareupload/image/upload/v1735843121/dg99zuxggmdaov9pzexg.png"
        url="https://res.cloudinary.com/shareupload/image/upload/v1735843121/dg99zuxggmdaov9pzexg.png"
      />
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
