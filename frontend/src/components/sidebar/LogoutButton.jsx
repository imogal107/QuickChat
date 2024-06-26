import { BiLogOut } from "react-icons/bi";

import useLogout from "../../hooks/useLogout";
const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto">
      {!loading ? (
        <BiLogOut
          className="w-7 h-7 text-white text-lg cursor-pointer hover:h-8 hover:w-8"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default LogoutButton;
