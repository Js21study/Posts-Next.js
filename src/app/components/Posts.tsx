'use client';

import React, { FC, useState } from 'react';
import { Post } from '../@types';
import { PostCard } from './PostCard';
import ReactPaginate from 'react-paginate';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface Props {
  posts: Post[];
}

export const Posts: FC<Props> = ({ posts }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const postsPerPage = 5;
  const endOffset = itemOffset + postsPerPage;
  const currentPosts = posts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(posts.length / postsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * postsPerPage) % posts.length;
    setItemOffset(newOffset);
  };

  return (
    <section className="container mx-auto sm:p-10  ">
      <ul className="grid gap-4 ">
        {currentPosts.map((post, index) => (
          <li key={index}>
            <PostCard
              key={post.id}
              title={post.title}
              body={post.body}
              id={post.id}
            />
          </li>
        ))}
      </ul>

      <div className="flex justify-center pt-5">
        <ReactPaginate
          breakLabel="..."
          nextLabel={
            <span className="w-4 h-4">
              <IoIosArrowForward />
            </span>
          }
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          pageCount={pageCount}
          previousLabel={
            <span className="w-4 h-4">
              <IoIosArrowBack />
            </span>
          }
          renderOnZeroPageCount={null}
          containerClassName="flex items-center space-x-2 text-black flex-wrap gap-2 items-center"
          pageClassName="dark:bg-gray-200 bg-gray-500 hover:bg-gray-300 rounded-md transition duration-200"
          pageLinkClassName="block px-4 py-2"
          previousClassName="dark:bg-gray-200 bg-gray-500 hover:bg-gray-300 rounded-md transition duration-200"
          previousLinkClassName="block px-4 py-2"
          nextClassName="dark:bg-gray-200  bg-gray-500 hover:bg-gray-300 rounded-md transition duration-200"
          nextLinkClassName="block px-4 py-2"
          breakClassName="dark:bg-gray-200 bg-gray-500 rounded-md px-4 py-2"
          activeClassName="dark:bg-sky-700 bg-gray-500 dark:text-white text-sky-500 rounded-md"
          disabledClassName="opacity-50 cursor-not-allowed"
        />
      </div>
    </section>
  );
};
