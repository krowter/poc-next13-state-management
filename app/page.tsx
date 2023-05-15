import ServerPage from "./server/component";
import ClientPage from "./client/component1";

export default function Home() {
  return (
    <ClientPage>
      {/* di TS 5.1 harusnya udah ngga perlu line bawah */}
      {/* @ts-expect-error Async Server Component */}
      <ServerPage />
    </ClientPage>
  );
}
