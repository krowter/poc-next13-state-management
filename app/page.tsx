import ServerPage from "./server/component";
import ClientPage from "./client/component1";

export default function Home() {
  return (
    <ClientPage>
      {/* remove following line on TS 5.1 */}
      {/* @ts-expect-error Async Server Component */}
      <ServerPage />
    </ClientPage>
  );
}
