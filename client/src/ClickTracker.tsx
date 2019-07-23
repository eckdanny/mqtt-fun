import React, { useContext, useState, useEffect, useCallback } from 'react';
import { Context } from './MqttClient';
import Styles from './ClickTracker.module.css';

const TOPIC = 'clicks';

const ClickTracker: React.FC = () => {
  const client = useContext(Context);
  const [count, setCount] = useState(0);
  useEffect(() => {
    client.subscribe(TOPIC);
    client.on('message', (topic, payload) => {
      if (topic === TOPIC) setCount(parseInt(payload.toString(), 10));
    });
  }, [client]);
  const handleClick = useCallback(() => {
    client.publish(TOPIC, String(count + 1), { qos: 0, retain: true });
  }, [client, count]);
  return (
    <button className={Styles.Button} onClick={handleClick}>
      Click Me
      {count ? <span className={Styles.Counter}>({count})</span> : null}
    </button>
  );
};

export default ClickTracker;
