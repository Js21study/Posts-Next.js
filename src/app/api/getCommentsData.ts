import axios from 'axios';

export const getCommentsData = async (id: number) => {
  const options = {
    method: 'GET',
    url: `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
  };

  try {
    const response = await axios(options);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
