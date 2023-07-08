import { cloneElement, useState } from 'react';
import { BsBug } from 'react-icons/bs';
import { BiChevronRight } from 'react-icons/bi';
import { HiChevronDoubleUp } from 'react-icons/hi2';
import useMenusStore from '../../skyrave-core/stores/menus/menus';
import {
  Card,
  ColorPicker,
  CursoredBar,
  IconPicker,
  Input,
  ProgressBar,
} from '../../skyrave-core/components';
import { getColorFromGradient, gradientArray } from '../../skyrave-core/utils/colors';
import { arrayToString } from '../../skyrave-core/utils/typeConverters';
import DropDownSection from '../../skyrave-core/components/organisms/DropDownSection/DropDownSection';


const styles = {
  wrapper: {
    border: '1px solid #ccc',
    borderRadius: 5,
    marginTop: 8,
    backgroundColor: '#fff',
    width: '100%',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
  }
}

  const ticketSections = [
  { name: 'Title', type: 'text', display: ({ name, type } : { name: string , type: string }) => <div style={styles.wrapper}><span>{name}</span> (<span>{type}</span>)</div> },
  { name: 'Status', type: 'option picker', display: ({ name, type } : { name: string , type: string }) => <div style={styles.wrapper}><span>{name}</span> (<span>{type}</span>)</div>},
  { name: 'Assignee', type: 'option picker', display: ({ name, type } : { name: string , type: string }) => <div style={styles.wrapper}><span>{name}</span> (<span>{type}</span>)</div> },
  { name: 'Priority', type: 'option picker', display: ({ name, type } : { name: string , type: string }) => <div style={styles.wrapper}><span>{name}</span> (<span>{type}</span>)</div> },
  { name: 'Steps', type: 'informative element', display: ({ name, type } : { name: string , type: string }) => <DropDownSection title={<h3>{name} (<span>{type}</span>)</h3>} /> },
  { name: 'Once task is started', type: 'automation', display: ({ name, type } : { name: string , type: string }) => <DropDownSection title={<h3>{name} (<span>{type}</span>)</h3>} /> },
  { name: 'Once task is completed', type: 'automation', display: ({ name, type } : { name: string , type: string }) => <DropDownSection title={<h3>{name} (<span>{type}</span>)</h3>}  />  },
  { name: 'Once task is blocked', type: 'automation', display: ({ name, type } : { name: string , type: string }) => <DropDownSection title={<h3>{name} (<span>{type}</span>)</h3>}  /> },
];

function ManageTaskTypes() {

  const [selectedIconColor, setSelectedIconColor] = useState('#fff');
  const [selectedIcon, setSelectedIcon] = useState(() => {
    return <BsBug size={18} />;
  });

  const [ticketColor, setTicketColor] = useState('#ccc');
  const [ticketName, setTicketName] = useState('');


  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <div style={{ display: 'flex', marginTop: 100, width: '100%' , justifyContent: 'space-around' }}>
        <div>
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
          <div style={{ marginTop: 20 }}>
            <div
              style={{
                width: 600,
                border: `1px solid ${ticketColor}`,
                borderRadius: 5,
                overflow: 'hidden',
                boxShadow: '1px 1px 3px 1px #ccc',
              }}
            >
              <div style={{ backgroundColor: ticketColor, height: 20 }} />
              <div style={{ padding: 24 }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <button
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 5,
                      border: '2px solid red',
                      height: 32,
                      width: 32,
                      backgroundColor: '#fff',
                    }}
                  >
                    <HiChevronDoubleUp color="red" size={18} />
                  </button>
                  <button
                    style={{
                      borderRadius: 5,
                      border: 'none',
                      paddingLeft: 8,
                      paddingRight: 8,
                      backgroundColor: '#ccc',
                    }}
                  >
                    IN PROGRESS
                  </button>
                  <button
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '50%',
                      backgroundColor: 'black',
                      border: 'none',
                      width: 30,
                      height: 30,
                      color: '#fff',
                    }}
                  >
                    T
                  </button>
                </div>
                <h3 style={{ marginTop: 16 }}>
                  Super mega long Test title of Test Titles But that is just my
                  opinion
                </h3>

                <p
                  style={{
                    marginTop: 16,
                    border: 'none',
                    overflow: 'hidden',
                    width: '100%',
                  }}
                >
                  This is a very very very long description made because we like
                  goofing around around because we thought it would be a good idea
                  to make sure tickets can have very very very long descriptions.
                  We could have told you a story but our last writter went off
                  with all the prince and princess stories so now we are stuck
                  with admiting to ourselves what we are doing and how we got to
                  here. Anyway its probably boring for you as much as it is for us
                  BUT the good news is we can just stop here that way nobody gets
                  even more bored.
                </p>
                <div
                  style={{
                    marginTop: 20,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                  }}
                >
                  <div>
                    <span>Progress</span>
                    <div style={{ marginTop: 8 }}>
                      <ProgressBar value={10} maxValue={10} />
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',

                      padding: 8,
                      backgroundColor: ticketColor,
                      borderRadius: 5,
                    }}
                  >
                    {cloneElement(selectedIcon, {
                      color: selectedIconColor,
                      size: 30,
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 20 }}>
          <h5 style={{ marginBottom: 16 }}>Settings</h5>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Input
              type="text"
              placeholder="Ticket type"
              value={ticketName}
              onChange={(e) => {
                return setTicketName(e.target.value);
              }}
            />
            <DropDownSection
              title="Ticket color"
              onHoverDisplay={
                <div style={{ position: 'relative', width: 0, height: 0,  zIndex: 10, borderRadius: 5, left: '50%' }}>
                  <div style={{width: 240, border: '1px solid grey', padding: 10, borderRadius: 5, backgroundColor: '#fff', }}>
                    <Input
                      type="text"
                      placeholder="Color Code"
                      value={ticketColor}
                      onChange={setTicketColor}
                    />
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
                    />
                  </div>
                </div>
              }
            />
            <DropDownSection
              title="Icon settings"
              onHoverDisplay={
                <div style={{ position: 'relative', width: 0, height: 0,  zIndex: 10, borderRadius: 5, left: '50%' }}>
                  <div style={{width: 240, border: '1px solid grey', padding: 10, borderRadius: 5, backgroundColor: '#fff', }}>
                    <Input
                      type="text"
                      placeholder="Color Code"
                      value={selectedIconColor}
                      onChange={setSelectedIconColor}
                    />
                    <ColorPicker onColorSelect={setSelectedIconColor} />
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
                    />
                    <IconPicker
                      onIconPick={(icon: any) => {
                        setSelectedIcon(cloneElement(icon, { size: 18 }));
                      }}
                    />
                  </div>
                </div>
              }
            />
          </div>
                  <div style={{ marginTop: 20 }}>
          <h5>Fields</h5>
          {ticketSections.map((ticketSection, index) => {
            return ticketSection.display({ name: ticketSection.name, type: ticketSection.type })
          })}
        </div>
        </div>
      </div>
    </div>
  );
}

export default ManageTaskTypes;
