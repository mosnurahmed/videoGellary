import axios from "../../utils/axios";

export const getVideo = async (id, reaction) => {
    const response= await axios.get(`/videos/${id}`);
    

    return response.data;
    
};




