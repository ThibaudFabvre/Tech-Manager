import { FC, ReactElement, createRef, useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { styles } from './DropDownSection.styles';

type Props = {
  key?: any
  title: React.ReactNode | string
  onClick?: () => void
  onHoverDisplay?: React.ReactNode
}

const DropDownSection: FC<Props> = ({ key, title, onClick, onHoverDisplay }) => {
  const [ showOptions, setShowOptions ] = useState(false);

  return (
    <div key={key} style={{ width: '100%' }} onMouseEnter={() => { setShowOptions(true) } } onMouseLeave={() => setShowOptions(false)} onClick={onClick}>
      <button
        style={styles.wrapper}
        onClick={onClick}
      >
        {title}
        <button
          style={styles.icon}
        >
          <BiChevronRight />
          {' '}
        </button>
      </button>
      {showOptions && <>{onHoverDisplay}</>}
    </div>
  );
};

export default DropDownSection;
