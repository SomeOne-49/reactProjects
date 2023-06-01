import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

export default function EditEventPage() {
  const error = useRouteError();

  let title = "Error";
  let message = "Oops some error occurred!";
  if (error.status === 404) message = "Not Found";
  if (error.status === 500) message = error.data;

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
