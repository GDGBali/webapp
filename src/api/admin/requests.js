import api from '@api';

const postRequest = ({ endpoint, data }) =>
  api.post(endpoint, {
    ...data,
  });

const request = async ({ endpoint, options }) => {
  try {
    const { data } = options;
    const response = await postRequest({ endpoint, data: { ...data } });
    return response.data;
  } catch (error) {
    return error;
  }
};

export default request;
