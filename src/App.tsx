import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";

const App = () => {
  return (
    <div className="p-2">
      <div>SOC Frontend</div>
      <LoginButton />
      <div className="p-4">
        <hr />
      </div>
      <LogoutButton />
      <div className="p-4">
        <hr />
      </div>
      <Profile />
    </div>
  );
};

export default App;
