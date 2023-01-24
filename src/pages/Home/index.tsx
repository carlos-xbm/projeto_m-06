// - o arquivo `index.tsx`, que vai conter a função de renderização da página Home. Por enquanto será apenas uma mensagem:
import { DateTime } from "luxon";
import Search from "../../assets/icons/search.svg";
import Menu from "../../components/Menu";
import OrderDetails from "../../components/OrderDetails";
import ProductItem from "../../components/ProductItem";
import ProductItemList from "../../components/ProductItemList";
import { navigationItems } from "../../data/navigation";
import { RoutePath } from "../../types/routes";
import * as S from "./style";

const Home = () => {
  const dateDescription = DateTime.now().toLocaleString({
    ...DateTime.DATE_SHORT,
    weekday: "long",
  });
  return (
    <S.Home>
      <Menu active={RoutePath.HOME} navItems={navigationItems} />
      <S.HomeContent>
        <header>
          <S.HomeHeaderDetails>
            <div>
              <S.HomeHeaderDetailsLogo>Pizza Fresh</S.HomeHeaderDetailsLogo>
              <S.HomeHeaderDetailsDate>
                {dateDescription}
              </S.HomeHeaderDetailsDate>
            </div>
            <S.HomeHeaderDetailsSearch>
              <Search />
              <input type="text" placeholder="proucure pelo sabor" />
            </S.HomeHeaderDetailsSearch>
          </S.HomeHeaderDetails>
        </header>
        <div>
          <S.HomeProductTitle>
            <b>Pizzas</b>
          </S.HomeProductTitle>
          <S.HomeProductList>
            <ProductItemList>
              <ProductItem />
            </ProductItemList>
          </S.HomeProductList>
        </div>
      </S.HomeContent>
      <aside>
        <OrderDetails />
      </aside>
    </S.Home>
  );
};

export default Home;
