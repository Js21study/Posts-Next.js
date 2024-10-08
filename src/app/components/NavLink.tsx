import Link from 'next/link';
import React, { FC } from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';

interface Props {
  link: string;
  title: string;
}

export const NavLink: FC<Props> = ({ link, title }) => {
  return (
    <Link
      href={link}
      className="flex gap-2 items-center w-fit dark:bg-slate-800 dark:text-white bg-slate-200 text-gray-800 border border-slate-500 p-2 rounded">
      {title} <IoIosArrowRoundForward />
    </Link>
  );
};
