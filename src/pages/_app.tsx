import { FC, useState } from 'react';
import './index.css';
import { useRouter } from 'next/router';
import ColorPicker from '../components/organism/ColorPicker/ColorPicker';
import CursoredBar from '../components/atoms/CursoredBar/CursoredBar';
import { Input } from '../components/molecules/Input/Input';
import { validateHTML } from '../skyrave-core/utils/validators';
import useMenusStore from '../skyrave-core/stores/menus/menus';
import { Button } from '../components/atoms/Button/Button';
import menues from '../common/routes';
import { getColorFromGradient } from '../skyrave-core/utils/colors';

const gradient = [
  'rgb(255, 0, 0)',
  'rgb(255, 127, 0)',
  'rgb(255, 255, 0)',
  'rgb(0, 255, 0)',
  'rgb(0, 0, 255)',
  'rgb(75, 0, 130)',
  'rgb(148, 0, 211)',
  'rgb(255, 192, 203)',
];

const App: FC<{ Component: any; pageProps: any }> = ({ Component, pageProps }) => {
  const selectedMenus = useMenusStore((state) => {
    return state.selectedMenus;
  });
  const [selectedColor, setSelectedColor] = useState('#FB9E00');
  const [opacity, setOpacity] = useState(100);
  const [htmlCode, setHTMLCode] = useState('');
  const router = useRouter();

  const setSelectedMenus = useMenusStore((state) => {
    return state.setSelectedMenus;
  });

  const closeMenu = () => {
    setSelectedMenus({ ...selectedMenus, isOpened: false });
  };

  const calculateNewOpacity = (data: any) => {
    setOpacity(data.percentage / 100);
  };

  const calculateHexColor = (data: any) => {
    const hex = getColorFromGradient(gradient, data.percentage);
    if (hex) {
      setSelectedColor(hex);
    }
  };

  const gradientString = gradient.reduce((prev, curr, index) => {
    return prev + curr + (index + 1 !== gradient.length ? ',' : '');
  }, '');

  return (
    <div style={{ width: '100vw' }}>
      <aside
        style={{
          ...(!selectedMenus.isOpened
            ? { transform: 'translate(320px ,0)' }
            : { transform: 'translate(0 ,0)' }),
          transitionDuration: '200ms',
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
          border: '1px solid #ccc',
          height: '100vh',
          width: 320,
          position: 'fixed',
          right: 0,
          backgroundColor: 'white',
          zIndex: 1,
          boxShadow: '-5px 1px 10px 1px #ccc',
          paddingTop: 24,
          paddingLeft: 18,
          paddingRight: 18,
          paddingBottom: 24,
        }}
      >
        {selectedMenus.name === 'STYLES' ? (
          <>
            <h5 style={{ marginBottom: 18, marginTop: 24, fontSize: 18 }}>
              Element Color
            </h5>
            <Input
              type="text"
              placeholder="Color Code"
              value={selectedColor}
              onChange={setSelectedColor}
            />
            <ColorPicker onColorSelect={setSelectedColor} />
            <CursoredBar
              value={selectedColor}
              onChange={calculateHexColor}
              spectre={`linear-gradient(to right, ${gradientString})`}
              gradient={gradientString}
            />
            <CursoredBar
              value={opacity}
              onChange={calculateNewOpacity}
              spectre={`linear-gradient(to right, rgba(255, 255, 255, 0), ${selectedColor})`}
            />
          </>
        ) : (
          <>
            <h5 style={{ marginBottom: 18, marginTop: 24, fontSize: 18 }}>
              Enter new Element HTML
            </h5>
            <textarea
              style={{ width: '100%', height: 160 }}
              onChange={(e) => {
                return setHTMLCode(e.target.value);
              }}
              value={htmlCode}
            />
            <Button
              text="Add Component"
              onClick={() => {
                const htmlIsValid = htmlCode.length > 0 && validateHTML(htmlCode);
                if (htmlIsValid) {
                  const userComponentsContainer = document.getElementById(
                    'companyComponents',
                  ) as HTMLElement;
                  userComponentsContainer.innerHTML += htmlCode;
                }
              }}
            />
          </>
        )}
      </aside>
      <div style={{ display: 'flex' }}>
        <aside
          style={{
            width: 180,
            height: '100vh',
            borderRadius: 10,
            boxShadow: '5px 1px 10px 1px #ccc',
          }}
        >
          <ul style={{ width: '100%', paddingLeft: 0, paddingTop: 18 }}>
            {menues.map((menu, index) => {
              return (
                <li
                  key={`${menu.pageName}-${index}`}
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: 8,
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    closeMenu();
                    return router.push(menu.path);
                  }}
                >
                  <span style={{ marginLeft: 12 }}>{menu.icon}</span>
                  <span style={{ marginLeft: 12 }}>{menu.pageName}</span>
                </li>
              );
            })}
          </ul>
        </aside>
        <div style={{ width: 'calc(100vw - 240px)' }}>
          <Component
            {...pageProps}
            selectedColor={selectedColor}
            setSelectedColor={selectedColor}
            opacity={opacity}
            setOpacity={setOpacity}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
