import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home.js';

const newsListMock = [
  {
    snippet:
      'Lakshmi Satyanarayana and Diwakar Davar had tried “the alphabet soup of dating websites” before a connection was made on shaadi.com.',
    source: 'The New York Times',
    multimedia: [
      {
        rank: 0,
        subtype: 'xlarge',
        caption: null,
        credit: null,
        type: 'image',
        url:
          'images/2017/12/17/fashion/weddings/17SATYANARAYANA/17SATYANARAYANA-articleLarge.jpg',
        height: 437,
        width: 600,
        legacy: {
          xlargewidth: 600,
          xlarge:
            'images/2017/12/17/fashion/weddings/17SATYANARAYANA/17SATYANARAYANA-articleLarge.jpg',
          xlargeheight: 437,
        },
        subType: 'xlarge',
        crop_name: 'articleLarge',
      },
    ],
    pub_date: '2017-12-16T15:00:00+0000',
  },
];

it('shows loading spinner', () => {
  const testRenderer = renderer.create(
    <Home getNews={jest.fn()} loadingNews={true} />,
  );
  const testInstance = testRenderer.root;
  expect(
    testInstance.findByProps({ className: 'loading-spinner-wrapper' }).children
      .length,
  ).toBe(1);
});

it('shows news item list', () => {
  const testRenderer = renderer.create(
    <Home getNews={jest.fn()} newsList={newsListMock} />,
  );
  const testInstance = testRenderer.root;
  expect(
    testInstance.findByProps({ id: 'news-item-list' }).children.length,
  ).toBe(1);
});
