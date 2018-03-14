export const EventManager = {
  events: new Map(),

  on(event, callback) {
    this.events.has(event) || this.events.set(event, []);

    this.events.get(event).push(callback);
  },

  off(event) {
    this.events.delete(event);
  },

  emmit(event, data) {
    if (this.events.has(event)) {
      let listeners = this.events.get(event);
      for(let i = 0; i < listeners.length; i++) {
        listeners[i](data);
      }
    }
  }
}

