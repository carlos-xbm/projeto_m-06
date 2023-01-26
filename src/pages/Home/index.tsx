// - o arquivo `index.tsx`, que vai conter a função de renderização da página Home. Por enquanto será apenas uma mensagem:
import { DateTime } from "luxon";
import Search from "../../assets/icons/search.svg";
import CheckoutSection from "../../components/CheckoutSection";
import Menu from "../../components/Menu";
import OrderDetails from "../../components/OrderDetails";
import Overlay from "../../components/Overlay/index";
import ProductItem from "../../components/ProductItem";
import ProductItemList from "../../components/ProductItemList";
import { navigationItems } from "../../data/navigation";
import { RoutePath } from "../../types/routes";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dateDescription = DateTime.now().toLocaleString({
    ...DateTime.DATE_SHORT,
    weekday: "long",
  });
  const navigate = useNavigate();
  const handleNavigation = (path: RoutePath) => navigate(path);

  return (
    <S.Home>
      <Menu
        active={RoutePath.HOME}
        navItems={navigationItems}
        onNavigate={handleNavigation}
        onLogout={() => navigate(RoutePath.LOGIN)}
      />
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
      {/* <Overlay>
        <CheckoutSection />
      </Overlay> */}
    </S.Home>
  );
};

export default Home;
