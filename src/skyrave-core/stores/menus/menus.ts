import { create } from 'zustand';

type MenusStore = {
  menus: Array<any>
  selectedMenus: any
  isMenuOpen: boolean
  setMenus: (menus: any) => void
  setSelectedMenus: (menuName: any) => void
  setIsMenuOpen: (isMenuOpen: boolean) => void
}

const useMenusStore = create<MenusStore>((set) => {
  return {
    menus: [{ name: 'STYLES' }],
    selectedMenus: { name: 'STYLES', isOpened: false },
    isMenuOpen: false,
    setMenus: (menus) => {
      return set((state) => {
        return { ...state, menus };
      });
    },
    setSelectedMenus: (selectedMenus) => {
      return set((state) => {
        return {
          ...state,
          selectedMenus,
        };
      });
    },
    setIsMenuOpen: (isMenuOpen) => {
      return set((state) => {
        return { ...state, isMenuOpen };
      });
    },
  };
});

export default useMenusStore;
