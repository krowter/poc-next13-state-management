import { createDataSource } from "@/utils/data-source";
import ClientPage2 from "../client/component2";
import Script from "next/script";

const countStore = createDataSource(1);

export const useCount = countStore.useClientHook;

// mock db calls
function getCountFromDB() {
  return Promise.resolve(123);
}

export default async function ServerComponent() {
  const count = await getCountFromDB();
  countStore.setServerValue(count);

  return (
    <div>
      Ini Server Component count = {countStore.getServerValue()}
      <Script
        id="script-id"
        dangerouslySetInnerHTML={{
          __html: `window.__DATA_STORE_VALUE__  = ${count}`
        }}
      />
      <ClientPage2 />
    </div>
  );
}
