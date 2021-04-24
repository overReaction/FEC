import React from "react";
import { render, screen } from '@testing-library/react'; //Allows artificial rendering
import userEvent from '@testing-library/user-event'; //Allows triggering of user events. Not demo'd on this page.
import '@testing-library/jest-dom'; //Provides a set of custom jest matchers that you can use to extend jest. These will make your tests more declarative, clear to read and to maintain.
import Breakdown from "./breakdown.jsx";
import ReviewList from "./reviewList.jsx";
import RatingsReviews from "./ratingsReviews.jsx";

xdescribe('Ratings & Reviews Widget', () => {
  test('Ratings and Reviews sanity check', () => {
    //Render the component to the virtual screen (see import on line 2)
    render(<RatingsReviews />);
    expect(screen.getByTestId('RatingsReviews')).toHaveTextContent('testing sanity');
  });
});
