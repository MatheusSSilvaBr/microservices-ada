const axios = require('axios');
const userDb = require('../adapters/repository/repository-user');

class AddressService {
    static async search(user, cep) {
      try {
        const cepFormat = cep.split('-').join('');
        const cepViaCep = await axios.get(`https://viacep.com.br/ws/${cepFormat}/json/`);
        const response = await this.cepDb(cepViaCep.data);
        console.log('Inserindo no DB')
        await userDb.addAddress(user, response);
        return response;
    } catch (error) {
        console.error(error);
    }
    }

    static async cepDb(cep) {
      const cepDb = {
        "street": cep.logradouro,
        "neighborhood": cep.bairro,
        "city": cep.localidade,
        "state": cep.uf,
      }

      return cepDb;
    }
}

module.exports = AddressService