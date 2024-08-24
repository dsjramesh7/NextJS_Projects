import React from "react";
import { contactData } from "../addNewContact/type";

type Avatarprops = {
  data: contactData;
};

function getRandomHexColor(): string {
  const randomColor = Math.floor(Math.random() * 16777215);
  const hexColor = randomColor.toString(16).padStart(6, "0");
  return `#${hexColor}`;
}

const getInitials = (word: string): string => {
  const result = word.split(" ").map((initial) => initial.charAt(0));
  return result.join("");
};

const Avatar = ({ data }: Avatarprops) => {
  const result = getInitials(data?.name);

  return (
    <div
      className={`h-24 flex justify-center items-center rounded-lg w-24 m-auto mt-2 `}
      style={{
        backgroundColor: getRandomHexColor(),
      }}
    >
      <span className=" text-primary-2 font-bold text-3xl">{result}</span>
    </div>
  );
};

export default Avatar;
