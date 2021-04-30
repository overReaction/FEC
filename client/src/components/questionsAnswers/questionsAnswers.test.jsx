import axios from 'axios';
jest.mock('axios');

import React from "react";
import "@testing-library/react/dont-cleanup-after-each";
import { render, screen, cleanup } from '@testing-library/react'; //Allows artificial rendering
import userEvent from '@testing-library/user-event'; //Allows triggering of user events. Not demo'd on this page.
import '@testing-library/jest-dom'; //Provides a set of custom jest matchers that you can use to extend jest. These will make your tests more declarative, clear to read and to maintain.

import App from '../App.jsx';
import store from '../../store.js';
import { Provider } from 'react-redux';
import { reviewsMeta, reviews, styles, related, qa, product } from './mockData.js';

import Loadable from 'react-loadable';
Loadable.preloadAll();

/* Some example templates for testing are provided below. In general, you will
1)render the component (see examples below)
2)query for the component: https://testing-library.com/docs/queries/about
3)optionally insert user events to manipulate elements: https://testing-library.com/docs/ecosystem-user-event
4)test assertions about the component: https://github.com/testing-library/jest-dom */

describe('QA Widget', () => {
  beforeAll(async () => {
    axios.get.mockResolvedValueOnce({ data: reviewsMeta });
    axios.get.mockResolvedValueOnce({ data: reviews });
    axios.get.mockResolvedValueOnce({ data: styles });
    axios.get.mockResolvedValueOnce({ data: related });
    axios.get.mockResolvedValueOnce({ data: qa });
    axios.get.mockResolvedValueOnce({ data: product });
    await render(
      <Provider store={store}>
        <App />
      </Provider>);
  });

  test('Should have a list of questions', () => {
    expect(screen.getByTestId('questions')).toBeInTheDocument();
  });

  test('Should have a search bar', () => {
    expect(screen.getByTestId('search-bar')).toBeInTheDocument();
  });

  test('Should have an Add A Question button', () => {
    expect(screen.getByTestId('addQbutton')).toBeInTheDocument();
  });

  test('Should have an More Answered Questions button', () => {
    expect(screen.getByTestId('more-questions')).toBeInTheDocument();
  });
});

describe('Questions List Component', () => {
  afterAll(() => {
    cleanup();
  });

  test('Should have a Question component', () => {
    expect(screen.queryAllByTestId("question")).toHaveLength(4);
  });

  test('Should have an Answer component', () => {
    expect(screen.queryAllByTestId("answer")).toHaveLength(7);
  });

  test('Two more questions should be diplayed after clicking More Answerered Questions button', () => {
    userEvent.click(screen.getByTestId('more-questions'));
    expect(screen.queryAllByTestId('question')).toHaveLength(6);
  });
});
