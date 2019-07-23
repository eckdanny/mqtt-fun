import { useContext } from 'react'
import { Context as mqttClientContext } from './Context'

export const useMqttClient = () => {
  const client = useContext(mqttClientContext)
}
