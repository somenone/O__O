import Vue from "vue"
import axios from "axios"

let http = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 10000
})


// http.interceptors.request.use((req) => {
//   // req.headers[token] = localStorage.token
// })

http.interceptors.response.use((res) => {
  return res.data
})

Vue.prototype.$http = http