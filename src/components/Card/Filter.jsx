"use client";
import React from "react";
import { Dropdown, Button, Label } from "@heroui/react";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Filter = ({ setSelected, selected }) => {
  const [open, setOpen] = useState(false);
  const options = [
    { id: "all", label: "All" },
    { id: "Call", label: "Call" },
    { id: "Text", label: "Text" },
    { id: "Video", label: "Video" },
  ];
  return (
    <div>
      <Dropdown isOpen={open} onOpenChange={setOpen}>
        <Button
          className="bg-white border border-gray-200 rounded-lg flex items-center justify-center"
          aria-label="Menu"
          variant="secondary"
        >
          <span className="text-[#64748B] py-4 px-4">
            {selected && selected !== "all"
              ? `Filter: ${selected}`
              : "Filter timeline"}
          </span>
          <IoIosArrowDown className="text-[#64748B]" />
        </Button>
        <Dropdown.Popover>
          <Dropdown.Menu
            onAction={(key) => {
              setSelected(key);
              setOpen(false);
            }}
          >
            {options.map((opt) => (
              <Dropdown.Item key={opt.id} id={opt.id} textValue={opt.label}>
                <Label>{opt.label}</Label>
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown.Popover>
      </Dropdown>
    </div>
  );
};

export default Filter;
