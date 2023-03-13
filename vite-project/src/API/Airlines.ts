import { EFetchParams, IAirline } from '../data/types';

class FetchAirlines {
  private async main(param: EFetchParams, name: string) {
    const res = await fetch(`https://api.api-ninjas.com/v1/airlines?${param}=${name}`, {
      headers: {
        'X-Api-Key': 'w/DFGJ+sVb1SJ5tXWPlwNQ==D3zKc1k0KkSNzLvV',
      },
    });
    const result: IAirline[] = await res.json();
    return result;
  }

  async name(str: string) {
    return await this.main(EFetchParams.NAME, str);
  }

  async icao(str: string) {
    return await this.main(EFetchParams.ICAO, str);
  }

  async iata(str: string) {
    return await this.main(EFetchParams.IATA, str);
  }

  async start() {
    return await this.main(EFetchParams.NAME, 'airlines');
  }
}

export default new FetchAirlines();
