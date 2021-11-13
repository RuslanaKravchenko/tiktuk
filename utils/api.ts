const axios = require('axios').default;

axios.defaults.baseURL = process.env.REGUEST_URL;
axios.defaults.headers.common['x-rapidapi-host'] = process.env.RAPIDARI_HOST;
axios.defaults.headers.common['x-rapidapi-key'] = process.env.RAPIDARI_KEY;

export async function getTrending() {
  let trending;
  try {
    const response = await axios.get('/trending/feed');
    trending = response.data;
  } catch (error) {
    console.log(error);
  }

  if (trending == null || trending.length === 0) {
    return null;
  }

  return trending;
}

export async function getUserInfo(name: string) {
  let user;
  try {
    const response = await axios.get(`/user/info/${name}`);
    user = response.data;
  } catch (error) {
    console.log(error);
  }

  if (!user) {
    return null;
  }

  return user;
}

export async function getUserPosts(name: string) {
  let posts;
  try {
    const response = await axios.get(`/user/feed/${name}`);
    posts = response.data;
  } catch (error) {
    console.log(error);
  }

  if (!posts || posts.length === 0) {
    return null;
  }

  return posts;
}
