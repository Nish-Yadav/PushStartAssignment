import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Post from '../TryProject/pages/blog/[uid]';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


Post = {
  users: null,
  total: null,
  per_page: null,
  current_page: null
}

makeHttpRequestWithPage = async pageNumber => {
  let response = await fetch(`https://TryProject.cdn.prismic.io/api/v2/users?page=${pageNumber}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  this.setPost({
    users: data.data,
    total: data.total,
    per_page: data.per_page,
    current_page: data.page,
  });
}