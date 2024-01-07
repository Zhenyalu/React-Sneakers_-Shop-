function Drawer() {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer">
        <h2 className="bin">
          Корзина
          <img src="/img/btn_remuve.svg" alt="" />
        </h2>

        <div className="items">
          <div className="cartItem">
            <div
              style={{ backgroundImage: "url(/img/nike_white.svg)" }}
              className="cartItemImg"
            ></div>

            <div className="airMaxBlock">
              <p className="airMax">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 Euro.</b>
            </div>
            <img className="remuveBtn" src="/img/btn_remuve.svg" alt="Remuve" />
          </div>
          <div className="cartItem">
            <div
              style={{ backgroundImage: "url(/img/nike_white.svg)" }}
              className="cartItemImg"
            ></div>

            <div className="airMaxBlock">
              <p className="airMax">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 Euro.</b>
            </div>
            <img className="remuveBtn" src="/img/btn_remuve.svg" alt="Remuve" />
          </div>
          <div className="cartItem">
            <div
              style={{ backgroundImage: "url(/img/nike_white.svg)" }}
              className="cartItemImg"
            ></div>

            <div className="airMaxBlock">
              <p className="airMax">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 Euro.</b>
            </div>
            <img className="remuveBtn" src="/img/btn_remuve.svg" alt="Remuve" />
          </div>
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого: </span>
              <div></div>
              <b>21 498 руб. </b>
            </li>
            <li className="block-bin">
              <span>Налог 5%: </span>
              <div></div>
              <b>1074 руб. </b>
            </li>
          </ul>
          <button className="greenBtn">
            Оформить заказ <img src="/img/errow.svg" alt="errow" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Drawer;
