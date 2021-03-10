const Api = {
  basePath: 'https://restcountries.eu/rest/v2',

  async getData(path) {
    try {
      const response = await fetch(path)
      if (!response.ok) {
        throw new Error(response.status)
      }
      const data = await response.json()
      if (!data) {
        throw new Error('Country not found')
      }
      return data
    } catch (error) {
      console.log(error)
      return Promise.reject(new Error(error))
    }
  },

  async getAllCountries() {
    const countries = await this.getData(`${this.basePath}/all`)
    return countries
  },

  async getCountryByCode(code) {
    const country = await this.getData(`${this.basePath}/alpha/${code}`)
    return country
  },
}

export default Api
