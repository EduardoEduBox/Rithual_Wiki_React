import { Chapter } from "../model/types";

export function mapChapters(raw: unknown): Chapter[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .map((it) => ({
      id: Number((it as any).id),
      title: String((it as any).title ?? ''),
      shortTitle: String((it as any).shortTitle ?? ''),
      cover: String((it as any).cover ?? ''),
      aditionalCover: String((it as any).aditionalCover ?? ''),
      description: String((it as any).description ?? ''),
      url: String((it as any).url ?? ''),
    }))
    .filter((c) => !Number.isNaN(c.id) && c.title && c.cover && c.url);
}
