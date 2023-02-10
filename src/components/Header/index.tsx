import * as C from './styles';
import logoImg from '../../assets/logo.svg';

export const Header = () => {
  return (
    <C.Container>
      <img src={logoImg} alt="Todo logo" />
    </C.Container>
  );
};
