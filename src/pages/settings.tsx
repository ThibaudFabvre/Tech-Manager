import { useState } from 'react';
import { Button } from '../components/atoms/Button/Button';
import useTeamsStore from '../skyrave-core/stores/teams/teams';
import menues from '../common/routes';

function Settings() {
  const teams = useTeamsStore((state) => {
    return state.teams;
  });
  const setTeams = useTeamsStore((state) => {
    return state.setTeams;
  });

  const [newTeam, setNewTeam] = useState({ name: '', permissions: [] });

  const addTeam = () => {
    setTeams([...teams, newTeam]);
  };

  const toggleTeamPermission = (permissionId: number, teamId: number) => {
    const teamsCopy = [...teams];
    const teamIndex = teamsCopy.findIndex((team) => {
      return team.id === teamId;
    });

    if (teamsCopy[teamIndex].permissions.includes(permissionId)) {
      const indexOfPermission = teamsCopy[teamIndex].permissions.findIndex((permission) => {
        return permission === permissionId;
      });
      teamsCopy[teamIndex].permissions.splice(indexOfPermission, 1);
    } else {
      teamsCopy[teamIndex].permissions.push(permissionId);
    }

    console.log(teamsCopy[teamIndex].permissions);

    teamsCopy[teamIndex] = { ...newTeam, permissions: teamsCopy[teamIndex].permissions };
    setTeams(teamsCopy);
  };

  const permissionTypes = [
    { type: 'page', display: <div>Page</div> },
    { type: 'tool', display: <div>Tool</div> },
    { type: 'documentation', display: <div>Documentation</div> },
    { type: 'functionality', display: <div>Functionality</div> },
  ];

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div>
          <input
            value={newTeam.name}
            onChange={(e) => {
              return setNewTeam({
                ...newTeam,
                name: e.target.value,
              });
            }}
          />
        </div>
        <Button text="Add team" onClick={addTeam} />
      </div>

      <div>
        <ul>
          {teams.map((team) => {
            return (
              <li>
                <h3>{team.name}</h3>
                <div style={{ display: 'flex' }}>
                  <ul style={{ listStyle: 'none' }}>
                    <h3>PAGE</h3>
                    {menues.map((menu: any) => {
                      return (
                        <li key={menu.id}>
                          <button
                            onClick={() => {
                              return toggleTeamPermission(
                                menu.id,
                                team.id,
                              );
                            }}
                          >
                            {team.permissions.includes(menu.id)
                              ? 'hi'
                              : ''}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Settings;
