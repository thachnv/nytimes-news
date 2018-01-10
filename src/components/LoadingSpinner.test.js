import React from 'react';
import renderer from 'react-test-renderer';
import LoadingSpinner from './LoadingSpinner.js';

it('show the spinner', () => {
  const testRenderer = renderer.create(<LoadingSpinner show={true} />);
  const testInstance = testRenderer.root;
  expect(
    testInstance.findByProps({ className: 'loading-spinner-wrapper' }).children
      .length,
  ).toBe(1);
});

it('hide the spinner', () => {
  const testRenderer = renderer.create(<LoadingSpinner show={false} />);
  const testInstance = testRenderer.root;
  expect(testInstance.children.length).toBeFalsy();
});
