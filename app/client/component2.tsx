"use client";

import { useCount } from "../server/component";

export default function ClientComponent2() {
  const [count, setCount] = useCount();
  return (
    <div>
      Ini Client Component 2, count = {count}
      <br />
      <button onClick={() => setCount((c) => c + 1)}>increment counter</button>
    </div>
  );
}
