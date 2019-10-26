export default class SwapiService {
    _apiBase = 'https://swapi.co/api'

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`)
        if (!res.ok) {
            throw new Error(res.status)
        }
        return res.json();
    }

    async getAllPeople() {
        const res = await this.getResource(`/people/`)
        return res.results.map(this._transformPerson)
    }
    async getPerson(id) {
        const people = await this.getResource(`/people/${id}/`)
        return this._transformPerson(people)
    }

    async getAllPlanets() {
        const res = await this.getResource(`/planets/`)
        return res.results.map(this._transformPlanet)
    }
    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}/`)
        return this._transformPlanet(planet)
    }
    async getAllStarships() {
        const res = await this.getResource(`/starships/`)
        return res.results.map(this._transformPlanet)
    }
    async getStarship(id) {
        const starships = await this.getResource(`/starships/${id}/`)
        return this._transformStarship(starships)
    }
    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/
        return item.match(idRegExp)[1]
    }
    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet.url),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
        }
    }
    _transformPerson = (person) => {
        return {
            id: this._extractId(person.url),
            name: person.name,
            population: person.population,
            rotationPeriod: person.rotation_period,
            diameter: person.diameter,
        }
    }
    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship.url),
            name: starship.name,
            population: starship.population,
            rotationPeriod: starship.rotation_period,
            diameter: starship.diameter,
        }
    }
}