// import db from '@api/database';
import api from '@api';

export const registerEvent = async (fields, eventId) => {
  const response = await api
    .post('/attendees', {
      attendee: {
        registeredAt: new Date(),
        eventId: eventId,
      },
      user: {
        ...fields,
      },
    })
    .catch(err => ({ error: true, err }));
  return response;
};

export const postSubmission = async ({ reasons, submissionType }) => {
  const response = await api
    .post('/submissions', {
      reasons,
      submissionType,
    })
    .catch(err => ({ error: true, err }));
  return response;
};

// TECHNICAL DEBT - Refactor to vuex
export const getUserProfile = async () => {
  const response = await api
    .get('/profile')
    .catch(err => ({ error: true, err }));
  return response;
};
