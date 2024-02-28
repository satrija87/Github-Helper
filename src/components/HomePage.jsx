import bigSearch from "../assets/bigSearch.png";
import { Preloader } from "./Preloader";

const HomePage = ({ hasError, loading }) => {
  return (
    <div className="flex flex-col m-auto h-screen">
      {loading ? (
        <Preloader />
      ) : (
        hasError && (
          <h1 className="text-red text-2xl font-bold text-rose-600 text-center">
            No users have found
          </h1>
        )
      )}
      <div className=" flex flex-col m-auto">
        <img
          src={bigSearch}
          alt="search user"
          className=" w-24  mx-auto "
        ></img>
        <p className="text-slate-500 bold text-center w-40 mx-auto mt-4">
          Start with searching a GitHub user
        </p>
      </div>
    </div>
  );
};
export { HomePage };
