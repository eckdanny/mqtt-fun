## MQTT + React Experiments

Just doing some independent play with MQTT and React.

![mqtt-fun](https://user-images.githubusercontent.com/3521444/61753928-042f7800-ad66-11e9-9da7-f61984c12e16.gif)

### Getting Started

Clone this repo. Then

```sh
yarn start:mosquitto
```

and in another window/pane:

```sh
yarn start:client
```

**OR**

with Docker:

```sh
docker-compose up
```

Then open http://localhost:3000 in a browser.

_Et Voilà!_

### Why does this exist?

Last time I touched websockets was ages ago with socket.io, rabbitmq, and AngularJS. I was curious to try the `mqtt` package from npm, play with MQTT (mosquitto broker) and React now. This little coding kata meets those goals introducing minimal change ontop of a CRA scaffold. Subscriptions implemented with Context and Hooks.
