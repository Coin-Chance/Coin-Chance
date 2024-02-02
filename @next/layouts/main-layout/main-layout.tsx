import React from "react";
import { AuthLayout } from "../auth-layout";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return <AuthLayout>{children}</AuthLayout>;
};
