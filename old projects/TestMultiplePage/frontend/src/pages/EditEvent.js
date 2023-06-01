import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";
export default function EditEventPage() {
  const data = useRouteLoaderData("event-id").event;
  return <EventForm event={data} method="PATCH"/>;
}
