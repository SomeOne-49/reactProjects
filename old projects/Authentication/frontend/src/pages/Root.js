import { useEffect } from "react";
import { Outlet,useLoaderData, useSubmit } from "react-router-dom";
import {getTokenDuration} from '../util/auth'
import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  const submit = useSubmit();
  const token = useLoaderData();
  useEffect(() => {
    if(!token) return
    if(token === "EXPIRED") { 
      submit(null, { action: "/logout", method: "post" });
      return;
    }
    const tokenDuration = getTokenDuration()
    console.log(tokenDuration)
    if (token) {
      setTimeout(() => {
        submit(null, { action: "/logout", method: "post" });
      }, tokenDuration);
    }
  }, [submit, token]);
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;

