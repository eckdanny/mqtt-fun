import React, { createContext, useEffect, useRef } from 'react';
import createClient from './Client';
import { MqttClient, IClientOptions } from 'mqtt';

export const Context = createContext<MqttClient>(null!);
export const Provider = Context.Provider;
export const Consumer = Context.Consumer;

export const MqttProvider: React.FC<{
  url?: any;
  options?: IClientOptions;
}> = ({ children, url, options }) => {
  const client = useRef<MqttClient>(createClient(url, options));
  useEffect(
    () => () => {
      client.current.end();
    },
    []
  );
  return <Provider value={client.current}>{children}</Provider>;
};

export function useMqtt() {
  return [];
}
