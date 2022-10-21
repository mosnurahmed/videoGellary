import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { pages } from "../../features/pagination/paginationSlice";

export default function Pagination() {
  const dispatch = useDispatch();
  const {  videos , videoPerPage} = useSelector((state) => state.videos);
  // const {  videoPerPage } = useSelector((state) => state.pagination);


  const totalVideos = videos.length;

  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalVideos / videoPerPage); i++) {
    pageNumber.push(i);
  }
  const paginationHandler =(number) =>{
    dispatch(pages(number))
  }

  // const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  //   const pageNumbers = [];

  //   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {

  //     pageNumbers.push(i);
  //   }
  //   <div className="bg-blue-600 text-white px-4 py-1 rounded-full" onClick={() => dispatch(setLimit(1))}>
  //   1
  // </div>
  // <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full" onClick={() => dispatch(setLimit(2))}>
  //   2
  // </div>
  // <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full" onClick={() => dispatch(setLimit(3))}>
  //   3
  // </div>
  // <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full" onClick={() => dispatch(setLimit(4))}>
  //   4
  // </div>

  return (
    <section className="pt-12">
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
        {pageNumber.map((number) => (
          <Link to={`/`}>
            <div className="bg-blue-600 text-white px-4 py-1 rounded-full" onClick={()=> paginationHandler(number)}>
              {number}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
