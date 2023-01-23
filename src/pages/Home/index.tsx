// - o arquivo `index.tsx`, que vai conter a função de renderização da página Home. Por enquanto será apenas uma mensagem:
import Menu from "../../components/Menu";
// import Search from "../../assets/icons/search.svg";
import * as S from "./style";

const Home = () => {
  return (
    <S.Home>
      <Menu />
      <S.HomeContent>
        <header>
          <S.HomeHeaderDetails>
            <div>
              <S.HomeHeaderDetailsLogo>Pizza Fresh</S.HomeHeaderDetailsLogo>
              <S.HomeHeaderDetailsDate>
                Aqui ficará a data
              </S.HomeHeaderDetailsDate>
            </div>
            <S.HomeHeaderDetailsSearch>
              {/* <Search /> */}
              <input type="text" placeholder="proucure pelo sabor" />
            </S.HomeHeaderDetailsSearch>
          </S.HomeHeaderDetails>
        </header>
        <div>
          <S.HomeProductTitle>
            <b>Pizzas</b>
          </S.HomeProductTitle>
          <S.HomeProductList>
            <p>Lista de produtos aqui</p>
          </S.HomeProductList>
        </div>
      </S.HomeContent>
      <aside>
        <p>Detalhes do pedido aqui</p>
      </aside>
    </S.Home>
  );
};

export default Home;
