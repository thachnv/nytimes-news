import React from 'react';
import renderer from 'react-test-renderer';
import Modal from './Modal.js';

it('show the modal', () => {
  const testRenderer = renderer.create(<Modal />);
  const testInstance = testRenderer.root;
  testInstance.instance.show();
  expect(
    testInstance.findByProps({ className: 'modal' }).children
      .length,
  ).toBeTruthy();
});