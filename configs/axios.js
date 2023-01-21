

// eslint-disable-next-line react-hooks/rules-of-hooks

import axios from "axios";

const axiosClient = axios .create();

axiosClient.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL || "http://ec2-3-95-8-3.compute-1.amazonaws.com:3000/api/v1";

axiosClient.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  'X-TENANT-ID':
          process.env.NEXT_PUBLIC_DEV_TENANT_ID 
        //   || localStorage?.getItem('tenantId') 
          || "88c0a6e3-dc55-4aea-908b-eeeb252a3555",
};

// //All request will wait 2 seconds before timeout
axiosClient.defaults.timeout = 2000;


// axios.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     if (error.response.status === 401) {
//     }

//     return Promise.reject(error);
//   },
// );

// HTTP Verbs
export function GET(URL) {
  return axiosClient.get(`/${URL}`).then(response => response)
}

export function POST(URL, payload, headers = 'application/json') {
  return axiosClient
    .post(`/${URL}`, payload, {
      headers: {
        'Content-Type': headers
      }
    })
    .then(response => response)
}

export function PATCH(URL, payload) {
  return axiosClient.patch(`/${URL}`, payload).then(response => response)
}

export function DELETE(URL) {
  return axiosClient.delete(`/${URL}`).then(response => response)
}
