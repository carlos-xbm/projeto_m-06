import logo from "../../assets/imgs/logo.png";
import * as S from "./style";

const Menu = () => {
  return (
    <S.Menu>
      <nav>
        <S.MenuLogo>
          <img src={logo} alt="Logo" />
        </S.MenuLogo>
      </nav>
    </S.Menu>
  );
};

export default Menu;
