import React, { ReactNode } from 'react';

import { v4 as uuidv4 } from 'uuid';
import { HiPlus } from 'react-icons/hi';
import { Board } from '../components/templates/Board';

import useColumnsStore from '../skyrave-core/stores/columns/columns';
import { Card, CardProps } from '../components/atoms/Card/Card';
import { Column } from '../components/molecules/Column';

const boards = [
  { name: 'Front-end', id: '1564116516' },
  { name: 'Back-end', id: '15641165169798' },
  { name: 'UX-UI', id: '15641165164151515' },
  { name: 'Product', id: '1564116516415151554645' },
];

const cards: CardProps[] = [
  { id: uuidv4(), text: 'HI', status: 'in progress' },
  { id: uuidv4(), text: 'HI', status: 'in progress' },
  { id: uuidv4(), text: 'HI', status: 'in progress' },
];

function Boards() {
  const columns = useColumnsStore((state) => {
    return state.columns;
  });
  const setColumns = useColumnsStore((state) => {
    return state.setColumns;
  });

  const updateColumnName = (columnId: string, data: any) => {
    const newColumns = [...columns];
    const indexOfColumn = newColumns.findIndex((column) => {
      return columnId === column.id;
    });
    newColumns[indexOfColumn] = { id: columnId, ...newColumns[indexOfColumn], ...data };
    setColumns(newColumns);
  };

  const columnsForBoard = (id: string) => {
    return columns.filter((column: any) => {
      return column.boardId === id;
    });
  };

  const addColumn = (boardId: string) => {
    setColumns([...columns, { name: '', boardId, id: uuidv4() }]);
  };

  return (
    <div style={{ width: '100%' }}>
      {boards.map((board) => {
        return (
          <Board name={board.name}>
            <>
              {' '}
              {columnsForBoard(board.id).map((column) => {
                return (
                  <Column
                    key={uuidv4()}
                    id={column.id}
                    name={column.name}
                    onTitleEditionBlur={updateColumnName}
                  >
                    {cards.map((card) => {
                      return <Card key={card.id} {...card} />;
                    })}
                  </Column>
                );
              })}
              {' '}
            </>
            <button
              style={{
                marginLeft: 18,
                display: 'flex',
                boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)',
                border: 'none',
                width: 25,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
                height: 25,
                backgroundColor: '#fff',
                cursor: 'pointer',
              }}
              onClick={() => {
                return addColumn(board.id);
              }}
            >
              <HiPlus />
            </button>
          </Board>
        );
      })}
    </div>
  );
}

export default Boards;
