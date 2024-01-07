function Header() {
    return(
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
    );
}
export default Header;