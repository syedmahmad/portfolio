import axios from 'axios'

export default class serviceCalls {

  static getFromCMS(path) {
    let url = "http://localhost:1337" + path
    return axios({
      method: 'get',
      url: url,
    })
      .then((res) => {
        return res.data
      })
      .catch((err) => {
        return err.response
      })
  }
}
