import React from "react";
import { SideBar } from "./SideBar";

export const Layout = ({ children }) => {
  return (
    <div className="flex min-w-100 min-h-100">
      <SideBar />
      <div className="w-full h-full">{children}</div>
    </div>
  );
};
