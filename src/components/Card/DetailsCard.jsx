import { Card, Chip } from "@heroui/react";
import Image from "next/image";
import React from "react";

const DetailsCard = ({ friend }) => {
  const { name, picture, status, tags, days_since_contact, bio, email } = friend;

  const getStatus = (statuses) => {
    if (statuses === "Overdue") return "bg-[#EF4444]";
    if (statuses === "Almost Due") return "bg-[#EFAD44]";
    if (statuses === "On-Track") return "bg-[#244D3F]";
    return "";
  };
  return (
    <div className="flex justify-between items-center gap-3">
        {/* left */}
      <div>
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
          <p>{bio}</p>
        </Card>
      </div>
      <div>

    {/* right */}
      </div>
    </div>
  );
};

export default DetailsCard;
