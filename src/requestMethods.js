import axios from 'axios';

const BASE_URL = 'https://api-sandy-one.vercel.app/api/';
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const user = JSON.parse(localStorage.getItem('persist:root'))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

// const TOKEN =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjBjZGFiZDRkNDk2NWFhOWYyZWYwOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNjE2ODgyNSwiZXhwIjoxNzA2NDI4MDI1fQ.4uNvHaQYvzgrFZ6h1YM-hCCNMf9RaHQyAsXF-k8xAUA';

const TOKEN = () => {
  if (
    JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)
      .currentUser.accessToken
  ) {
    return JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)
      .currentUser.accessToken;
  } else {
    return '';
  }
};

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
