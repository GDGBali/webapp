export default {
  nextEvent: state => state.list[0],
  eventDetails: state => slugUrl =>
    state.list.find(event => event.slugUrl === slugUrl),
  eventSpeakers: () => event => event.speakers,
};
