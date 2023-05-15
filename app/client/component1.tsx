"use client";

import { ReactNode } from "react";
import { useCount } from "../server/component";

export default function ClientPage({ children }: { children: ReactNode }) {
  const [count] = useCount();
  return (
    <div>
      Ini Client Component 1, count = {count}
      <br />
      <br />
      <span>Ini childrennya</span>
      {children}
    </div>
  );
}
