import { useLogin } from "../hooks/UseIsLoggedIn.hook";
import LoginPage from "./pages/Login.page";

interface Props {
  children: React.ReactElement;
}

const AuthenticatedPage: React.FC<Props> = ({ children }) => {
  const { isLoggedIn } = useLogin();

  if (!isLoggedIn) {
    return <LoginPage />;
  }

  return children;
};

export default AuthenticatedPage;
