import {EventManager} from './EventManager';

export function bindEvents(events) {
  let event_names = Object.keys(events);
  for(let i = 0; i < event_names.length; i++) {
    let event = event_names[i];
    EventManager.on(event, events[event]);
  }
}