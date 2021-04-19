import React from "react";
import { render, screen } from '@testing-library/react'; //Allows artificial rendering
import userEvent from '@testing-library/user-event'; //Allows triggering of user events. Not demo'd on this page.
import '@testing-library/jest-dom'; //Provides a set of custom jest matchers that you can use to extend jest. These will make your tests more declarative, clear to read and to maintain.
//import Overview from './overview.jsx';
import App from '../app.jsx';
import store from '../../store.js';
import { Provider } from 'react-redux';

/* Some example templates for testing are provided below. In general, you will
1)render the component (see examples below)
2)query for the component: https://testing-library.com/docs/queries/about
3)optionally insert user events to manipulate elements: https://testing-library.com/docs/ecosystem-user-event
4)test assertions about the component: https://github.com/testing-library/jest-dom */


describe('Overview Widget', () => {
  test('The Overview Widget should render to the screen', () => {
    render(<Provider store={store}>
      <App />
    </Provider>,);
    expect(screen.getByTestId('overview')).toHaveTextContent('Overview widget placeholder');
  });
});
