import { FC, CSSProperties } from 'react';
import '../../index.css';
import { useRouter } from 'next/router';

import { useMenusStore } from '@stores';
import menues from '../common/routes';
import { styles } from './_app.page.styles';

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

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div style={styles.appContainer}>
      <aside style={styles.mainMenu as CSSProperties}>
        <ul style={styles.menuList}>
          {menues.map((menu, index) => {
            return (
              <li
                key={`${menu.pageName}-${index}`}
                style={styles.menuItem}
                onClick={() => {
                  closeMenu();
                  return router.push(menu.path);
                }}
              >
                <span style={styles.menuDetail}>{menu.icon}</span>
                <span style={styles.menuDetail}>{menu.pageName}</span>
              </li>
            );
          })}
        </ul>
      </aside>
      <aside
        style={{
          ...(!isMenuOpened
            ? { transform: 'translate(320px ,0)' }
            : { transform: 'translate(0 ,0)' }),
          ...(styles.optionalMenu as CSSProperties),
        }}
      >
        {selectedMenus.map((selectedMenu: any) => {
          return <>{selectedMenu}</>;
        })}
      </aside>
      <div style={styles.subAppContainer}>
        <div style={styles.bodyContainer}>
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
};

export default App;
