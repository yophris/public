import axios from "axios"
const axiosInstance = axios.create({
    baseURL:"https://yophris.herokuapp.com/api/v1/"
    // baseURL:"http://localhost:5000/api/v1/"
});

const apiClient = async (path="/",method='get',data=null,secure=true,uploadProgessCB = ()=>{}) => {

    console.log("making and api calls",data)
    // return ""
    try {
        let {data:res,status} = await axiosInstance({
            url:path,
            method:method,
            data:data,
            headers:{
                "X-TENANT-ID":"83b3b819-1dbe-404e-8ff2-c693037fdb2f"
            },
            onUploadProgress:uploadProgessCB
        })

        return {
            success:true,
            data:res.data,
            status,
            message:"success"
        }
        
    } catch (error) {
        console.log(error);
          

        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx

            throw {
                success:false,
                data:error.response.data,
                status:error.response.status,
                message:"Response Error"
            }

            
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
            throw {
                success:false,
                data:null,
                status:null,
                message:"Request Error"
            }

          } else {
            // Something happened in setting up the request that triggered an Error
            throw {
                success:false,
                data:null,
                status:null,
                message:"Request Set up Error"
            }
          }

          throw {
            success:false,
            data:null,
            status:null,
            message:"Unknown Error"
        }
    }
}

export default apiClient