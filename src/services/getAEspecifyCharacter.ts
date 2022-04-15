import {api} from './axios';

export async function getAEspecifyCharacter(id: number) {
  const {data} = await api.get(`/character/${id}`);
  return data;
}
