import React, { useEffect } from 'react';
import Product from '../components/Product';
import LoadingScreen from '../components/LoadingScreen';
import MessageScreen from '../components/MessageScreen';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

export default function HomePage() {

  const dispatch = useDispatch();
  const productList = useSelector(state => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
    return (
      <div className="">
        {loading ? (<LoadingScreen></LoadingScreen>) :
          error ? (<MessageScreen>{error}</MessageScreen>) :
          (<div className="row center">
              {
                products?.map(p => (
                  <Product key={p._id} product={p} ></Product>
                  )
                )
              }
                        
            </div>)
        }
      </div>
    )
}
