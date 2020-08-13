import axios from "axios"

const http = axios.create({
  timeout: 10000
})


let request = (method,url,data,header) => {
  http[method](url,data,header)
}