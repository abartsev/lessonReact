import React, { Component } from 'react'
import SwapiService from '../../services/swapi-service'
import './random-planet.css'
import Spiner from '../spiner'

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        name: null,
        population: null,
        rotationPeriod: null,
        diameter: null,
        loading: true

    }
    constructor() {
        super()
        this.updatePlanet()
    }
    updatePlanet() {
        this.swapiService.getPlanet(Math.floor(Math.random() * 25) + 2)
            .then((planet) => {
                this.setState({
                    name: planet.name,
                    population: planet.population,
                    rotationPeriod: planet.rotation_period,
                    diameter: planet.diameter,
                    loading: false
                })
            })
    }
    render() {
        const { population, rotationPeriod, diameter, name, loading } = this.state;
        if (loading)
            return <Spiner />
        else
            return (
                <div className="random-planet">
                    <img width="100" height="100" src="https://pp.userapi.com/c846521/v846521696/4b80e/bcUWiHH73GM.jpg" />
                    <div>
                        <h4>{name}</h4>
                        <ul>
                            <li><span>Population </span><span>{population}</span></li>
                            <li><span>Rotation Period </span><span>{rotationPeriod}</span></li>
                            <li><span>Diameter </span><span>{diameter}</span></li>
                        </ul>
                    </div>


                </div>
            )
    }
}
