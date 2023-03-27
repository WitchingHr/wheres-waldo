import { PubSub } from './types';

const pubsub: PubSub = {
  events: {},
  subscribe: (eventName, fn) => {
    pubsub.events[eventName] = pubsub.events[eventName] || [];
    pubsub.events[eventName].push(fn);
  },
  unsubscribe: (eventName, fn) => {
    if (pubsub.events[eventName]) {
      for (let i = 0; i < pubsub.events[eventName].length; i++) {
        if (pubsub.events[eventName][i] === fn) {
          pubsub.events[eventName].splice(i, 1);
          break;
        }
      }
    }
  },
  publish: (eventName, data) => {
    if (pubsub.events[eventName]) {
      pubsub.events[eventName].forEach((fn) => {
        fn(data);
      });
    }
  },
};

export default pubsub;