import React from 'react';

import { v4 as uuidv4 } from 'uuid';
import { BsBug } from 'react-icons/bs';
import { Board } from '../components/templates/Board';

import { Card, CardProps } from '../components/atoms/Card/Card';
import { Column } from '../components/molecules/Column';
import useTeamsStore from '../skyrave-core/stores/teams/teams';

const cards: CardProps[] = [
  { id: uuidv4(), text: 'HI', status: 'To Do' },
  { id: uuidv4(), text: 'HI', status: 'In Progress' },
  { id: uuidv4(), text: 'HI', status: 'Done' },
];

function Boards() {
  const teams = useTeamsStore((state) => {
    return state.teams;
  });

  const boards = teams.map((team) => {
    return { name: team.name, id: uuidv4() };
  });

  const columns = [
    {
      name: 'To Do',
    },
    {
      name: 'In Progress',
    },
    {
      name: 'Done',
    },
  ];

  return (
    <div style={{ width: '100%' }}>
      {boards.map((board) => {
        return (
          <Board name={board.name}>
            <ul
              style={{
                marginTop: 16,
                display: 'flex',
                justifyContent: 'space-around',
                width: '100%',
              }}
            >
              {' '}
              {columns.map((column) => {
                return (
                  <li>
                    <Column key={uuidv4()} id={uuidv4()} name={column.name}>
                      {cards.map((card) => {
                        return (
                          <Card key={card.id} {...card} color="red">
                            <BsBug size={18} color="#fff" />
                          </Card>
                        );
                      })}
                    </Column>
                  </li>
                );
              })}
              {' '}
            </ul>
          </Board>
        );
      })}
    </div>
  );
}

export default Boards;
