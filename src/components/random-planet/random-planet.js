/* eslint-disable jsx-a11y/alt-text */
import React, { Component, Fragment } from 'react'
import SwapiService from '../../services/swapi-service'
import './random-planet.scss'
import Spinner from '../spinner'

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true
    }
    constructor() {
        super()
        this.updatePlanet()
    }
    onPlanetLoaded = (planet) => {
        this.setState({ planet, loading: false })
    }
    onError = (err) => {

    }
    updatePlanet() {
        this.swapiService.getPlanet(Math.floor(Math.random() * 25) + 2)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
    }
    render() {
        const { planet, loading } = this.state;

        return (
            <div className="random-planet">
                {loading ? <Spinner /> : <PlanetViev planet={planet} />}
            </div>
        )
    }
}

const PlanetViev = ({ planet }) => {
    const { id, population, rotationPeriod, diameter, name } = planet;

    return (
        <Fragment>
            <img className="planet-img"
                src={`https:/starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
            <div>
                <h4>{name}</h4>
                <ul>
                    <li><span>Population </span><span>{population}</span></li>
                    <li><span>Rotation Period </span><span>{rotationPeriod}</span></li>
                    <li><span>Diameter </span><span>{diameter}</span></li>
                </ul>
            </div>
        </Fragment>
    )
}