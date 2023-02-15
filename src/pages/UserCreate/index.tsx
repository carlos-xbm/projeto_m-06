import { HTMLAttributes, useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import Add from "../../assets/icons/add.svg";
import { UserService } from "../../services/UserService";
import { ErrorResponse } from "../../types/api/error";
import { User, UserResponse, UserUpdate } from "../../types/api/user";
import { QueryKey } from "../../types/QueryKey";
import EditUser from "../../components/EditUser";
import * as S from "./style";

type UserCreateType = HTMLAttributes<HTMLDivElement>;

type UserCreateProps = {} & UserCreateType;

const UserCreate = ({ ...props }: UserCreateProps) => {
  const [userCreate, setUsers] = useState<UserResponse[]>([]);
  const { data: usersData } = useQuery([QueryKey.USERS], UserService.getLista);

  const add = (UserService.create, {
    onSuccess: (data: UserResponse & ErrorResponse) => {
      if (data.statusCode) {
        return;
      }

      const userList = [...userCreate, data as UserResponse];
      setUsers(userList);
    },
    onError: () => {
      console.error("Erro ao criar um usuário");
    },
  });


  const [isAdding, setIsAdding] = useState(false);
  const [cancel, setCancel] = useState(false);

  type usersToEditType = { id: string } & User;

  let usersToEdit: usersToEditType[] = [];

  const form = {
    nick: "",
    name: "",
    image: "",
    pass: "",
    passConfirm: "",
  };

  const [userToAdd, setUserToAdd] = useState(form);

  const handleAddChange = (name: string, value: string) => {
    setUserToAdd({ ...userToAdd, [name]: value });
  };


  const handleCancel = () => {
    setCancel(true);
    setIsAdding(false);
    setTimeout(() => setCancel(false));
    usersToEdit = [];
  };


  const userIsValid = () =>
    Boolean(
      userToAdd.name.length &&
        userToAdd.nick.length &&
        userToAdd.pass.length &&
        userToAdd.passConfirm.length &&
        userToAdd.image.length &&
        userToAdd.pass === userToAdd.passConfirm
    );

  const userFormatter = (toFormat: typeof form): User => ({
    nickname: toFormat.nick,
    name: toFormat.name,
    password: toFormat.pass,
    passwordConfirm: toFormat.passConfirm,
    image: toFormat.image,
  });

  const handleSave = () => {
    const canAdd = userIsValid();


    if (canAdd) add;
    setTimeout(() => handleCancel(), 300);
    setUserToAdd(form);
    setIsAdding(false);
  };

  useEffect(() => {
    setUsers(usersData || []);
  }, [usersData]);

  return (
    <S.UserCreate {...props}>
      <S.UserCreateTitle>Gerenciar Usuários</S.UserCreateTitle>
      <S.UserCreateSub>
        <b>Usuários</b>
      </S.UserCreateSub>
      <S.UserCreateContent>
        {!isAdding ? (
          <S.UserCreateContentAdd onClick={() => setIsAdding(true)}>
            <Add />
            <span>Adicionar Usuário</span>
          </S.UserCreateContentAdd>
        ) : (
          <S.UserCreateContentAdd>
            <S.EditForm
              type="text"
              placeholder="Nome"
              success={Boolean(userToAdd.name.length)}
              value={userToAdd.name}
              onChange={({ target }) => handleAddChange("name", target.value)}
            />
            <S.EditForm
              type="text"
              placeholder="Nome de usuário"
              success={Boolean(userToAdd.nick.length)}
              value={userToAdd.nick}
              onChange={({ target }) => handleAddChange("nick", target.value)}
            />
            <S.EditForm
              type="password"
              placeholder="Senha"
              minLength={6}
              success={Boolean(userToAdd.pass.length)}
              value={userToAdd.pass}
              onChange={({ target }) => handleAddChange("pass", target.value)}
            />
            <S.EditForm
              type="password"
              minLength={6}
              success={Boolean(
                userToAdd.passConfirm.length &&
                  userToAdd.pass === userToAdd.passConfirm
              )}
              error={Boolean(
                userToAdd.passConfirm.length &&
                  userToAdd.pass.length &&
                  userToAdd.pass !== userToAdd.passConfirm
              )}
              placeholder="Confirmar senha"
              value={userToAdd.passConfirm}
              onChange={({ target }) =>
                handleAddChange("passConfirm", target.value)
              }
            />
            <S.EditForm
              type="url"
              placeholder="Imagem"
              success={Boolean(userToAdd.image.length)}
              value={userToAdd.image}
              onChange={({ target }) => handleAddChange("image", target.value)}
            />
          </S.UserCreateContentAdd>
        )}
      </S.UserCreateContent>
      <S.UserCreateActions>
        <S.UserCreateActionsCancel onClick={handleCancel}>
          Cancelar
        </S.UserCreateActionsCancel>
        <S.UserCreateActionsSave onClick={handleSave}>
          Salvar Mudanças
        </S.UserCreateActionsSave>
      </S.UserCreateActions>
    </S.UserCreate>
  );
};

export default UserCreate;
