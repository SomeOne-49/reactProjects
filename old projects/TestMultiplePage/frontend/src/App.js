import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/Root";
import Error from "./pages/Error";
import EventRoot from "./pages/EventRoot";
import Home from "./pages/Home";
import Events, { eventLoader } from "./pages/Events";
import EventDetail, {
  EventDetailLoader,
  EventDetailAction,
} from "./pages/EventDetail";
import NewEvent from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";
import { EventActions } from "./components/EventForm";
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "events",
        element: <EventRoot />,
        children: [
          {
            index: true,
            element: <Events />,
            loader: eventLoader,
          },
          {
            path: ":id",
            id: "event-id",
            loader: EventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetail />,
                action: EventDetailAction,
              },
              { path: "edit", element: <EditEvent />, action: EventActions },
            ],
          },
          { path: "new", element: <NewEvent />, action: EventActions },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

