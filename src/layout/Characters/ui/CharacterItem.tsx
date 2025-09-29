import type { Character } from '../model/types';

export function CharacterItem({ character, onClick }: { character: Character; onClick: () => void }) {
  return (
    <div className="w-screen lg:w-1/4 lg:h-[85vh] flex items-end">
      <img
        className={`lg:max-w-none ${character.height}`}
        src={character.withText}
        alt={character.name}
        onClick={onClick}
      />
    </div>
  );
}
