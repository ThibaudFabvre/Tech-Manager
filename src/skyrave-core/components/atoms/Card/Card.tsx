import { styles } from './Card.styles';

export type CardProps = {
  id?: string
  text?: string
  status?: string
  color?: string
  children?: React.ReactNode
  title?: string
}

function Card({ color, title = '', children }: CardProps) {
  return (
    <div style={styles.cardContainer}>
      <div style={{ ...styles.cardType, backgroundColor: color }}>{children}</div>
      <h6 style={styles.cardTitle}>{title}</h6>
    </div>
  );
}

export default Card;
