import bigSearch from "../assets/bigSearch.png";

function HomePage() {
  return (
    <div className=" flex flex-col m-auto ">
      <img src={bigSearch} alt="search user" className=" w-24  mx-2.5 "></img>
      <p className="text-slate-500 bold text-center w-40">
        Start with searching a GitHub user
      </p>
    </div>
  );
}
export { HomePage };
