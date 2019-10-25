import axios from 'axios';

const baseUrl = '/api/colors';

const addColor = async (color, user) => {
  const request = await axios.post(baseUrl, { user, color });
  return request.data;
};

export default { addColor };
