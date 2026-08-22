import { Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FriendsCard = ({ friend }) => {
  const { id, name, picture, status, tags, days_since_contact } = friend;

  const getStatus = (statuses) =>{
    if (statuses === "Overdue") return "bg-[#EF4444]";
    if (statuses === "Almost Due") return "bg-[#EFAD44]";
    if (statuses === "On-Track") return "bg-[#244D3F]";
    return "";
  }
  return (
    <Link href={`/Friends/${id}`}>
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
          <Card.Title>{name}</Card.Title>
          <Card.Description>{days_since_contact}d ago</Card.Description>
        </Card.Header>
        <Card.Footer className="flex flex-col gap-2">
          <div className="flex items-center justify-center gap-1">
            {tags.map((tag, index) => (
              <Chip className="bg-[#CBFADB] text-[#244D3F] font-medium" key={index}>{tag}</Chip>
            ))}
          </div>

          <Chip className={`font-medium text-white ${getStatus(status)}`}>{status}</Chip>
        </Card.Footer>
      </Card>
    </Link>
  );
};

export default FriendsCard;
