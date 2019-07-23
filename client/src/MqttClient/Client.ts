import mqtt from 'mqtt';

export default () => {
  return mqtt.connect(`mqtt://localhost:9001`);
};
