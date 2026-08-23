'use client'
import React from 'react';
import { Dropdown, Button,Label } from "@heroui/react";
import {useState} from "react";
import { IoIosArrowDown } from 'react-icons/io';

const Filter = () => {
      const [open, setOpen] = useState(false);
    return (
       <div>
      <Dropdown isOpen={open} onOpenChange={setOpen}>
        <Button className="bg-white border border-gray-200 rounded-lg flex items-center justify-center " aria-label="Menu" variant="secondary">
          <span className='text-[#64748B] py-4 px-4'>Filter timeline</span> <IoIosArrowDown className='text-[#64748B]'/>
        </Button>
        <Dropdown.Popover>
          <Dropdown.Menu>
            <Dropdown.Item id="call" textValue="call">
              <Label>Call</Label>
            </Dropdown.Item>
            <Dropdown.Item id="text" textValue="Text">
              <Label>Text</Label>
            </Dropdown.Item>
            <Dropdown.Item id="video" textValue="Video">
              <Label>Video</Label>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown.Popover>
      </Dropdown>
    </div>
    );
};

export default Filter;