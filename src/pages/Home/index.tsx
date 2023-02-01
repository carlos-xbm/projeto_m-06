// - o arquivo `index.tsx`, que vai conter a função de renderização da página Home. Por enquanto será apenas uma mensagem:
import { DateTime } from "luxon";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Search from "../../assets/icons/search.svg";
import Menu from "../../components/Menu";
import OrderDetails from "../../components/OrderDetails";
import ProductItem from "../../components/ProductItem";
import ProductItemList from "../../components/ProductItemList";
import { navigationItems } from "../../data/navigation";
import { products } from "../../mocks/products";
import { OrderItemType } from "../../types/OrderItemType";
import { OrderType } from "../../types/orderType";
import { ProductResponse } from "../../types/Product";
import { RoutePath } from "../../types/routes";
import * as S from "./style";

const Home = () => {
  const dateDescription = DateTime.now().toLocaleString({
    ...DateTime.DATE_SHORT,
    weekday: "long",
  });

  const navigate = useNavigate();

  const [activeOrderType, setActiverOrderType] = useState(
    OrderType.COMER_NO_LOCAL
  );
  const [orders, setOrders] = useState<OrderItemType[]>([]);

  const handleNavigation = (path: RoutePath) => navigate(path);

  const handleSelection = (product: ProductResponse) => {
    const existing = orders.find((i) => i.product.id === product.id);
    const quantity = existing ? existing.quantity + 1 : 1;
    const item: OrderItemType = { product, quantity };

    const list = existing
      ? orders.map((i) => (i.product.id === existing.product.id ? item : i))
      : [...orders, item];
    setOrders(list);
  };

  const handleRemoveOrderItem = (id: string) => {
    const filtered = orders.filter((i) => i.product.id != id);
    setOrders(filtered);
  };

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
              {Boolean(products.length) &&
                products.map((product, index) => (
                  <ProductItem
                    product={product}
                    key={`ProductItem-${index}`}
                    onSelect={handleSelection}
                  />
                ))}
            </ProductItemList>
          </S.HomeProductList>
        </div>
      </S.HomeContent>
      <aside>
        <OrderDetails
          orders={orders}
          onOrdersChange={(data) => setOrders(data)}
          onChangeActiveOrderType={(data) => setActiverOrderType(data)}
          activeOrderType={activeOrderType}
          onRemoveItem={handleRemoveOrderItem}
        />
      </aside>
      {/* <Overlay>
        <CheckoutSection />
      </Overlay> */}
    </S.Home>
  );
};

export default Home;
