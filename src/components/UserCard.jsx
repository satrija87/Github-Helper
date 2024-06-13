import { Link } from "react-router-dom";
import usersCouple from "../assets/couple-users.png";
import usersMultiple from "../assets/multiple-users.png";

const UserCard = ({ user }) => {
  return (
    <div className="w-3/12 ">
      <div>
        <img
          src={user?.avatar_url}
          alt="avatar"
          className="rounded-full size-40"
        ></img>
      </div>
      <div>
        <p className="text-xl font-bold my-4 ">{user?.name}</p>
        <Link to={"https://github.com/" + user.login} className="text-sky-600 font-bold">
          {user?.login}
        </Link>
      </div>
      <div className="my-8 flex  gap-4">
        <span className="flex ">
          <Link to={"https://github.com/" + user.login + "?tab=followers"}>
            <img src={usersCouple} alt="followers_icon" className="mr-2"></img>
            {user?.followers} followers
          </Link>
        </span>
        <span className="flex ">
          <Link to={"https://github.com/" + user.login + "?tab=following"}>
            <img
              src={usersMultiple}
              alt="following_icon"
              className="mr-2"
            ></img>
            {user?.following} following
          </Link>
        </span>
      </div>
    </div>
  );
};

export { UserCard };
