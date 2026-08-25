import { Button, Card } from "@heroui/react";
import React from "react";
import { IoMdAdd } from "react-icons/io";

const Banner = () => {
  return (
    <div className="bg-[#F8FAFC]">
      <div className="lg:px-60 px-6 lg:py-20 py-3 mx-auto pb-15 pt-15 flex flex-col items-center justify-center gap-6 md:gap-10 container">
        {/* title and subtitle */}
        <div className="flex flex-col items-center justify-center gap-4 md:gap-8">
          <div className="text-center space-y-3.5">
            <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl">
              Friends to keep close in your life
            </h2>
            <p className="text-[#64748B]">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the relationships that matter most.
            </p>
          </div>
          <Button className="bg-[#244D3F] text-white rounded-lg">
            <IoMdAdd /> Add a Friend
          </Button>
        </div>

        
        {/* cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-6 gap-y-4 gap-x-4 w-full">
          <Card
            className="rounded-lg drop-shadow-sm py-8 px-8 flex-1 md:min-w-[200px]"
            variant="default"
          >
            <Card.Header className="flex justify-center items-center gap-2">
              <Card.Title className="font-semibold text-[#244D3F] text-lg md:text-3xl">
                8
              </Card.Title>
              <Card.Description className="text-[#64748B] text-center">
                Total Friends
              </Card.Description>
            </Card.Header>
          </Card>

          <Card
            className="rounded-lg drop-shadow-sm py-8 px-8 flex-1 md:min-w-[200px]"
            variant="default"
          >
            <Card.Header className="flex justify-center items-center gap-2">
              <Card.Title className="font-semibold text-[#244D3F] text-lg md:text-3xl">
                3
              </Card.Title>
              <Card.Description className="text-[#64748B] text-center">
                On Track
              </Card.Description>
            </Card.Header>
          </Card>

          <Card
            className="rounded-lg drop-shadow-sm py-8 px-8 flex-1 md:min-w-[200px]"
            variant="default"
          >
            <Card.Header className="flex justify-center items-center gap-2">
              <Card.Title className="font-semibold text-[#244D3F] text-lg md:text-3xl">
                6
              </Card.Title>
              <Card.Description className="text-[#64748B] text-center">
                Need Attention
              </Card.Description>
            </Card.Header>
          </Card>

          <Card
            className="rounded-lg drop-shadow-sm py-8 px-8 flex-1 md:min-w-[200px]"
            variant="default"
          >
            <Card.Header className="flex justify-center items-center gap-2">
              <Card.Title className="font-semibold text-[#244D3F] text-lg md:text-3xl">
                12
              </Card.Title>
              <Card.Description className="text-[#64748B] text-center">
                Interactions This Month
              </Card.Description>
            </Card.Header>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Banner;
