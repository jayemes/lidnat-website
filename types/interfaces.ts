import React from "react";

export interface LayoutChildren {
  children: React.ReactNode;
}

export interface Content {
  id: string;
  label: string;
  content: string;
}

export interface ButtonProps {
  styles?: string;
  content: string | undefined;
}

export interface ServiceProps {
  src: StaticImageData;
  title: string | undefined;
  text: string | undefined;
  buttonContent: string | undefined;
  buttonStyles: string;
}

export interface TitleProps {
  content: string | undefined;
}

export interface ContentTextProps {
  content: string | undefined;
}

export interface ContentListProps {
  content: {
    icon?: any;
    label: string;
  }[];
}
