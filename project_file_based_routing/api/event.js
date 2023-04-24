import { fromObjectToArray } from "@/utils/data_transform";

export async function fetchOneEvent(id) {
  return fetch(`${process.env.NEXT_PUBLIC_FIREBASE_URL}/events/${id}.json`)
    .then((response) => response.json())
    .catch((e) => {
      console.log("fail to fecth event id", id, e);
    });
}

export async function fetchEvents() {
  return fetch(`${process.env.NEXT_PUBLIC_FIREBASE_URL}/events.json`)
    .then((response) => response.json())
    .then((data) => fromObjectToArray(data));
}
