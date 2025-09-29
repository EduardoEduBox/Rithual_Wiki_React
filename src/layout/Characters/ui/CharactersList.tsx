import type { Character } from '../model/types';
import { CharacterItem } from './CharacterItem';

export function CharactersList({ characters, onItemClick }: { characters: Character[]; onItemClick: (index: number) => void }) {
  return (
    <>
      {characters.map((character, index) => (
        <CharacterItem key={character.id} character={character} onClick={() => onItemClick(index)} />
      ))}
    </>
  );
}
