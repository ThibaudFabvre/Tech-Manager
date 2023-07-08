import { FC } from 'react';
import { styles } from './ProgressBar.styles';

type MileStone = { size: number; percentageDone: number }

type ProgressBarProps = {
  value: number
  maxValue: number
  milestones?: Array<MileStone>
  completeColor?: string
  highColor?: string
  averageColor?: string
  lowColor?: string
  showTextProgress?: boolean
}

const ProgressBar: FC<ProgressBarProps> = ({
  value,
  maxValue,
  milestones,
  completeColor = '#87BD46',
  highColor = '#2A79D9',
  averageColor = '#FFA600',
  lowColor = '#EE6463',
  showTextProgress = false,
}) => {
  milestones?.sort((x, y) => {
    return Number(y.percentageDone) - Number(x.percentageDone);
  });

  const percentage = (value / maxValue) * 100;

  const showBackgroundColorBasedOnPercentageAchieved = () => {
    let backgroundColor = '';
    if (percentage >= 66 && percentage < 100) {
      backgroundColor = highColor;
    } else if (percentage < 66 && percentage >= 33) {
      backgroundColor = averageColor;
    } else if (percentage < 33 && percentage >= 0) {
      backgroundColor = lowColor;
    } else {
      backgroundColor = completeColor;
    }

    return backgroundColor;
  };

  return (
    <div>
      <div style={{ ...styles.progressBarContainer }}>
        {milestones ? (
          milestones?.map((milestone, index) => {
            return (
              <div
                key={index}
                style={{
                  flex: milestone.size,
                  height: 18,
                  backgroundColor:
                                        milestone.percentageDone === 100
                                          ? completeColor
                                          : 'transparent',
                  borderRight: '1px solid grey',
                }}
              />
            );
          })
        ) : (
          <div
            style={{
              width: `${percentage}%`,
              height: 18,
              borderRadius: 25,
              backgroundColor: showBackgroundColorBasedOnPercentageAchieved(),
              display: 'flex',
            }}
          />
        )}
      </div>
      {showTextProgress && (
        <span>
          {milestones
            ? `${milestones.reduce((previousValue, currentValue) => {
              return currentValue.percentageDone === 100
                ? previousValue + currentValue.size
                : previousValue + 0;
            }, 0)}/${milestones.reduce((previousValue, currentValue) => {
              return previousValue + currentValue.size;
            }, 0)}`
            : `${value}/${maxValue}`}
        </span>
      )}
    </div>
  );
};

export default ProgressBar;
