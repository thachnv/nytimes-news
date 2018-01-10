import React from 'react';
import renderer from 'react-test-renderer';
import Pagination from './Pagination.js';

it('display pages correctly', () => {
  const testRenderer = renderer.create(<Pagination currentPage={10} />);
  const testInstance = testRenderer.root;
  expect(
    testInstance
      .findByProps({ className: 'pages' })
      .children.map(child => child.children[0]),
  ).toEqual(['6', '7', '8', '9', '10', '11', '12', '13', '14', '15']);
});

it('show active page', () => {
  const testRenderer = renderer.create(<Pagination currentPage={10} />);
  const testInstance = testRenderer.root;
  expect(
    testInstance.findByProps({ className: 'page-item active' }).children,
  ).toEqual(['11']);
});

it('calls moveToPage with correct page value when click on page item', () => {
  const moveToPageMock = jest.fn();
  const testRenderer = renderer.create(<Pagination currentPage={10} moveToPage={moveToPageMock}/>);
  const testInstance = testRenderer.root;
  testInstance.findAllByProps({ className: 'page-item' })[0].props.onClick();
  expect(moveToPageMock).toBeCalledWith(5);
});

it('calls moveToPage with correct page value when click move to previous page', () => {
  const moveToPageMock = jest.fn();
  const testRenderer = renderer.create(<Pagination currentPage={10} moveToPage={moveToPageMock}/>);
  const testInstance = testRenderer.root;
  testInstance.findByProps({ className: 'fa fa-chevron-left move-left-button' }).props.onClick();
  expect(moveToPageMock).toBeCalledWith(9);
});

it('does nothing when click move to previous page if the current page is 0', () => {
  const moveToPageMock = jest.fn();
  const testRenderer = renderer.create(<Pagination currentPage={0} moveToPage={moveToPageMock}/>);
  const testInstance = testRenderer.root;
  testInstance.findByProps({ className: 'fa fa-chevron-left move-left-button' }).props.onClick();
  expect(moveToPageMock).not.toBeCalled();
});

it('calls moveToPage with correct page value when click move to next page', () => {
  const moveToPageMock = jest.fn();
  const testRenderer = renderer.create(<Pagination currentPage={10} moveToPage={moveToPageMock}/>);
  const testInstance = testRenderer.root;
  testInstance.findByProps({ className: 'fa fa-chevron-right move-right-button' }).props.onClick();
  expect(moveToPageMock).toBeCalledWith(11);
});

it('does nothing when click move to next page if the current page is 200', () => {
  const moveToPageMock = jest.fn();
  const testRenderer = renderer.create(<Pagination currentPage={200} moveToPage={moveToPageMock}/>);
  const testInstance = testRenderer.root;
  testInstance.findByProps({ className: 'fa fa-chevron-right move-right-button' }).props.onClick();
  expect(moveToPageMock).not.toBeCalled();
});
