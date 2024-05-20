import React from "react";
declare type AvatarPropsType = {
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
declare const Avatar: ({ seed, size, blockSize, colors, }: AvatarPropsType) => React.JSX.Element;
export default Avatar;
