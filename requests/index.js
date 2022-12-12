import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: 'http://ec2-54-161-143-145.compute-1.amazonaws.com:3000/api/v1/',
  // baseURL: 'http://localhost:5000/api/v1/',
});
var qs = require('qs');

export function jsonToFormData(data) {
  let formData = new FormData();

  for (let dataKey in data) {
    if (dataKey === 'preview') {
      // append nested object
      for (let previewKey in data[dataKey]) {
        formData.append(`preview[${previewKey}]`, data[dataKey][previewKey]);
      }
    } else {
      formData.append(dataKey, data[dataKey]);
    }
  }
  return formData;
}
const apiClient = async ({
  path = '/',
  method = 'get',
  data = null,
  secure = true,
  uploadProgessCB = () => {},
}) => {
  console.log('api calls', data);

  if (method == 'get' && data) {
    console.log('', data);
    const query = qs.stringify(data, {
      addQueryPrefix: true,
    });

    path = path + query;
  }

  // return ""
  try {
    let { data: res, status } = await axiosInstance({
      url: path,
      method: method,
      data: data,
      headers: {
        'X-TENANT-ID': '2c9bc840-74c1-11ed-a1eb-0242ac120011',
      },
      onUploadProgress: (progressEvent) => {
        let percent = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        console.log('percent', percent);
        uploadProgessCB(percent);
      },
    });

    return {
      success: true,
      data: res?.data ? res.data : res,
      status,
      message: 'success',
    };
  } catch (error) {
    console.log(error);

    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx

      throw {
        success: false,
        data: error.response.data,
        status: error.response.status,
        message: 'Response Error',
      };
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
      throw {
        success: false,
        data: null,
        status: null,
        message: 'Request Error',
      };
    } else {
      // Something happened in setting up the request that triggered an Error
      throw {
        success: false,
        data: null,
        status: null,
        message: 'Request Set up Error',
      };
    }

    throw {
      success: false,
      data: null,
      status: null,
      message: 'Unknown Error',
    };
  }
};

export default apiClient;
