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

  const toggleTeamPermission = (permissionId: number) => {
    const newTeamPermissionsCopy = [...newTeam.permissions];
    if (newTeamPermissionsCopy.includes(permissionId)) {
      newTeamPermissionsCopy.splice(indexOfPermission, 1);
    } else {
      newTeamPermissionsCopy.push(permissionId);
    }

    setNewTeam({ ...newTeam, permissions: newTeamPermissionsCopy });
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
                  {permissionTypes?.map((permissionType) => {
                    return (
                      <ul
                        key={permissionType.type}
                        style={{ listStyle: 'none' }}
                      >
                        <h3>{permissionType.type}</h3>
                        {menues.map((menu: any) => {
                          return (
                            <li key={menu.id}>
                              <button
                                onClick={() => {
                                  return toggleTeamPermission(
                                    menu.id,
                                  );
                                }}
                              >
                                {permissionType.display}
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    );
                  })}
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
