import React from "react";

interface ListItemProps {
  item: {
    text: string;
    icon: string;
  };
}

function ListItem({ item: { icon, text } }: ListItemProps) {
  return (
    <div className="flex items-center">
      <div className="mr-4 bg-white border border-black rounded-full">
        <img src={icon} className="w-12" />
      </div>
      <p>{text}</p>
    </div>
  );
}

export default ListItem;
