export default {
  nextEvent: state => state.future[0],
  eventSpeakers: () => event => event.speakers,
};
