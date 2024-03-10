import { Page } from "./Page";

const Pages = ({ nPages, currentPage, paginate }) => {
  const pageNumbers = Array.from({ length: nPages }, (v, k) => k + 1);
 
  return (
    <>
      {pageNumbers.map((number) => <Page key={number} number={number} currentPage={currentPage} paginate={paginate} />)}
    </>
  );
};
export { Pages };
