import axios from 'axios';
jest.mock('axios');
import React from "react";
import { render, screen, cleanup } from '@testing-library/react'; //Allows artificial rendering
import userEvent from '@testing-library/user-event'; //Allows triggering of user events. Not demo'd on this page.
import '@testing-library/jest-dom'; //Provides a set of custom jest matchers that you can use to extend jest. These will make your tests more declarative, clear to read and to maintain.
import RelatedItemsComparison from './relatedItemsComparison.jsx';
import App from '../App.jsx';
import store from '../../store.js';
import { Provider } from 'react-redux';
import { reviewsMeta, styles, related, product } from './mockRelData.js';


/* Some example templates for testing are provided below. In general, you will
1)render the component (see examples below)
2)query for the component: https://testing-library.com/docs/queries/about
3)optionally insert user events to manipulate elements: https://testing-library.com/docs/ecosystem-user-event
4)test assertions about the component: https://github.com/testing-library/jest-dom */


describe('Related items and comparison widget', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>);
  });
  test('The Related Items and Comparison Widget should render to the screen', () => {
    expect(screen.getByTestId('related')).toBeInTheDocument();
  });

  test('Should have a related items list', () => {
    expect(screen.getByTestId('relatedProductsList')).toBeInTheDocument();
  });

  test('Should have a my outfit list', () => {
    expect(screen.getByTestId('outfitList')).toBeInTheDocument();
  });
});


// describe('Related Items and Comparison component', () => {
//   beforeEach(async () => {
//     axios.get.mockResolvedValueOnce({ data: reviewsMeta });
//     axios.get.mockResolvedValueOnce({ data: styles });
//     axios.get.mockResolvedValueOnce({ data: related });
//     axios.get.mockResolvedValueOnce({ data: product });
//     await render(
//       <Provider store={store}>
//         <App />
//       </Provider>);
//   });
//   afterEach(async () => {
//     cleanup();
//   });

//   test('Should have a related product card component', () => {
//     expect(screen.getByTestId("relatedProductCard")).toBeInTheDocument();
//   });

//   test('Should have a related product card image', () => {
//     expect(screen.getByTestId("relatedProductImage")).toBeInTheDocument();
//   });


//   test('The outfit card should be hidden if the user has not added any items to their outfit', () => {
//     let container = document.createElement("div");
//     document.body.appendChild(container);

    // act(() => {
    //   axios.get.mockResolvedValueOnce({ data: reviewsMeta });
    //   axios.get.mockResolvedValueOnce({ data: styles });
    //   axios.get.mockResolvedValueOnce({ data: related });
    //   axios.get.mockResolvedValueOnce({ data: product });
    //   render(
    //     <Provider store={store}>
    //       <App />
    //     </Provider>, container);
    // });

    // expect(container.querySelector("[data-testid=outfitCard]")).not.toBeInTheDocument();
  // });
// });
