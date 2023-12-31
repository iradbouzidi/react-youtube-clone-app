import axios from "axios";

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": process.env.REACT_APP_YOUTUBE_API_HOST,
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_YOUTUBE_API_URL}/${url}`,
    options
  );

  return data;
};
