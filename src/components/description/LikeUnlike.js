import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import likeImage from "../../assets/like.svg";
import unlikeImage from "../../assets/unlike.svg";
import { countLikeUnlike } from "../../features/likeUnlike/likeUnlikeSlice";

export default function LikeUnlike({ id, likes, unlikes }) {
  const [like, setLike] = useState(likes);
  const [unlike, setUnlike] = useState(unlikes);

  
  const {video} = useSelector((state) => state.likeUnlike);
  console.log(`videoLIke:${video.likes}`);
  const dispatch = useDispatch();
  console.log(`"stateLike:${like} "`);

  const likeHandler = (reaction, id) => {
    dispatch(countLikeUnlike({ reaction, id }));
    // setLike((prevLike) => {
    
    //   prevLike = video.video.likes;
    //   console.log(`previous :${prevLike}`);
    //   return video.video.likes;
    // });
    setLike(video.likes)
  };
  const unpLikeHandler = (reaction, id) => {
    dispatch(countLikeUnlike({ reaction, id }));
    setUnlike(video.unlikes)
  };

  return (
    <div className="flex gap-10 w-48">
      <div className="flex gap-1">
        <div className="shrink-0">
          <img
            className="w-5 block"
            src={likeImage}
            alt="Like"
            onClick={() => {
              likeHandler("like", id);
              // setUnlike(video.video.unlikes);
            }}
          />
          <span>{like} </span>
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600"></div>
      </div>
      <div className="flex gap-1">
        <div className="shrink-0">
          <img
            className="w-5 block"
            src={unlikeImage}
            alt="Unlike"
            onClick={() => {
              // setReaction("unlikes");

              unpLikeHandler("unlike", id);
            }}
          />
          <span>{unlike}</span>
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600"></div>
      </div>
    </div>
  );
}
