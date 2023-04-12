import { create } from 'zustand';

type TeamsStore = {
  teams: Array<any>
  setTeams: (teams: any) => void
}

const useTeamsStore = create<TeamsStore>((set) => {
  return {
    teams: [],
    setTeams: (teams) => {
      return set((state) => {
        return { ...state, teams };
      });
    },
  };
});

export default useTeamsStore;
