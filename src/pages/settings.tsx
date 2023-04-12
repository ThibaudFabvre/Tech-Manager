import { useState } from 'react';
import { Button } from '../components/atoms/Button/Button';
import useTeamsStore from '../skyrave-core/stores/teams/teams';
import usePermissionsStore from '../skyrave-core/stores/permissions/permissions';

function Settings() {
  const permissions = usePermissionsStore((state) => {
    return state.permissions;
  });
  const teams = useTeamsStore((state) => {
    return state.teams;
  });
  const setTeams = useTeamsStore((state) => {
    return state.setTeams;
  });

  const [newTeam, setNewTeam] = useState({ name: '', permissions: [...permissions] });

  const addTeam = () => {
    setTeams([...teams, newTeam]);
  };

  const toggleTeamPermission = (id: number) => {
    const newTeamPermissionsCopy = [...newTeam.permissions];
    const indexOfPermission = newTeamPermissionsCopy.findIndex((permission) => {
      return permission.id === id;
    });
    newTeamPermissionsCopy[indexOfPermission].isGranted = !newTeamPermissionsCopy[indexOfPermission].isGranted;

    setNewTeam({ ...newTeam, permissions: newTeamPermissionsCopy });
  };

  const permissionTypes = permissions.reduce((prev, permission) => {
    return !prev.includes(permission.type) ? [...prev, permission.type] : prev;
  }, []);

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
                <ul style={{ display: 'flex' }}>
                  {permissionTypes?.map((type: string) => {
                    return (
                      <ul key={type} style={{ listStyle: 'none' }}>
                        <h3>{type}</h3>
                        {team.permissions.map((permission: any) => {
                          if (permission.type === type) {
                            return (
                              <li key={permission.id}>
                                <input
                                  type="checkbox"
                                  value={permission.isGranted}
                                  onChange={() => {
                                    return toggleTeamPermission(
                                      permission.id,
                                    );
                                  }}
                                />
                                <label>{permission.title}</label>
                              </li>
                            );
                          }
                        })}
                      </ul>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Settings;
