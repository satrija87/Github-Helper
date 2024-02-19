import usersCouple from "../assets/couple-users.png";
import usersMultiple from "../assets/multiple-users.png";


function UserCard({ user }) {

  return (
    <div className="w-3/12 ">
        <div>
          <img
            src={user.avatar_url}
            alt="avatar"
            className="rounded-full size-40"
          ></img>
        </div>
        <div>
          <p className="text-xl font-bold my-4 ">{user.name}</p>
          <p className="text-sky-600 font-bold">{user.login}</p>
        </div>
        <div className="my-8 flex  gap-4">
          <span className="flex ">
            <img src={usersCouple} alt="followers_icon" className="mr-2"></img>
            {user.followers} followers
          </span>
          <span className="flex ">
            <img src={usersMultiple} alt="following_icon" className="mr-2"></img>
            {user.following} following
          </span>
        </div>
    </div>
  );
}

export { UserCard };
