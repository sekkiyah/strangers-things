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

export const loginUser = async (username, password) => {
  try {
    return await fetch(`${baseURL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
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
    return await fetch(`${baseURL}/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
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
