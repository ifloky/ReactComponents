import axios from 'axios';

export async function getPlanet(searchText: string) {
  try {
    const response = await axios.get(
      'https://swapi.dev/api/planets/?search=' + searchText
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getAllPlanets() {
  try {
    const response = await axios.get('https://swapi.dev/api/planets');
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchResultsPage(page: string | undefined) {
  try {
    const response = await axios.get(
      `https://swapi.dev/api/planets?page=${page}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchResultsId(id: string | undefined) {
  try {
    const response = await axios.get(`https://swapi.dev/api/planets/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
