

function App() {
  return (
    <div className="wrapper">
      <header>
       <div className="headerLeft">
       <img src="/img/logo.svg" alt="Logo"/>
        <div className="headerInfo">
          <h3>REACT SNEAKERS</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
       </div>
        <ul className="headerRight">
          <li>
            <img src="/img/cart.svg"/>
            <span>1205 Euro.</span>
            </li>
          <li>
            <img src="/img/favorite.svg"/>
            <span>Закладки</span>
            </li>
          <li>
            <img src="/img/union.svg"/>
            <span>Профиль</span>
            </li>
        </ul>
      </header>
      <div className="content">
        <h1>Все кроссовки</h1>

       <div className="sneakers">
       <div className="card">
          <img src="/img/nike_green.svg" alt=""/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="cardOrder">
            <div className="cardOrderTwo">
              <span>Цена:</span>
              <b>12 999 Euro.</b>
            </div>
            <button><b>+</b></button>
          </div>
        </div>
        <div className="card">
          <img src="/img/nike_white.svg" alt=""/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="cardOrder">
            <div className="cardOrderTwo">
              <span>Цена:</span>
              <b>12 999 Euro.</b>
            </div>
            <button><b>+</b></button>
          </div>
        </div>
        <div className="card">
          <img src="/img/nike_multicolor.svg" alt=""/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="cardOrder">
            <div className="cardOrderTwo">
              <span>Цена:</span>
              <b>12 999 Euro.</b>
            </div>
            <button><b>+</b></button>
          </div>
        </div>
        <div className="card">
          <img src="/img/nike_yellow.svg" alt=""/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="cardOrder">
            <div className="cardOrderTwo">
              <span>Цена:</span>
              <b>12 999 Euro.</b>
            </div>
            <button><b>+</b></button>
          </div>
        </div>
       </div>

      </div>
    </div>
  );
}

export default App;
