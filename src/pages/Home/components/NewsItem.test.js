import React from 'react';
import renderer from 'react-test-renderer';
import NewsItem from './NewsItem.js';

const newsItemMock = {
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
};

it('display source correctly', () => {
  const testRenderer = renderer.create(<NewsItem news={newsItemMock} />);
  const testInstance = testRenderer.root;
  expect(
    testInstance.findByProps({ className: 'source-content' }).children,
  ).toEqual([newsItemMock.source]);
});

it('display snippet correctly', () => {
  const testRenderer = renderer.create(<NewsItem news={newsItemMock} />);
  const testInstance = testRenderer.root;
  expect(testInstance.findByProps({ className: 'snippet' }).children).toEqual([
    newsItemMock.snippet,
  ]);
});

it('display public date correctly', () => {
  const testRenderer = renderer.create(<NewsItem news={newsItemMock} />);
  const testInstance = testRenderer.root;
  expect(
    testInstance.findByProps({ className: 'public-date' }).children,
  ).toEqual(['12/16/2017 22:12']);
});

it('calls onClick callback', () => {
  const onClickFn = jest.fn();
  const testRenderer = renderer.create(
    <NewsItem news={newsItemMock} onClick={onClickFn} />,
  );
  const testInstance = testRenderer.root;
  testInstance.props.onClick();
  expect(onClickFn).toBeCalled();
});
