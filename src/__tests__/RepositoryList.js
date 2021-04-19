import React from 'react';
import { render, within } from '@testing-library/react-native';
import { RepositoryListContainer } from '../components/RepositoryList';

const format = (n) => {
  if (n < 1000) return n;
  return (n/1000).toFixed(1).concat('K');
};

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {

      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      const { getAllByTestId } = render(<RepositoryListContainer repositories={repositories}/>);

      //check if a list item is redered for every repo
      const repos = getAllByTestId("repoItem");
      expect(repos).toHaveLength(repositories.edges.length);

      //stores the repo data that was rendered
      const reposData = repos.map( repo => ({
        social: within(repo).getByTestId('socialInfo'),
        baseInfo: within(repo).getByTestId('baseInfo')
      }));

      //the expected repo data from the initial data + formatting of the numbers
      const reposExpectedData = repositories.edges.map(({ node }) => ({
        social: [node.stargazersCount, node.ratingAverage, node.reviewCount, node.forksCount].map(n => format(n)),
        baseInfo: [node.description, node.fullName, node.language]
      }));


      reposData.forEach((repoData, index) => {
        const currentExpected = reposExpectedData[index];
        currentExpected.baseInfo.forEach( value => expect(repoData.baseInfo).toHaveTextContent(value));
        currentExpected.social.forEach( value => {
          console.log('value', value);
          const field = within(repoData.social).queryByText(value.toString());
          expect(field).not.toBeNull();
        });
    });
    });
  });
});
