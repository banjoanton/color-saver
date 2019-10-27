import axios from 'axios';

const baseUrl = '/api/colors';

const addColor = async (color, user) => {
  const request = await axios.post(baseUrl, { user, color });
  return request.data;
};

const removeColor = async (color, user) => {
  const request = await axios.put(`/api/users/${user}`, { user, color });
  return request.data;
};

export default { addColor, removeColor };
