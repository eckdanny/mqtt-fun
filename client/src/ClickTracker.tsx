import React from 'react';
import { useMqtt } from './MqttClient';
import Styles from './ClickTracker.module.css';

const TOPIC = 'clicks';

const ClickTracker: React.FC = () => {
  const [value, publish] = useMqtt(TOPIC);
  const handleClick = () => publish(String((parseInt(value) | 0) + 1));
  return (
    <button className={Styles.Button} onClick={handleClick}>
      Click Me
      {value ? <span className={Styles.Counter}>({value})</span> : null}
    </button>
  );
};

export default ClickTracker;
