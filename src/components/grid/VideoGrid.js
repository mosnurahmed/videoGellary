import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../features/videos/videosSlice";
import Loading from "../ui/Loading";
import VideoGridItem from "./VideoGridItem";
import Pagination from "../ui/Pagination";

export default function VideGrid() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerpage] = useState(5);

  const { videos, isLoading, isError, error } = useSelector((state) => state.videos);
  const { tags, search, authors } = useSelector((state) => state.filter);


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
    content = videos
      .slice((currentPage - 1) * perPage, currentPage * perPage)
      .map((video) => <VideoGridItem key={video.id} video={video} />);
  }
  let totalPage = Math.ceil(videos.length / perPage);

  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">{content}</div>
        <Pagination currentPage={currentPage} totalPage={totalPage} setCurrentPage={setCurrentPage} />
      </section>
    </section>
  );
}
