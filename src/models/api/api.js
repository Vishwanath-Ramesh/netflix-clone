import axios from 'axios'
import { serverConfig } from '../../configs/configs'

const instance = axios.create({
  baseURL: serverConfig?.APIDomain ?? '',
  headers: {
    'content-type': 'application/json',
  },
  params: {
    api_key: serverConfig.API_KEY,
  },
})

const getAPIData = async (method, url, postData) => {
  const response = await instance({
    method: method,
    url: url,
    data: postData,
  })
  return response
}

export default getAPIData
