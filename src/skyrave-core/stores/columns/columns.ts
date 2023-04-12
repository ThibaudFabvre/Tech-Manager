import { create } from 'zustand';

type ColumnsStore = {
  columns: Array<any>
  setColumns: (columns: any) => void
}

const useColumnsStore = create<ColumnsStore>((set) => {
  return {
    columns: [],
    setColumns: (columns) => { return set((state) => { return { ...state, columns }; }); },
  };
});

export default useColumnsStore;
