import { styles } from "./Card.styles";

export type CardProps = {
  id: string;
  text?: string;
  status?: string;
}

export const Card  = ({ id, text, status}: CardProps) => {

  return (
    <div
      style={styles.cardContainer}
    >
      <h6 style={styles.cardTitle}>{'hihihihihihihihihihihihihihihihihihihihihihihihihihihihihihi'}</h6>
      <button style={{
        border: 'none',
        borderRadius: 5,
        backgroundColor: 'white',
        float: 'right',        
    }}>...</button>
    </div>
  );
}

