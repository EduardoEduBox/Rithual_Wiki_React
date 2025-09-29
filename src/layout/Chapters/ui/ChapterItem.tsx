import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import type { Chapter } from '../model/types';

const HtmlTooltip = styled(({ className, ...props }: any) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    maxWidth: 5000,
    border: '1px solid black',
    borderRadius: 10,
  },
}));

export function ChapterItem({ chapter }: { chapter: Chapter }) {
  return (
    <HtmlTooltip
      enterDelay={500}
      followCursor={true}
      placement="right"
      title={
        <div className="flex p-3 rounded-md h-72">
          <div>
            <img className="w-auto h-full rounded-lg" src={chapter.aditionalCover} alt={`Capa do capítulo ${chapter.title}`} />
          </div>
          <div className="flex flex-col pt-3 items-center ml-5 text-center w-[340px]">
            <h1 className="mb-3 text-2xl font-bold text-pink-200 whitespace-nowrap">{chapter.title}</h1>
            <hr className="w-2/3 mb-3 opacity-50" />
            <div className="flex items-center justify-center h-full px-6 pb-5">
              <p className="text-[1.15rem] leading-6 description">{chapter.description}</p>
            </div>
          </div>
        </div>
      }
      slotProps={{
        popper: {
          modifiers: [
            {
              name: 'offset',
              options: { offset: [0, 50] },
            },
          ],
        },
      }}
    >
      <img className="w-auto h-[65vh] rounded-lg hover:-translate-y-5 transition duration-300" src={chapter.cover} alt={`Capa do capítulo ${chapter.title}`} />
    </HtmlTooltip>
  );
}
