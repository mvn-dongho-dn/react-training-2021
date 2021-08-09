import React from 'react';
import { useParams } from 'react-router-dom';
import { decrement, increment } from '../../../store/couterSlice';
import { useDispatch, useSelector } from 'react-redux';

const ProductDetail = () => {
  const {id} = useParams();
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>
        This is product detail {id}
      </h1>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
}

export default ProductDetail;
