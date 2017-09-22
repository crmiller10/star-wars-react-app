import React, { Component } from 'react';

class Planet extends Component{

  constructor(props){
    super(props);
    this.state = {
      results: [],
    };
  }

  componentDidMount() {
    fetch('http://swapi.co/api/planets/')
    .then(resp => resp.json())
    .then(response => { this.setState ({
        results: response.results
      });
    });
  }

  render() {
    const planets = this.state.results.map(planet => {
      return(
        <div className="col-md-4 col-sm-12">
          <div className="planet card card-body" key={planet.name}>
            <h3>{planet.name}</h3>
            <ul className="details">
              <li>Climate: {planet.climate}</li>
              <li>Terrain: {planet.terrain}</li>
              <li>Population: {planet.population}</li>
              <li>Gravity: {planet.gravity}</li>
              <li>Orbital Period: {planet.orbital_period}</li>
              <li>Surface Water: {planet.surface_water}</li>
            </ul>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div className="row">
          {planets}
        </div>
      </div>
    );
  };
}

export default Planet;
