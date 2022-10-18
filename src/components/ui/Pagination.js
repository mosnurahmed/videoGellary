import { useDispatch, useSelector } from "react-redux";
import { setLimit } from "../../features/pagination/paginationSlice";

export default function Pagination() {
  const dispatch = useDispatch();

  return (
    <section className="pt-12">
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
        <div className="bg-blue-600 text-white px-4 py-1 rounded-full" onClick={() => dispatch(setLimit(1))}>
          1
        </div>
        <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full" onClick={() => dispatch(setLimit(2))}>
          2
        </div>
        <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full" onClick={() => dispatch(setLimit(3))}>
          3
        </div>
        <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full" onClick={() => dispatch(setLimit(4))}>
          4
        </div>
      </div>
    </section>
  );
}
