import {
  useNavigate,
  Form,
  useNavigation,
  useActionData,
  json,
  redirect,
} from "react-router-dom";

import classes from "./EventForm.module.css";

function EventForm({ method, event }) {
  let title, image, date, description;
  if (event) {
    ({ title, image, date, description } = event);
  }

  const actionData = useActionData();
  const navigationn = useNavigation();
  const isSubmiting = navigationn.state === "submiting";

  const navigate = useNavigate();
  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method={method} className={classes.form}>
      {actionData && actionData.errors && (
        <ul style={{ color: "#e91e63" }}>
          {Object.values(actionData.errors).map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          // required
          defaultValue={title ? title : ""}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          // required
          defaultValue={image ? image : ""}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          // required
          defaultValue={date ? date : ""}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          // required
          defaultValue={description ? description : ""}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button type="submit" disabled={isSubmiting}>
          {isSubmiting ? "Submiting" : "Save"}
        </button>
      </div>
    </Form>
  );
}

export default EventForm;

export async function EventActions({ request, params }) {
  const method = request.method;

  const data = await request.formData();
  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  let url = "http://localhost:8080/events";

  if (method === "PATCH") {
    url = "http://localhost:8080/events/" + params.id;
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (response.status === 422) {
    return response;
  }
  if (!response.ok) {
    throw json("Could not save event data.", { status: 500 });
  }

  return redirect("/events");
}

