import { json } from "react-router-dom";
export default function getAuthToken() {
  const token = localStorage.getItem("token");
  if (!token) return null
  const tokenDuration = getTokenDuration();
  if (tokenDuration < 0) {
    return 'EXPIRED';
  }
  return token;
}

export function getTokenDuration() {
  const storedTokenEndTime = localStorage.getItem("tokenEndTime");
  const expirationDate = new Date(storedTokenEndTime);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime()  ;
  return duration;
}
export function getToken() {
  return getAuthToken();
}

export function checkAuthToken() {
  const token = localStorage.getItem("token");
  if (!token) throw json({ message: "Invalid Page" }, { status: 404 });
  return null;
}
