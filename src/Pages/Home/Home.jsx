import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';
import classnames from 'classnames';

import Post from '../../Components/Post/Post';

import Styles from './Home.module.css';

const GET_POSTS = gql`
  query GetPosts($limit: Int, $page: Int) {
    posts(pagination: { limit: $limit, page: $page }) {
      data {
        id
        title
        body
        author {
          name
        }
        comments {
          body
          author {
            name
          }
        }
      }
      currentPage
      totalPages
    }
  }
`;

const DEFAULT_LIMIT = 10;

const LIMIT_OPTIONS = [10, 20, 30, 50];

function Home() {
  const [limit, setLimit] = useState(DEFAULT_LIMIT);
  const [page, setPage] = useState(1);
  const { loading, error, data } = useQuery(GET_POSTS, {
    variables: { limit, page },
  });

  function handleBack() {
    setPage((prevPage) => (prevPage >= 2 ? prevPage - 1 : prevPage));
  }

  function handleForward() {
    setPage((prevPage) =>
      prevPage < data.posts.totalPages ? prevPage + 1 : prevPage,
    );
  }

  function handlePageSelect(page) {
    setPage(page);
  }

  return (
    <div className={Styles.home}>
      <h1 className={Styles.title}>Posts</h1>
      <form>
        <label className={Styles.limitLabel} htmlFor="name">
          Number of posts per page:
        </label>
        <select
          name="limit"
          id="limit"
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
        >
          {LIMIT_OPTIONS.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </form>
      {loading ? (
        <div className={Styles.loading}></div>
      ) : (
        <>
          <div className={Styles.pagination}>
            <button onClick={handleBack} className={Styles.paginationButton}>
              &laquo;
            </button>
            {new Array(data.posts.totalPages).fill('').map((_, index) => (
              <button
                onClick={() => handlePageSelect(index + 1)}
                className={classnames(
                  Styles.paginationButton,
                  data.posts.currentPage == index + 1 &&
                    Styles.paginationButtonActive,
                )}
                key={index}
              >
                {index + 1}
              </button>
            ))}
            <button className={Styles.paginationButton} onClick={handleForward}>
              &raquo;
            </button>
          </div>
          <ul className={Styles.posts}>
            {data.posts.data.map(({ title, body, id, author, comments }) => (
              <li className={Styles.post} key={id}>
                <Post
                  title={title}
                  body={body}
                  authorName={author.name}
                  comments={comments}
                />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Home;
