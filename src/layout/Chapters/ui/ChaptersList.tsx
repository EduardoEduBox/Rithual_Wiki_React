import type { Chapter } from '../model/types';
import { ChapterItem } from './ChapterItem';

export function ChaptersList({ chapters }: { chapters: Chapter[] }) {
  return (
    <div className="relative flex py-5 pr-10 mr-auto overflow-x-auto -space-x-28">
      {chapters.map((chapter) => (
        <a key={chapter.id} href={chapter.url} className="pl-40 shrink-0">
          <ChapterItem chapter={chapter} />
        </a>
      ))}
    </div>
  );
}
