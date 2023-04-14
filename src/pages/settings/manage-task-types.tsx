import { useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { BsBug } from 'react-icons/bs';
import useMenusStore from '../../skyrave-core/stores/menus/menus';
import { Card } from '../../components/atoms/Card/Card';

function DropDownSection({ title, onClick }) {
  return (
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
  );
}

const ticketSections = [
  { name: 'Title' },
  { name: 'Assignee' },
  { name: 'Complexity' },
  { name: 'Steps' },
];

function ManageTaskTypes({ selectedColor, opacity }) {
  const selectedMenus = useMenusStore((state) => {
    return state.selectedMenus;
  });
  const setSelectedMenus = useMenusStore((state) => {
    return state.setSelectedMenus;
  });

  const [selectedIcon, setSelectedIcon] = useState(<BsBug size={18} color="#fff" />);

  const changeMenu = (menuName: string) => {
    if (selectedMenus.name !== menuName && selectedMenus.isOpened) {
      setSelectedMenus({ ...selectedMenus, name: menuName });
    } else if (selectedMenus.name !== menuName && !selectedMenus.isOpened) {
      setSelectedMenus({ name: menuName, isOpened: true });
    } else if (selectedMenus.name === menuName && !selectedMenus.isOpened) {
      setSelectedMenus({ name: menuName, isOpened: true });
    } else {
      setSelectedMenus({ ...selectedMenus, isOpened: false });
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div style={{ width: 600, marginTop: 100 }}>
        <div style={{ marginTop: 100 }}>
          <h5>Preview</h5>
          <div>
            <Card
              color={selectedColor}
              title="Test ticket text, testing testing testing ... testing again and again"
            >
              {selectedIcon}
            </Card>
          </div>
        </div>
        <div>
          <h5>Settings</h5>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h3>BUG</h3>
            <button
              style={{ opacity }}
              onClick={() => {
                return changeMenu('STYLES');
              }}
            >
              Ticket Color
            </button>
            <button
              style={{ opacity }}
              onClick={() => {
                return changeMenu('STYLES');
              }}
            >
              Icon
            </button>
          </div>
        </div>
        <div style={{ marginTop: 100 }}>
          <h5>Fields</h5>
          {ticketSections.map((ticketSection) => {
            return (
              <DropDownSection
                title={ticketSection.name}
                onClick={() => {
                  return null;
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ManageTaskTypes;
