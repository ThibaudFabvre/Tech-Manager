import React, { CSSProperties, useState } from 'react';
import { styles } from './Column.styles';

export type ColumnProps = {
  id: string
  name: string
  isTitleEditable?: boolean
  onTitleEditionBlur?: (id: string, data: any) => void
  children: React.ReactNode
}

const Column: React.FC<ColumnProps> = ({
  id,
  name,
  isTitleEditable = true,
  onTitleEditionBlur = () => {},
  children,
}) => {
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <div style={styles.columnContainer}>
      <div
        style={styles.titleContainer}
        onClick={() => {
          setIsEditMode(true);
        }}
      >
        {!isEditMode || !isTitleEditable ? (
          <h5 style={styles.columnTitle}>{name}</h5>
        ) : (
          <input
            style={styles.input}
            autoFocus
            defaultValue={name}
            onBlur={(event) => {
              setIsEditMode(false);
              onTitleEditionBlur(id, { name: event?.target.value });
            }}
          />
        )}
      </div>
      <div style={styles.cardContainer as CSSProperties}>{children}</div>
    </div>
  );
};

export default Column;
