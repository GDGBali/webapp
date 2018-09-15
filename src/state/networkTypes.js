const createTypes = type => {
  const BASE = `${type}`;
  return {
    BASE,
    START: `${BASE}_START`,
    PENDING: `${BASE}_PENDING`,
    SUCCESS: `${BASE}_SUCCESS`,
    FAILURE: `${BASE}_FAILURE`,
    loadingKey: `${BASE}Pending`,
    dataKey: `${BASE}Data`,
  };
};

export const EVENTS_REQ = createTypes('EVENTS_REQ');
export const EVENTS_REQ_START = `events/${EVENTS_REQ.START}`;
