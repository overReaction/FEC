import axios from 'axios';
jest.mock('axios');

import React from "react";
import "@testing-library/react/dont-cleanup-after-each";
import { render, screen, cleanup } from '@testing-library/react'; //Allows artificial rendering
import userEvent from '@testing-library/user-event'; //Allows triggering of user events. Not demo'd on this page.
import { act } from "react-dom/test-utils";
import '@testing-library/jest-dom'; //Provides a set of custom jest matchers that you can use to extend jest. These will make your tests more declarative, clear to read and to maintain.

import App from '../App.jsx';
import store from '../../store.js';
import { Provider } from 'react-redux';
import { reviewsMeta, reviews, reviewsNone, styles, related, qa, product } from './mockData.js';

/* Some example templates for testing are provided below. In general, you will
1)render the component (see examples below)
2)query for the component: https://testing-library.com/docs/queries/about
3)optionally insert user events to manipulate elements: https://testing-library.com/docs/ecosystem-user-event
4)test assertions about the component: https://github.com/testing-library/jest-dom */

describe('Overview Widget', () => {
  beforeAll(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>);
  });
  afterAll(() => {
    cleanup();
  });
  test('The Overview Widget should render to the screen', () => {
    expect(screen.getByTestId('overview')).toBeInTheDocument();
  });

  test('Should have an image gallery', () => {
    expect(screen.getByTestId('gallery')).toBeInTheDocument();
  });

  test('Should have a product information section', () => {
    expect(screen.getByTestId('product-info')).toBeInTheDocument();
  });

  test('Should have a style selector', () => {
    expect(screen.getByTestId('style-selector')).toBeInTheDocument();
  });

  test('Should have an add to cart section', () => {
    expect(screen.getByTestId('add-to-cart')).toBeInTheDocument();
  });
});

describe('Product Information component', () => {
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
  afterAll(() => {
    cleanup();
  });
  test('Should have a star rating component', () => {
    expect(screen.getByTestId("star-rating-section")).toBeInTheDocument();
  });

  test('The star rating should contain a total of 5 stars', () => {
    const overview = screen.getByTestId('product-info');
    expect(overview.getElementsByClassName('MuiRating-decimal').length).toBe(5);
  });

  test('The star rating should be representative up to a quarter of a review point', () => {
    const overview = screen.getByTestId('product-info');
    const rating = overview.getElementsByClassName('MuiRating-root');
    expect(rating[0]).toHaveAttribute('aria-label', "3.5 Stars");
  });

  test('There should be a link next to the star rating stating "Read all <#> reviews', () => {
    expect(screen.getByTestId('reviews-link')).toHaveTextContent('Read all 31 reviews');
  });

  test('The read all reviews link should scroll the page to Ratings & Reviews section when clicked', () => {
    expect(screen.getByTestId('reviews-link')).toHaveAttribute('href', '#RatingsReviews');
  });

  xtest('The entire star rating section should be hidden if the product has no reviews', () => {
    let container = document.createElement("div");
    document.body.appendChild(container);

    act(() => {
      axios.get.mockResolvedValueOnce({ data: reviewsMeta });
      axios.get.mockResolvedValueOnce({ data: reviewsNone });
      axios.get.mockResolvedValueOnce({ data: styles });
      axios.get.mockResolvedValueOnce({ data: related });
      axios.get.mockResolvedValueOnce({ data: qa });
      axios.get.mockResolvedValueOnce({ data: product });
      render(
        <Provider store={store}>
          <App />
        </Provider>, container);
    });

    expect(container.querySelector("[data-testid=star-rating]")).not.toBeInTheDocument();
  });

  test('Should display a product category', () => {
    expect(screen.getByTestId('product-category')).toHaveTextContent('CATEGORY > Jackets');
  });

  test('Should display a product title', () => {
    expect(screen.getByTestId('product-name')).toBeInTheDocument();
    expect(screen.getByTestId('product-name')).toHaveTextContent('Camo Onesie');
  });

  test('Should display a price which is derived from the initial default selected style', async () => {
    expect(screen.getByTestId('price')).toHaveTextContent('$140.00');
  });

  test('The price should update based on a style being selected', () => {
    userEvent.click(screen.getByTestId('style2'));
    expect(screen.getByTestId('price')).toHaveTextContent('SALE $100.00');
  });

  test('If an item is on sale, the sale price should appear in red followed by the struckthrough original price', () => {
    userEvent.click(screen.getByTestId('style2'));
    expect(screen.getByTestId('price')).toHaveTextContent('SALE $100.00 $140.00');
    expect(screen.getByTestId('price')).not.toHaveTextContent('SALE $100.00 $150.00');
  });

  xtest('Should show a product overview section if available for that item, and not show it if unavailable', () => {
    expect(screen.getByTestId('product-details')).toHaveTextContent('The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.');
    let noDescription = { ...product };
    delete noDescription.description;

    let container = document.createElement("div");
    document.body.appendChild(container);

    act(() => {
      axios.get.mockResolvedValueOnce({ data: reviewsMeta });
      axios.get.mockResolvedValueOnce({ data: reviewsNone });
      axios.get.mockResolvedValueOnce({ data: styles });
      axios.get.mockResolvedValueOnce({ data: related });
      axios.get.mockResolvedValueOnce({ data: qa });
      axios.get.mockResolvedValueOnce({ data: noDescription });

      render(
        <Provider store={store}>
          <App />
        </Provider>, container);
    });

    expect(container.querySelector("[data-testid=product-details]")).not.toBeInTheDocument();
  });

  test('Should have share buttons for Facebook, Twitter, and Pinterest', () => {
    const fbIcon = screen.getByTestId('fb-icon');
    const twitterIcon = screen.getByTestId('twitter-icon');
    const pinterestIcon = screen.getByTestId('pinterest-icon');
    const shareDiv = screen.getByTestId('share-icons');
    expect(shareDiv).toBeVisible();
    expect(shareDiv).toContainElement(fbIcon);
    expect(shareDiv).toContainElement(twitterIcon);
    expect(shareDiv).toContainElement(pinterestIcon);
  });
});


