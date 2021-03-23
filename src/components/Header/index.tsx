import logoImg from '../../assets/logo.svg';
import plusImg from '../../assets/plus.svg';

import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Money"/>
        <button>
          New transaction
          <img src={plusImg} alt="Add"/>
        </button>
      </Content>
    </Container>
  )
}
