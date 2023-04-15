import { FC, useState } from 'react';
import './index.css';
import { useRouter } from 'next/router';
import useMenusStore from '../skyrave-core/stores/menus/menus';
import menues from '../common/routes';

const App: FC<{ Component: any; pageProps: any }> = ({ Component, pageProps }) => {
  const selectedMenus = useMenusStore((state) => {
    return state.selectedMenus;
  });
  const isMenuOpened = useMenusStore((state) => {
    return state.isMenuOpen;
  });

  const setIsMenuOpen = useMenusStore((state) => {
    return state.setIsMenuOpen;
  });

  const router = useRouter();

  const setSelectedMenus = useMenusStore((state) => {
    return state.setSelectedMenus;
  });

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div style={{ width: '100vw' }}>
      <aside
        style={{
          ...(!isMenuOpened
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
        {selectedMenus.map((selectedMenu: any) => {
          return <>{selectedMenu}</>;
        })}
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
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
};

export default App;
