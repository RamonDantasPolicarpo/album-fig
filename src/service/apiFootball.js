// const BASE_URL = 'https://v3.football.api-sports.io';
const BASE_URL = 'https:localhost:3000';
const API_KEY = import.meta.env.development.VITE_API_TOKEN;

export async function getPaises() {
    const response = await fetch(`${BASE_URL}/teams/countries`, {
        method: get,
        headers: {
            'x-apisports-key': API_KEY,
            'x-rapidapi-host': 'v3.football.api-sports.io'
        }
    });

    const dados = await response.json();
    return dados.response;
}