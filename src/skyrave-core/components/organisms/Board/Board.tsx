import { CSSProperties } from 'react';
import { styles } from './Board.styles';

type BoardProps = {
  name: string
  children: string | JSX.Element | JSX.Element[]
}

const Board: React.FC<BoardProps> = ({ name, children }) => {
  return (
    <div style={styles.board as CSSProperties}>
      <h3>{name}</h3>
      <div style={styles.boardContainer}>{children}</div>
    </div>
  );
};

export default Board;
