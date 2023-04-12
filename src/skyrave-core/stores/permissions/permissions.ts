import { create } from 'zustand';

type PermissionsStore = {
  permissions: Array<any>
  setPermissions: (permissions: any) => void
}

const usePermissionsStore = create<PermissionsStore>((set) => {
  return {
    permissions: [
      {
        id: 'c134485-9444',
        type: 'page',
        title: 'Access to Settings page',
        targetId: 'a1',
        isGranted: false,
        description: "Grants access to the 'Settings' page",
      },
      {
        id: 'c134485-9445',
        type: 'page',
        title: 'Access to Management page',
        isGranted: false,
        targetId: 'a2',
        description: "Grants access to the 'Management' page",
      },
      {
        id: 'c134485-9446',
        type: 'page',
        title: 'Access to Boards page',
        isGranted: false,
        targetId: 'a3',
        description: "Grants access to the 'Boards' page",
      },
      {
        id: 'c134485-9448451561',
        type: 'functionality',
        title: 'Editing team permissions',
        isGranted: false,
        targetId: 'b1',
        description: 'Grants the right to edit team permissions',
      },
      {
        id: 'c134485-9445545551',
        type: 'functionality',
        title: 'Modify Tech-Manager configurations',
        isGranted: false,
        targetId: 'b2',
        description: 'Grants the right to modify Tech-Manager permissions',
      },
    ],
    setPermissions: (permissions) => {
      return set((state) => {
        return { ...state, permissions };
      });
    },
  };
});

export default usePermissionsStore;
