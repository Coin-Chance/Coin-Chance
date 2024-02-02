"use client";
import { RootLayout } from "@layouts";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "./page.module.css";

const InterFont = Inter({
  subsets: ["latin"],
  display: "swap",
});
interface LayoutProps {
  children: ReactNode;
}
function Layout(props: LayoutProps): JSX.Element {
  const { children } = props;

  return (
    <html lang="en">
      <body
        className={`${InterFont.className}`}
        style={{ margin: "0px !important" }}
      >
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}

export default Layout;
