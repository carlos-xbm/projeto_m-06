import ButtonLarge from "../ButtonLarge/index";
import logo from "../../assets/imgs/logo.png";
import * as S from "./style";
import { HTMLAttributes, useState } from "react";

type BoxLoginType = HTMLAttributes<HTMLDivElement>;

export type BoxLoginProps = {
  onSubmitData: (data: { nickname: string; password: string }) => void;
  errorMessage: string;
} & BoxLoginType;

const BoxLogin = ({ onSubmitData, errorMessage }: BoxLoginProps) => {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (): void => {
    const data = { nickname, password };
    onSubmitData(data);
  };
  return (
    <S.BoxLogin>
      <S.BoxLoginLogo>
        <S.BoxLoginLogoText>
          <span>Pizza</span>
          <span>Fresh</span>
        </S.BoxLoginLogoText>
        <S.BoxLoginLogoImage src={logo} alt="Logo" />
      </S.BoxLoginLogo>
      <S.BoxLoginForm>
        <input
          type="text"
          placeholder="carlos-xbm"
          value={nickname}
          onChange={({ target }) => setNickname(target.value)}
        />
        <input
          type="password"
          placeholder="Abcd@123"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <ButtonLarge value="Entrar" type="button" onClick={handleSubmit} />
        {/* <ButtonLarge value="Criar Usuário" type="button" /> */}
      </S.BoxLoginForm>
      {Boolean(errorMessage.length) && (
        <S.BoxLoginError>{errorMessage}</S.BoxLoginError>
      )}
    </S.BoxLogin>
  );
};

export default BoxLogin;
