export default {
  nextEvent: state => state.futureEvents[0],
  eventDetails: state => slugUrl =>
    state.futureEvents.find(event => event.slugUrl === slugUrl),
};
