import { IGame } from '../interfaces/Game';

export const LoadGame = async (src): Promise<IGame> => {
  return fetch(src).then(file => file.json())
}
