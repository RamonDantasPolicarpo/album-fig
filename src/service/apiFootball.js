// const BASE_URL = 'https://v3.football.api-sports.io';
const BASE_URL = 'http://localhost:3000';
const API_KEY = import.meta.env.VITE_API_TOKEN;

export async function getPaises() {
    const response = await fetch(`${BASE_URL}/countries`, {
        method: 'GET',
        headers: {
            'x-apisports-key': API_KEY,
            'x-rapidapi-host': 'v3.football.api-sports.io'
        }
    });

    const dados = await response.json();
    return dados.response;
}

export async function getSelecoes(pais) {
    const response = await fetch(`${BASE_URL}/teams?name=${pais}`, {
        method: 'GET',
        headers: {
            'x-apisports-key': API_KEY,
            'x-rapidapi-host': 'v3.football.api-sports.io'
        }
    })
}