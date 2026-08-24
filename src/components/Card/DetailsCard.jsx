'use client'
import { addCallInLocalDB, addTextInLocalDB, addVideoInLocalDB, getCallFromLocalDB, getTextFromLocalDB, getVideoFromLocalDB } from "@/utils/localDB";
import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import React, { useState } from "react";
import { FiArchive, FiPhoneCall } from "react-icons/fi";
import { IoMdVideocam } from "react-icons/io";
import { LuMessageSquareText } from "react-icons/lu";
import { PiBellZBold } from "react-icons/pi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { toast } from "react-toastify";

const DetailsCard = ({ friend }) => {
  const {
    name,
    picture,
    status,
    tags,
    days_since_contact,
    bio,
    email,
    next_due_date,
    goal,
    interactions_this_month,
  } = friend;

  const getStatus = (statuses) => {
    if (statuses === "Overdue") return "bg-[#EF4444]";
    if (statuses === "Almost Due") return "bg-[#EFAD44]";
    if (statuses === "On-Track") return "bg-[#244D3F]";
    return "";
  };

// calls
  const [storeCalls, setStoreCalls] = useState(() => getCallFromLocalDB());

  const handleCalls = (currentCall) =>{

    addCallInLocalDB(currentCall)
    const isCalls = storeCalls.find((friend) => friend.id === currentCall.id);
    if(!isCalls){
        setStoreCalls([...storeCalls, currentCall]);
    }
     toast.success(`Call with ${currentCall.name}`);
  }
  
// text

  const [storeTexts, setStoreTexts] = useState(() => getTextFromLocalDB());

  const handleText = (currentText) =>{

    addTextInLocalDB(currentText);
    const isCalls = storeTexts.find((friend) => friend.id === currentText.id);
    if(!isCalls){
        setStoreTexts([...storeTexts, currentText]);
    }
     toast.success(`Text with ${currentText.name}`);
  }

//   videoCall

const [storeVideo, setStoreVideo] = useState(() => getVideoFromLocalDB());

  const handleVideoCalls = (currentVideo) =>{

    addVideoInLocalDB(currentVideo);
    const isCalls = storeVideo.find((friend) => friend.id === currentVideo.id);
    if(!isCalls){
        setStoreVideo([...storeVideo, currentVideo]);
    }
     toast.success(`Video call with ${currentVideo.name}`);
  }

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-3 lg:gap-6">
      {/* left */}
      <div className="max-w-[258px] flex flex-col gap-4">
        <Card className="min-w-[200px] gap-3 items-center justify-center rounded-lg">
          <Image
            alt="Indie Hackers community"
            width={56}
            height={56}
            className="aspect-square w-14 rounded-full object-cover"
            loading="lazy"
            src={picture}
          />
          <Card.Header className="text-center">
            <Card.Title className="font-semibold">{name}</Card.Title>
          </Card.Header>
          <Card.Footer className="flex flex-col gap-2">
            <Chip className={`font-medium text-white ${getStatus(status)}`}>
              {status}
            </Chip>
            <div className="flex items-center justify-center gap-1">
              {tags.map((tag, index) => (
                <Chip
                  className="bg-[#CBFADB] text-[#244D3F] font-medium"
                  key={index}
                >
                  {tag}
                </Chip>
              ))}
            </div>
          </Card.Footer>
          <p className="text-[#64748B] font-medium text-sm">{bio}</p>
          <p className="text-[#64748B] text-xs">Preferred: {email}</p>
        </Card>

        <Button className="rounded-lg border bg-white w-full py-6 text-black border-[#E9E9E9]">
          <div className="flex items-center justify-center gap-2">
            <PiBellZBold />
            <h2 className="font-medium text-sm">Snooze 2 weeks</h2>
          </div>
        </Button>
        <Button className="rounded-lg border bg-white w-full py-6 text-black border-[#E9E9E9]">
          <div className="flex items-center justify-center gap-2">
            <FiArchive />
            <h2 className="font-medium text-sm">Archive</h2>
          </div>
        </Button>
        <Button className="rounded-lg border bg-white w-full py-6 border-[#E9E9E9]">
          <div className="flex items-center justify-center gap-2 text-red-500">
            <RiDeleteBin5Line />
            <h2 className="font-medium text-sm">Delete</h2>
          </div>
        </Button>
      </div>

      {/* right */}
      <div className="flex flex-col gap-6 w-full md:max-w-1/2 sm:px-0">
        {/* upper card */}
        <div className="flex gap-2 sm:gap-4 w-full">
          <Card
            className="rounded-lg drop-shadow-sm py-4 px-2 sm:py-6 sm:px-4 md:py-8 md:px-8 flex-1 min-w-0"
            variant="default"
          >
            <Card.Header className="flex flex-col justify-center items-center gap-1">
              <Card.Title className="font-semibold text-[#244D3F] text-lg lg:text-2xl">
                {days_since_contact}
              </Card.Title>
              <Card.Description className="text-[#64748B] text-center text-[10px] sm:text-xs md:text-xs">
                Days Since Contact
              </Card.Description>
            </Card.Header>
          </Card>

          <Card
            className="rounded-lg drop-shadow-sm py-4 px-2 sm:py-6 sm:px-4 md:py-8 md:px-8 flex-1 min-w-0"
            variant="default"
          >
            <Card.Header className="flex flex-col justify-center items-center gap-1">
              <Card.Title className="font-semibold text-[#244D3F] text-lg md:text-2xl">
                {goal}
              </Card.Title>
              <Card.Description className="text-[#64748B] text-center text-[10px] sm:text-xs md:text-sm">
                Goal (Days)
              </Card.Description>
            </Card.Header>
          </Card>

          <Card
            className="rounded-lg drop-shadow-sm py-4 px-2 sm:py-6 sm:px-4 md:py-8 md:px-8 flex-1 min-w-0"
            variant="default"
          >
            <Card.Header className="flex flex-col justify-center items-center gap-1">
              <Card.Title className="font-semibold text-[#244D3F] lg:text-2xl">
                {next_due_date}
              </Card.Title>
              <Card.Description className="text-[#64748B] text-center text-[10px] sm:text-xs md:text-sm">
                Next Due
              </Card.Description>
            </Card.Header>
          </Card>
        </div>

        {/* middle */}
        <Card className="rounded-lg px-4 py-4 sm:px-6 sm:py-5">
          <div className="flex justify-between items-center gap-2">
            <h2 className="text-[#244D3F] font-medium text-base">
              Relationship Goal
            </h2>

            <Button
              variant="outline"
              size="sm"
              className="rounded-lg text-xs sm:text-sm px-3"
            >
              Edit
            </Button>
          </div>

          <h2 className="text-[#64748B] text-sm sm:text-base mt-2">
            Connect every{" "}
            <span className="font-semibold text-black">
              {interactions_this_month} days
            </span>
          </h2>
        </Card>

        {/* last */}
        <Card className="rounded-lg px-4 py-4 sm:px-6 sm:py-5">
          <h2 className="text-[#244D3F] font-medium text-base sm:text-lg mb-3">
            Quick Check in
          </h2>

          <div className="flex items-center justify-center gap-2 sm:gap-4 w-full">
            {/* Call */}
            <Button onClick={()=> handleCalls(friend)} className="flex flex-col bg-[#F8FAFC] w-full border border-gray-200 rounded-lg drop-shadow-sm py-8 px-8">
                <FiPhoneCall className="font-semibold text-[#244D3F] text-lg md:text-2xl"/>
                <span className="text-black text-sm">call</span>
            </Button>
            

            {/* Text */}
            <Button onClick={()=> handleText(friend)} className="flex flex-col bg-[#F8FAFC] w-full border border-gray-200 rounded-lg drop-shadow-sm  py-8 px-8">
                <LuMessageSquareText className="font-semibold text-[#244D3F] text-lg md:text-2xl"/>
                 <span className="text-black text-sm">Text</span>
            </Button>
            

            {/* Video */}
            <Button onClick={()=> handleVideoCalls(friend)} className="flex flex-col bg-[#F8FAFC] w-full border border-gray-200 rounded-lg drop-shadow-sm  py-8 px-8">
                <IoMdVideocam className="font-semibold text-[#244D3F] text-lg md:text-2xl"/>
                <span className="text-black text-sm">Video</span>
            </Button>
            
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DetailsCard;
