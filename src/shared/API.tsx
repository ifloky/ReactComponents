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
