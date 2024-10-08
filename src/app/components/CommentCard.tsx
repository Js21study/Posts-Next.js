import Image from 'next/image';
import React, { FC } from 'react';
import Avatar from '/src/app/assets/images/avatar.png';

interface Props {
  name: string;
  email: string;
  body: string;
}

export const CommentCard: FC<Props> = ({ name, email, body }) => {
  return (
    <div className="w-full h-full flex">
      <div className="border-r border-b border-l border-gray-400  lg:border-gray-400 bg-gray-600 dark:bg-slate-200 text-slate-100 dark:text-slate-800 rounded   p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <p className=" text-base">{body}</p>
        </div>
        <div className="flex items-center">
          <Image
            width={64}
            height={64}
            className="rounded-full mr-4"
            src={Avatar}
            alt="Avatar"
          />
          <div className="text-sm">
            <p className="dark:text-gray-900 text-gray-300 leading-none mb-2">
              {name}
            </p>
            <p className="dark:text-gray-600 text-white">{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
