import { useState } from 'react';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';
import useTeamsStore from '../skyrave-core/stores/teams/teams';
import menues from '../common/routes';
import { Button } from '../skyrave-core/components';

function Settings() {
  const router = useRouter();
  const teams = useTeamsStore((state) => {
    return state.teams;
  });
  const setTeams = useTeamsStore((state) => {
    return state.setTeams;
  });

  const [newTeam, setNewTeam] = useState({ id: uuidv4(), name: '', permissions: [] });

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

    teamsCopy[teamIndex] = {
      ...teamsCopy[teamIndex],
      permissions: teamsCopy[teamIndex].permissions,
    };
    setTeams(teamsCopy);
  };

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
                            style={{ width: 180 }}
                            onClick={() => {
                              return toggleTeamPermission(
                                menu.id,
                                team.id,
                              );
                            }}
                          >
                            {menu.pageName}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <button
                  onClick={() => {
                    return router.push('/settings/manage-task-types');
                  }}
                >
                  Manage Tasks Types
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Settings;
