const baseURL = 'https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-PT';

const makeHeaders = (jwt) => {
  return jwt
    ? {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      }
    : {
        'Content-Type': 'application/json',
      };
};

export const getAllPosts = async () => {
  try {
    return await fetch(`${baseURL}/posts`)
      .then((response) => response.json())
      .then((result) => result.data.posts);
  } catch (err) {
    console.error(err);
  }
};

export const loginUser = async (username, password) => {
  try {
    const header = makeHeaders();
    return await fetch(`${baseURL}/users/login`, {
      method: 'POST',
      headers: header,
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    }).then((response) => response.json());
  } catch (err) {
    console.error(err);
  }
};

export const registerUser = async (username, password) => {
  try {
    const header = makeHeaders();
    return await fetch(`${baseURL}/users/register`, {
      method: 'POST',
      headers: header,
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    }).then((result) => result.json());
  } catch (err) {
    console.log('error registering user');
  }
};

export const getUserData = async (jwt) => {
  try {
    const header = makeHeaders(jwt);
    return await fetch(`${baseURL}/users/me`, {
      headers: header,
    })
      .then((response) => response.json())
      .then((result) => result.data);
  } catch (err) {
    console.error(err);
  }
};

export const createPost = async (post, jwt) => {
  return 'Created post';
};
