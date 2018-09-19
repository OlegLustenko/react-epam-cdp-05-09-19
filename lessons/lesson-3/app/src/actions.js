export const incrementCounter = (payload) => {
  return {
    type: 'INCREMENT',
    payload
  };
};























const getData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
};

export const incrementAsync = (payload) => (dispatch, getState) => {
  getData().then(() => {
    dispatch({
      type: 'INCREMENT',
      payload
    });
  });
};
