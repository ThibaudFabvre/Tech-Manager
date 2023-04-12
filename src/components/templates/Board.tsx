import { styles } from './Board.styles';

type BoardProps = {
  name: string
  children: string | JSX.Element | JSX.Element[]
}

export const Board: React.FC<BoardProps> = ({ name, children }) => (
  <div style={styles.board}>
    <h3>{name}</h3>
    <div style={styles.boardContainer}>{children}</div>
  </div>
);
