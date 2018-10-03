export const usersAPI = {
  getUsers() {
    return fetch('/users-random')
      .then(data => data.json())
      .catch(console.error);
  },
};