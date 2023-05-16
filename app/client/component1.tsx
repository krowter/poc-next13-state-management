"use client";

import { ReactNode } from "react";
import { useCount } from "../server/component";

export default function ClientPage({ children }: { children: ReactNode }) {
  const [count] = useCount();
  return (
    <div>
      This is Client Component 1, count = {count}
      <br />
      <br />
      <span>the children</span>
      {children}
    </div>
  );
}
