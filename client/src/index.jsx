import Overview from './components/overview.jsx';
import RatingsReviews from './components/ratingsReviews.jsx';
import QuestionsAnswers from './components/questionsAnswers.jsx';
import RelatedItemsComparison from './components/relatedItemsComparison.jsx';
import React, { useState, useEffect } from 'react';


var App = () => {
  //declaring a new state variable, called stateVariable, and corresponding set function
  const [stateVariable, setStateVariable] = useState('initial value');

  //Use Effect is similiar to component did mount
  useEffect(() => {
    document.title = `Let's OverReact!`;
  });


  return (
    <div>
      <Overview state={stateVariable}/>
      <RatingsReviews setState={setStateVariable}/>
      <QuestionsAnswers />
      <RelatedItemsComparison />
    </div>
  );
};

export default App;
