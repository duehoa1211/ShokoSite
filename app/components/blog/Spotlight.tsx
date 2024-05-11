import { Link } from '@remix-run/react';
import Icon from '~/components/common/Icon';
import { mdiOpenInNew } from '@mdi/js';

type Spotlight = {
  image: string;
  name: string;
  url: string;
}

type Tag = {
  name: string;
  checked?: boolean;
  total: number;
}

const spotlight: Spotlight = {
  image: '/images/spotlight/spotlight-1.webp',
  name: 'Handyman Saitou in Another World',
  url: '#'
};

const tags: Tag[] = [
  { name: 'Shoko Server', checked: false, total: 45 },
  { name: 'Shoko Server Web UI', checked: false, total: 145 },
  { name: 'Shoko Desktop', checked: false, total: 35 },
  { name: 'Shoko Metadata', checked: false, total: 85 },
  { name: 'Shokofin', checked: false, total: 531 },
  { name: 'AniDB', checked: false, total: 5 },
  { name: 'Shoko Docs', checked: false, total: 99 },
  { name: 'Website', checked: false, total: 15 }
];

function HighlightHeader({ title }: { title: string }) {
  return <div className="flex flex-col gap-y-2">
    <h2 className="text-xl">{title}</h2>
    <hr className="border-shoko-highlight w-[100px] border" />
  </div>;
}


function Tag({ item }: { item: Tag }) {
  return <div className="flex items-start justify-between border-b border-solid w-full border-shoko-border py-3">
    <span>{item.name}</span>
    <div className="flex gap-x-2">
      ({item.total})
      <input type="checkbox" />
    </div>
  </div>;
}

function SpotlightItem({ item }: { item: Spotlight }) {
  return <div className="flex flex-col items-start">
    <img src="/images/blog/spotlight/spotlight-1.webp" alt="spotlight" />
    <Link to={item.url} className="text-shoko-link font-medium">
      {item.name}
      <Icon icon={mdiOpenInNew} />
    </Link>
  </div>;
}

function Tags({}) {

}

function Spotlight() {
  return <div className="bg-shoko-bg-alt flex flex-col items-start px-8 py-16 gap-y-8">
    <div className="flex flex-col items-center gap-y-2 w-full">
      <HighlightHeader title="Anime Spotlight" />
      <SpotlightItem item={spotlight} />
    </div>
    <div className="flex flex-col items-start gap-y-2 w-full">
      <HighlightHeader title="Tags" />
      {tags.map((tag) => (<Tag item={tag} key={tag.name} />))}
    </div>
  </div>;
}

export default Spotlight;