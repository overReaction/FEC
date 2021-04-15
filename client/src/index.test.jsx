import React from "react";
import { render, screen } from '@testing-library/react'; //Allows artificial rendering
import userEvent from '@testing-library/user-event'; //Allows triggering of user events. Not demo'd on this page.
import '@testing-library/jest-dom'; //Provides matchers for testing assertions

//Normally, you will be importing the component you want to test. For examples's sake, I am declaring a class and functional component below.
class Component extends React.Component {
  render () {
    return <div data-testid="test">Hello</div>;
  }
}

const Hello = () => <h1>Hello World</h1>;

/* Some example templates for testing are provided below. In general, you will
1)render the component (see examples below)
2)query for the component: https://testing-library.com/docs/queries/about
3)optionally insert user events to manipulate elements: https://testing-library.com/docs/ecosystem-user-event
4)test assertions about the component: https://github.com/testing-library/jest-dom */


describe('componentName', () => {
  //Two ways of rendering/querying are available.

  //Option 1:
  test('Using screen', () => {
    //Render the component to the virtual screen (see import on line 2)
    render(<Component />);
    expect(screen.getByTestId('test')).toHaveTextContent('Hello');
  });

  //Option 2:
  test('Declaring a named container for your components', () => {
    const { container } = render(<Hello />);
    expect(container).toHaveTextContent("Hello World");
  });
});
