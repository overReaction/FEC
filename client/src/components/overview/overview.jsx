import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeProductId } from '../appSlice.js';

const Overview = (props) => {
  const productId = useSelector((state) => state.app.productId);
  const productInfo = useSelector((state) => state.app.productInfo);
  const dispatch = useDispatch();
  return (
    <div>
      <h2> Overview </h2>
      <div data-testid="overview"> Overview widget placeholder.
      I can see the state change from the App level! Product Id: <b>{productId}</b>
      <div> I can also change state at the app level! </div>
      <button onClick={() => dispatch(changeProductId(18081))}> 18081 </button>
      <button onClick={() => dispatch(changeProductId(18082))}> 18082</button>
      <button onClick={() => dispatch(changeProductId(18083))}> 18083 </button>
      <h3>{productInfo.name}</h3>
      <div><span> ${productInfo.default_price} - </span>{productInfo.description}</div>
      </div>
    </div>
  );
};

export default Overview;
