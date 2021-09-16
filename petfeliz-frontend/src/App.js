import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
            <header className="row j-space-between">
                <div className="">
                    <a className="brand" href="index.html">PetFeliz</a>
                </div>
                <div className="">
                    <a href="cart.html">Carrinho</a>
                    <a href="signIn.html">Logar</a>
                </div>
        </header>
        <main>
          <Route path='/' component={HomePage} exact></Route>
          <Route path='/produto/:id' component={ProductPage}></Route>
        </main>
        <footer className="row center"> Todos os direitos reservedos &copy;PetFeliz 2021-2021</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
