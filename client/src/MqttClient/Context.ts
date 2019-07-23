import createClient from './Client';
import { createContext } from 'react';
import { MqttClient } from 'mqtt';

export const Context = createContext<MqttClient>(createClient());
export const Provider = Context.Provider;
export const Consumer = Context.Consumer;
