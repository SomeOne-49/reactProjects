import { useState, useEffect } from "react";
import Header from "./components/Header";
import SignupForm from "./components/SignupForm";
function App() {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    if (localStorage.logged === "1") {
      setLogged(true);
    }
  }, []);

  const logHandler = () => {
    setLogged(!logged);
  };

  const changeStorage = (val) => {
    localStorage.logged = val;
  };

  return (
    <div className="content-box">
      <Header
        isLogged={logged}
        onLogout={logHandler}
        setLocalStorage={changeStorage}
      />
      <SignupForm
        isLogged={logged}
        onLogin={logHandler}
        setLocalStorage={changeStorage}
      />
    </div>
  );
}

export default App;
