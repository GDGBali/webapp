const createAsyncTypes = type => {
  return {
    LIST: `${type}_LIST`,
    SINGLE: `${type}_SINGLE`,
    PENDING: `${type}_PENDING`,
    SUCCESS_LIST: `${type}_SUCCESS_LIST`,
    SUCCESS_SINGLE: `${type}_SUCCESS_SINGLE`,
    FAILURE: `${type}_FAILURE`,
  };
};

export const EVENTS_REQ = createAsyncTypes('EVENTS_REQ');
