import { create } from 'zustand';

type MenusStore = {
  menus: Array<any>
  currentMenu: any
  setMenus: (menus: any) => void
  setCurrentMenu: (menuName: any) => void
}

const useMenusStore = create<MenusStore>((set) => ({
  menus: [{ name: 'STYLES' }],
  currentMenu: { name: 'STYLES', isOpened: false },
  setMenus: (menus) => set((state) => ({ ...state, menus })),
  setCurrentMenu: (currentMenu) => set((state) => ({
    ...state,
    currentMenu,
  })),
}));

export default useMenusStore;
