import axios from 'axios';

const request = async (store, { url, types }) => {
  store.commit(types.PENDING, { value: true });

  try {
    const response = await axios(url, {});
    const responseData = response.data;
    return store.commit(types.SUCCESS, { responseData });
  } catch (error) {
    // return store.commit(types.FAILURE, { data });
    console.error(error.message);
  } finally {
    store.commit(types.PENDING, { value: false });
  }
};

export default request;
