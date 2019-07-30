import mqtt, { MqttClient, IClientOptions } from 'mqtt';

export default (url: any, options?: IClientOptions | undefined): MqttClient => {
  return mqtt.connect(url, options);
};
