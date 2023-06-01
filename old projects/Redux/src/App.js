import { useSelector } from "react-redux";
import { authActions } from "./store/index";

import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import Auth from "./components/Auth";
import Counter from "./components/Counter";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  console.log(isLoggedIn);
  return (
    <>
      <Header />
      {!isLoggedIn && <Auth />}
      {isLoggedIn && (
        <>
          <UserProfile />
          <Counter />
        </>
      )}
    </>
  );
}

export default App;

