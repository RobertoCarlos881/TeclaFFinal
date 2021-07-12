const fetch = require('node-fetch');
class MercadoService {
  constructor(url) {
    this.url = url;
  }

  async fetch() {
    let mercadoUrl = await fetch(this.url);
    return await mercadoUrl.json();
  }
}

module.exports = {
  MercadoService
}