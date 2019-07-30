import { useContext, useEffect, useState, useCallback } from 'react';
import { Context } from './Context';
import { IClientPublishOptions } from 'mqtt';

function useMqttTopic(
  topic: string,
  options?: { publishOptions: IClientPublishOptions }
) {
  const publishOptions = (options && options.publishOptions) || {
    qos: 0,
    retain: true,
  };
  const client = useContext(Context);
  const [state, setState] = useState<string>(null!);
  const publish = useCallback(
    (message: string) => {
      client.publish(topic, message, publishOptions);
    },
    [client, topic, publishOptions]
  );
  useEffect(() => {
    client.subscribe(topic);
    client.on('message', (msgTopic, payload) => {
      if (msgTopic === topic) setState(payload.toString());
    });
    return () => {
      client.unsubscribe(topic);
    };
  }, [client, topic]);
  return [state, publish] as [typeof state, typeof publish];
}

export default useMqttTopic;
