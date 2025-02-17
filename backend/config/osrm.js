import fetch from "node-fetch";

export const getRoute = async (source, destination) => {
  const url = `http://router.project-osrm.org/route/v1/driving/${source};${destination}?overview=full`;

  const response = await fetch(url);
  const data = await response.json();

  return data.routes[0];
};
