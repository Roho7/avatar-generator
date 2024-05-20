import React from "react";

type AvatarPropsType = {
  seed: string;
  size?: number;
  blockSize?: number;
  colors?: {
    skin?: string;
    eye?: string;
    hair?: string;
    bg?: string;
  };
};

const Avatar = ({
  seed,
  size = 100,
  blockSize = 10,
  colors = {},
}: AvatarPropsType) => {
  const generateColor = (type: string, defaultColor: string) => {
    // A simple hash function to get consistent colors based on seed and type
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      hash = seed.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = "#";
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8 + type.charCodeAt(0))) & 0xff;
      color += ("00" + value.toString(16)).substr(-2);
    }
    return color || defaultColor;
  };

  const skinColor = colors.skin || generateColor("skin", "#f5d6b3");
  const eyeColor = colors.eye || generateColor("eye", "#ab4848");
  const hairColor = colors.hair || generateColor("hair", "#704e3b");
  const bgColor = colors.bg || "#f5e8d6";

  const avatarData = [
    // A predefined 2D array representing the avatar's pixel layout
    [
      hairColor,
      hairColor,
      hairColor,
      hairColor,
      hairColor,
      hairColor,
      hairColor,
      hairColor,
      hairColor,
      hairColor,
    ],
    [
      hairColor,
      hairColor,
      hairColor,
      hairColor,
      hairColor,
      hairColor,
      hairColor,
      hairColor,
      hairColor,
      hairColor,
    ],
    [
      skinColor,
      skinColor,
      skinColor,
      skinColor,
      skinColor,
      skinColor,
      skinColor,
      skinColor,
      skinColor,
      skinColor,
    ],
    [
      skinColor,
      eyeColor,
      eyeColor,
      skinColor,
      skinColor,
      skinColor,
      eyeColor,
      eyeColor,
      skinColor,
      skinColor,
    ],
    [
      skinColor,
      skinColor,
      skinColor,
      skinColor,
      skinColor,
      skinColor,
      skinColor,
      skinColor,
      skinColor,
      skinColor,
    ],
    [
      skinColor,
      skinColor,
      skinColor,
      skinColor,
      skinColor,
      skinColor,
      skinColor,
      skinColor,
      skinColor,
      skinColor,
    ],
    [
      skinColor,
      skinColor,
      skinColor,
      skinColor,
      skinColor,
      skinColor,
      skinColor,
      skinColor,
      skinColor,
      skinColor,
    ],
    [
      skinColor,
      skinColor,
      skinColor,
      skinColor,
      skinColor,
      skinColor,
      skinColor,
      skinColor,
      skinColor,
      skinColor,
    ],
    [
      skinColor,
      skinColor,
      skinColor,
      skinColor,
      skinColor,
      skinColor,
      skinColor,
      skinColor,
      skinColor,
      skinColor,
    ],
    [
      skinColor,
      skinColor,
      skinColor,
      skinColor,
      skinColor,
      skinColor,
      skinColor,
      skinColor,
      skinColor,
      skinColor,
    ],
  ];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      {avatarData.map((row, rowIndex) =>
        row.map((color, colIndex) => (
          <rect
            key={`${rowIndex}-${colIndex}`}
            x={colIndex * blockSize}
            y={rowIndex * blockSize}
            width={blockSize}
            height={blockSize}
            fill={color}
          />
        )),
      )}
    </svg>
  );
};

export default Avatar;
