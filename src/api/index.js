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

export const getAllMessages = async () => {
  try {
    console.log('all messages');
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
    }).then((response) => response.json());
  } catch (err) {
    console.log('error registering user');
  }
};

export const getUserData = async (jwt) => {
  try {
    const header = makeHeaders(jwt);
    return await fetch(`${baseURL}/users/me`, {
      headers: header,
    }).then((response) => response.json());
  } catch (err) {
    console.error(err);
  }
};

export const createPost = async (post, jwt) => {
  try {
    const header = makeHeaders(jwt);
    return await fetch(`${baseURL}/posts`, {
      method: 'POST',
      headers: header,
      body: JSON.stringify({
        post: post,
      }),
    }).then((response) => response.json());
  } catch (err) {
    console.error(err);
  }
};

export const sendMessage = async (message, messageId, jwt) => {
  try {
    const header = makeHeaders(jwt);
    return await fetch(`${baseURL}/posts/${messageId}/messages`, {
      method: 'POST',
      headers: header,
      body: JSON.stringify({
        message: message,
      }),
    }).then((response) => response.json());
  } catch (err) {
    console.error(err);
  }
};

export const deleteMessage = async (messageId, jwt) => {
  console.log('deleted');
};
