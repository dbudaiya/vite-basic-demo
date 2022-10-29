import axios from 'axios'

axios.create({
  baseURL: '/',
  timeout: 500,
  httpsAgent: 123,
  headers: {
    sas: '1'
  }
})

type a = Record<number, string | boolean>
const a: a = {
  1: true
}
