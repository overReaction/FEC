import React from "react";
import { render, screen } from '@testing-library/react'; //Allows artificial rendering
import userEvent from '@testing-library/user-event'; //Allows triggering of user events. Not demo'd on this page.
import '@testing-library/jest-dom'; //Provides a set of custom jest matchers that you can use to extend jest. These will make your tests more declarative, clear to read and to maintain.
import QuestionsAnswers from './questionsAnswers.jsx';

/* Some example templates for testing are provided below. In general, you will
1)render the component (see examples below)
2)query for the component: https://testing-library.com/docs/queries/about
3)optionally insert user events to manipulate elements: https://testing-library.com/docs/ecosystem-user-event
4)test assertions about the component: https://github.com/testing-library/jest-dom */


describe('QA Widget', () => {
  test('The QA Widget should render to the screen', () => {
    render(<QuestionsAnswers/>);
    expect(screen.getByTestId('QuestionsAnswers')).toHaveTextContent('Questions and answers widget placeholder');
  });
});
