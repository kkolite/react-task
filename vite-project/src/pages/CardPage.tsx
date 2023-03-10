import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Airlines from '../API/Airlines';
import Error from './Error';

/*const CardPage = () => {
  const {icao} = useParams();
  if (!icao) return <Navigate to="/error"/>;

  return (
    <div>
      {icao}
    </div>
  );
};*/

import { Component } from 'react';
import { IAirline } from '../data/types';

class CardPage extends Component <{}, { airline: IAirline }> {
  componentDidMount() {
    this.getData();
  }

  async getData() {
    const icao = location.pathname.split('/')[2];
    if (!icao) return <Navigate to="/error"/>;
    
    const list = await Airlines.icao(icao);
    if (!list.length) {
      return (
        <div>
          Oops! We didn't find {icao.toUpperCase()}
        </div>
      );
    }

    const airline = list[0];
    this.setState({airline});
  }
  
  render() {
    const {airline} = this.state || {airline: null};
    if (!airline) return <p>Wait...</p>
    const fleetArr = Object.entries(airline.fleet);
    fleetArr.pop();
    return (
      <div>
        <p className="">{airline.name}</p>
        { airline.logo_url ? 
        <img src={airline.logo_url} alt="logo"/> :
        <></>
        }
        <p>ICAO: {airline.icao}</p>
        <p>IATA: {airline.iata}</p>
        <p>Fleet size: {airline.fleet.total}</p>
        <ul>
          {fleetArr.map((el) => 
            <li key={el[0]}>{el[0]}: {el[1]}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default CardPage;