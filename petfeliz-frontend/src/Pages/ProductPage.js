import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { detailsProduct } from '../actions/productActions';
import LoadingScreen from '../components/LoadingScreen';
import MessageScreen from '../components/MessageScreen';

export default function ProductPage(props) {

    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);
    return (
        <div>
            {   loading ? (<LoadingScreen></LoadingScreen >) :
                error ? (<MessageScreen>{error}</MessageScreen>) :
                (<div>
                    <Link to='/'> &larr; Voltar</Link>
                    <div className='row'>
                        <div className='col-2'>
                            <img className='large' src={product.image} alt={product.name}></img>
                        </div>
                        <div className='col-2'>
                            <ul>
                                <li>
                                    <h1>{product.name}</h1>
                                </li>
                                <li>
                                    <p>{product.description}</p>
                                </li>
                                <li>
                                    {product.qqtStock > 0 ?
                                        (<span className='success'>Disponível</span>) :
                                        (<span className='danger'>Esgotado</span>)}
                                </li>
                                <li>
                                    R$ {product.price}
                                </li>
                            </ul>
                                {product.qqtStock > 0 ? (
                                    <>
                                        <div className="row">
                                            <div>Quantidade</div>
                                            <select value={qtt} onChange={ element => setQtt(element.target.value)}>
                                                {
                                                    [...Array(product.qqtStock).keys()].map(e => (
                                                        <option key={e+1} value={e + 1}>{e + 1}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className='row'>
                                            <button className='half-block'> Adicionar ao Carrinho</button>
                                        </div>
                                    </>
                                ) :
                                
                                <></>
                            }    
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
}
