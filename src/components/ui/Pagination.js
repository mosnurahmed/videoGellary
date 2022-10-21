import React from "react";
import { Link } from "react-router-dom";


export default function Pagination({ currentPage, totalPage, setCurrentPage }) {
  const pages = Array.from({ length: totalPage }, (x, i) => i + 1);

  return (
    <section className="pt-12">
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
        {pages.map((number) => (
          <React.Fragment key= {number}>
          <Link to={`/`}  >
            <div
              className={`${currentPage === number ? "bg-blue-600 " : "bg-blue-100"} text-white px-4 py-1 rounded-full`}
              onClick={() => setCurrentPage(number)}
            >
              {number}
            </div>
          </Link>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
