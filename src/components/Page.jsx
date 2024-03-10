const Page = ({ number, currentPage, paginate }) => {
  let activeClass =
    currentPage === number ? "text-white bg-sky-600 px-2 py-1" : "px-2 py-1";
    
  return (
    <li
      key={number}
      className="text-slate-400 border-2.5  w-2.5 mx-2 font-bold  decoration-solid cursor-pointer  "
    >
      <span className={activeClass} onClick={() => paginate(number)}>
        {number}
      </span>
    </li>
  );
};
export { Page };
