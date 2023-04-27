import { FC, useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';

type Props = {
  title: string
  onClick: () => void
}

const DropDownSection: FC<Props> = ({ title, onClick }) => {
  const [showChildren, setShowChildren] = useState(false);
  return (
    <div style={{ width: '100%' }}>
      <button
        style={{
          border: '1px solid #ccc',
          borderRadius: 5,
          marginTop: 8,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#fff',
          width: '100%',
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16,
          paddingRight: 16,
          cursor: 'pointer',
        }}
        onClick={onClick}
      >
        {title}
        <button
          style={{
            height: 32,
            width: 32,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            borderRadius: '50%',
            cursor: 'pointer',
          }}
        >
          <BiChevronRight />
          {' '}
        </button>
      </button>
    </div>
  );
};

export default DropDownSection;
