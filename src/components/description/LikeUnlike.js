import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import likeImage from "../../assets/like.svg";
import unlikeImage from "../../assets/unlike.svg";
import { countLikeUnlike } from "../../features/likeUnlike/likeUnlikeSlice";

export default function LikeUnlike({ id, likes, unlikes }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(countLikeUnlike({ id }));
  }, [id, dispatch]);

  const { video } = useSelector((state) => state.likeUnlike);

  const likeHandler = (reaction, id) => {
    dispatch(countLikeUnlike({ reaction, id }));
  };
  const unpLikeHandler = (reaction, id) => {
    dispatch(countLikeUnlike({ reaction, id }));
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
            }}
          />
          <span>{video.likes} </span>
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
              unpLikeHandler("unlike", id);
            }}
          />
          <span>{video.unlikes}</span>
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600"></div>
      </div>
    </div>
  );
}
