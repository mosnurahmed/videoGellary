import axios from "../../utils/axios";
// http://jsonplaceholder.typicode.com/posts?_start=0&_end=10 returns 10 results (rank 0 to 9)

export const getVideos = async (tags, search, page, authors) => {
  let queryString = "";
  let lim = 5;
  let end = lim * page;
  let start = end - lim;
  let queryLimit = `start=${start}&_end=${end}`;
  console.log(`api :${authors}`);

  if (authors !== null) {
    let author = authors.split(" ");
    queryString += author.map((author) => `author_like=${author}`).join("&");
  }
  if (tags?.length > 0) {
    queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
  }

  if (search !== "") {
    queryString += `&q=${search}`;
  }

  const response = await axios.get(`/videos/?${queryString}_${queryLimit}`);

  return response.data;
};
