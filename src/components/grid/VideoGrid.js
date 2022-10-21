import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../features/videos/videosSlice";
import Loading from "../ui/Loading";
import VideoGridItem from "./VideoGridItem";

export default function VideGrid() {
  const dispatch = useDispatch();
  const { currentPage } = useSelector((state) => state.pagination);
  // console.log(pageNumber);
  // const [currentPage, setCurrentPage] = useState(pageNumber);

  const { videos, isLoading, isError, error, videoPerPage } = useSelector((state) => state.videos);

  const { tags, search, authors } = useSelector((state) => state.filter);

  const indexOfLastVideos = currentPage * videoPerPage;
  const indexOfFirstVideos = indexOfLastVideos - videoPerPage;
  // console.log(`current videos object : ${videos}`)
  const currentVideos = videos.slice(indexOfFirstVideos, indexOfLastVideos);
  console.log(`fist index: ${indexOfFirstVideos}  last index : ${indexOfLastVideos}`);
  // console.log(`current videos object : ${currentVideos}`)

  useEffect(() => {
    dispatch(fetchVideos({ tags, search, authors }));
  }, [dispatch, tags, search, authors]);

  // decide what to render
  let content;

  if (isLoading) content = <Loading />;
  if (!isLoading && isError) content = <div className="col-span-12">{error}</div>;

  if (!isError && !isLoading && videos?.length === 0) {
    content = <div className="col-span-12">No videos found!</div>;
  }

  if (!isError && !isLoading && videos?.length > 0) {
    content = currentVideos.map((video) => <VideoGridItem key={video.id} video={video} />);
  }

  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">{content}</div>
      </section>
    </section>
  );
}
