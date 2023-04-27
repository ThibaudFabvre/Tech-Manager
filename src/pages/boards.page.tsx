import React from 'react';

import { v4 as uuidv4 } from 'uuid';
import { BsBug } from 'react-icons/bs';
import {
  Card, CardProps, Column, Board,
} from '../skyrave-core/components';
import useTeamsStore from '../skyrave-core/stores/teams/teams';
import { styles } from './boards.page.styles';

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
    <div style={styles.boardContainer}>
      {boards.map((board) => {
        return (
          <Board name={board.name}>
            <ul style={styles.list}>
              {' '}
              {columns.map((column, index) => {
                return (
                  <li key={index}>
                    <Column key={uuidv4()} id={uuidv4()} name={column.name}>
                      {cards.map((card) => {
                        return (
                          <Card key={index} {...card} color="red">
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
