import { cloneElement, useState } from 'react';
import { BsBug } from 'react-icons/bs';
import useMenusStore from '../../skyrave-core/stores/menus/menus';
import {
  Card, ColorPicker, CursoredBar, IconPicker, Input,
} from '../../skyrave-core/components';
import { getColorFromGradient, gradientArray } from '../../skyrave-core/utils/colors';
import { arrayToString } from '../../skyrave-core/utils/typeConverters';
import DropDownSection from '../../skyrave-core/components/organisms/DropDownSection/DropDownSection';

const ticketSections = [
  { name: 'Title' },
  { name: 'Assignee' },
  { name: 'Priority' },
  { name: 'Steps' },
];

function ManageTaskTypes() {
  const setSelectedMenus = useMenusStore((state) => {
    return state.setSelectedMenus;
  });
  const setIsMenuOpen = useMenusStore((state) => {
    return state.setIsMenuOpen;
  });

  const [selectedIconColor, setSelectedIconColor] = useState('#fff');
  const [selectedIcon, setSelectedIcon] = useState(() => {
    return <BsBug size={18} />;
  });
  const [ticketColor, setTicketColor] = useState('#ccc');

  const changeMenu = (target: string) => {
    setIsMenuOpen(true);
    if (target === 'icon') {
      setSelectedMenus([
        <h5 style={{ marginBottom: 18, marginTop: 24, fontSize: 18 }}>
          Select the icon color
        </h5>,
        <Input
          type="text"
          placeholder="Color Code"
          value={selectedIconColor}
          onChange={setSelectedIconColor}
        />,
        <ColorPicker onColorSelect={setSelectedIconColor} />,
        <CursoredBar
          value={selectedIconColor}
          onChange={(data: any) => {
            const hex = getColorFromGradient(gradientArray, data.percentage);
            if (hex) {
              setSelectedIconColor(hex);
            }
          }}
          spectre={`linear-gradient(to right, ${arrayToString(gradientArray)})`}
          gradient={arrayToString(gradientArray)}
        />,
        <IconPicker
          onIconPick={(icon: any) => {
            setSelectedIcon(cloneElement(icon, { size: 18 }));
          }}
        />,
      ]);
    } else {
      setSelectedMenus([
        <h5 style={{ marginBottom: 18, marginTop: 24, fontSize: 18 }}>
          Select the icon color
        </h5>,
        <Input
          type="text"
          placeholder="Color Code"
          value={ticketColor}
          onChange={setTicketColor}
        />,
        <ColorPicker onColorSelect={setTicketColor} />,
        <CursoredBar
          value={ticketColor}
          onChange={(data: any) => {
            const hex = getColorFromGradient(gradientArray, data.percentage);
            if (hex) {
              setTicketColor(hex);
            }
          }}
          spectre={`linear-gradient(to right, ${arrayToString(gradientArray)})`}
          gradient={arrayToString(gradientArray)}
        />,
      ]);
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
              color={ticketColor}
              title="Test ticket text, testing testing testing ... testing again and again"
            >
              {cloneElement(selectedIcon, {
                color: selectedIconColor,
                backgroundColor: selectedIconColor,
              })}
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
              onClick={() => {
                return changeMenu('ticket');
              }}
            >
              Ticket Color
            </button>
            <button
              onClick={() => {
                return changeMenu('icon');
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
              >
                <div />
              </DropDownSection>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ManageTaskTypes;
