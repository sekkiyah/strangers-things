const baseURL = 'https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-PT';

export const getPosts = async () => {
  try {
    return await fetch(`${baseURL}/posts`)
      .then((response) => response.json())
      .then((result) => result);
  } catch (err) {
    console.error(err);
  }
};
