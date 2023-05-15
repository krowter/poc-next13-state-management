import { Dispatch, SetStateAction } from "react";
import { useClientHook } from "@/hooks/client-store";

export type StoreValueSetter<T> = Dispatch<SetStateAction<T>>;

export type Store<T> = ReturnType<typeof createStore<T>>;
export type DataSource<T> = ReturnType<typeof createDataSource<T>>;


export function createDataSource<StoreValue>(defaultValue: StoreValue) {
  const store = createStore(defaultValue) as Store<StoreValue>;

  return {
    getServerValue: store.get,
    setServerValue: store.set,
    useClientHook: () => useClientHook(store),
  };
}


function createStore<StoreValue>(defaultValue: StoreValue) {
  let store = defaultValue;

  const subscribers = new Set<StoreValueSetter<StoreValue>>();

  function subscribe(subscriberFn: StoreValueSetter<StoreValue>) {
    subscribers.add(subscriberFn);

    return () => subscribers.delete(subscriberFn);
  }

  const setter: StoreValueSetter<StoreValue> = function (newValue) {
    if (newValue instanceof Function) {
      store = newValue(store);
    } else {
      store = newValue;
    }

    subscribers.forEach((fn) => fn(store));
  };

  return {
    get: () => store,
    set: setter,
    subscribe,
  };
}
