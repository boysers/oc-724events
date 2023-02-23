/** @param {any[]} events */
// eslint-disable-next-line import/prefer-default-export
export function getLastEvent(events) {
  if (!events) return undefined;
  const lastEl = events[events.length - 1]
  if (!lastEl?.date) return lastEl;
  events.sort((evtA, evtB) =>
    new Date(evtA.date) > new Date(evtB.date) ? -1 : 1
  );
  return events[0];
}
