import logoImg from '../../assets/logo.svg';
import plusImg from '../../assets/plus.svg';

import { Container, Content } from './styles';

interface HeaderPropos {
  onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: HeaderPropos) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Money"/>
        <button onClick={onOpenNewTransactionModal}>
          New transaction
          <img src={plusImg} alt="Add"/>
        </button>
        
      </Content>
    </Container>
  )
}
