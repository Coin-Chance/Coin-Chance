"use client";
import { GuestGuard } from "@next/guards";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => (
  <GuestGuard>{children}</GuestGuard>
);

export default Layout;
