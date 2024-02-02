"use client";
import { AuthGuard } from "@next/guards";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => (
  <AuthGuard>{children}</AuthGuard>
);

export default Layout;
