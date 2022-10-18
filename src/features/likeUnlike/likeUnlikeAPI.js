import axios from "../../utils/axios";

export const updateLikeUnlike = async ({reaction, id}) => {
  const { data } = await axios.get(`/videos/${id}`);
  if (data) {
    let updateReaction =
      reaction === "like"
        ? {
            likes: data.likes + 1,
          }
        : {
            unlikes: data.unlikes + 1,
          };

    const response = await axios.patch(`/videos/${id}`, updateReaction);
    return response.data;
  }
};



