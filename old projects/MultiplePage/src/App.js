import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServicesDetails from "./pages/services-details";
import Error from "./pages/Error";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/services/:serviceId", element: <ServicesDetails /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

