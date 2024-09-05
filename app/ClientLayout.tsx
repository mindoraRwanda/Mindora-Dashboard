"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <div className={inter.className}>
      <Provider store={store}>{children}</Provider>
    </div>
  );
}