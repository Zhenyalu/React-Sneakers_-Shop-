function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/unliked.svg" alt="Unliked  " />
      </div>
      <img src="/img/nike_green.svg" alt="" />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="cardOrder">
        <div className="cardOrderTwo">
          <span>Цена:</span>
          <b>12 999 Euro.</b>
        </div>
        <button className="addButton">
          <b>+</b>
        </button>
      </div>
    </div>
  );
}
export default Card;
