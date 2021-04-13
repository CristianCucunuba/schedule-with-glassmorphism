import React from "react";
import GlassBox from "./GlassBox";

interface ListItemProps {
  item: {
    text: string;
    icon: string;
  };
}

function ListItem({ item: { icon, text } }: ListItemProps) {
  return (
    <div className="flex items-center cursor-pointer">
      <GlassBox className="box-content flex-shrink-0 p-2 mr-2 rounded-full w-9">
        <img src={icon} className="w-full h-full" />
      </GlassBox>
      <p className="flex-1">{text}</p>
    </div>
  );
}

export default ListItem;
