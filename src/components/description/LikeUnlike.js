
import { useDispatch, useSelector } from "react-redux";
import likeImage from "../../assets/like.svg";
import unlikeImage from "../../assets/unlike.svg";
import { countLikeUnlike } from "../../features/likeUnlike/likeUnlikeSlice";



export default function LikeUnlike({ id, likes, unlikes  }) {
  // const [reaction, setReaction] = useState("");
  // const video = useSelector((state) => state.likeUnlike);

  // console.log(video);
  const dispatch = useDispatch();
  
 

  // useEffect(()=>{
  //   dispatch(fetchVideo({id}))
  // },[dispatch,id])

  const updateReactionHandler = (reaction, id) => {
     // console.log(id);
  // console.log(reaction);
  
    dispatch(countLikeUnlike( {id, reaction} ));
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
              // setReaction("likes");
              updateReactionHandler("like", id);
            }}
          />
          <span>{likes} </span>
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
              updateReactionHandler("unlike", id);
            }}
          />
          <span>{unlikes}</span>
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600"></div>
      </div>
    </div>
  );
}
