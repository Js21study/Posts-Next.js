import React, { FC } from 'react';
import { NavLink } from './NavLink';

interface Props {
  id: number;
  title: string;
  body: string;
  link?: string;
  linkTitle?: string;
}

export const PostCard: FC<Props> = ({ id, title, body, link, linkTitle }) => {
  return (
    <div className="w-full flex">
      <div className="w-full border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-gray-800 dark:bg-slate-200 text-slate-200 dark:text-slate-800 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col gap-4 justify-between leading-normal">
        <div className="font-bold text-xl ">{title}</div>
        <p className="text-base">{body}</p>
        <NavLink
          title={linkTitle ? linkTitle : 'Go to post'}
          link={link ? link : `posts/${id}`}
        />
      </div>
    </div>
  );
};
