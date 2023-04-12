import { create } from 'zustand';

type ComponentsStore = {
  components: Array<any>
  setComponents: (components: any) => void
}

const useComponentsStore = create<ComponentsStore>((set) => ({
  components: [],
  setComponents: (components) => set((state) => ({ ...state, components })),
}));

export default useComponentsStore;
