import { FC } from 'react';
import { styles } from './ColorPicker.styles';

type Color = Array<string>

type Props = {
  colors?: Color
  displayType?: 'rectangular' | 'circular' | 'square'
  onColorSelect: (color: string) => void
}

const ColorPicker: FC<Props> = ({
  colors = [
    '#000000',
    '#333333',
    '#4D4D4D',
    '#666666',
    '#808080',
    '#999999',
    '#B3B3B3',
    '#cccccc',
    '#FFFFFF',
    '#9F0500',
    '#D33115',
    '#F44E3B',
    '#C45100',
    '#E27300',
    '#FE9200',
    '#FB9E00',
    '#FCC400',
    '#FCDC00',
    '#194D33',
    '#68BC00',
    '#A4DD00',
    '#808900',
    '#B0BC00',
    '#DBDF00',
    '#0C797D',
    '#16A5A5',
    '#68CCCA',
    '#0062B1',
    '#009CE0',
    '#73D8FF',
    '#653294',
    '#7B64FF',
    '#AEA1FF',
    '#AB149E',
    '#FA28FF',
    '#FDA1FF',
  ],
  displayType = 'circular',
  onColorSelect,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 5,
      }}
    >
      {colors.map((color, index) => {
        return (
          <button
            key={index}
            onClick={() => { return onColorSelect(color); }}
            style={{
              backgroundColor: color,
              border: `1px solid ${color !== '#FFFFFF' ? color : '#cccccc'}`,
              cursor: 'pointer',
              ...styles[displayType],
            }}
          />
        );
      })}
    </div>
  );
};

export default ColorPicker;
