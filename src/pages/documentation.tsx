import { Button } from '../components/atoms/Button/Button';
import ProgressBar from '../components/atoms/ProgressBar/ProgressBar';
import useMenusStore from '../skyrave-core/stores/menus/menus';

const styles = {
  table: {
    width: '100%',
    border: '1px solid black',
    borderRadius: 5,
    marginLeft: 36,
    marginTop: 36,
  },
};

// const milestones = [
//   { size: 1, percentageDone: 84 },
//   { size: 2, percentageDone: 84 },
//   { size: 4, percentageDone: 100 },
// ];

function Documentation() {
  const currentMenu = useMenusStore((state) => {
    return state.currentMenu;
  });
  const setCurrentMenu = useMenusStore((state) => {
    return state.setCurrentMenu;
  });

  const changeMenu = (menuName: string) => {
    if (currentMenu.name !== menuName && currentMenu.isOpened) {
      setCurrentMenu({ ...currentMenu, name: menuName });
    } else if (currentMenu.name !== menuName && !currentMenu.isOpened) {
      setCurrentMenu({ name: menuName, isOpened: true });
    } else if (currentMenu.name === menuName && !currentMenu.isOpened) {
      setCurrentMenu({ name: menuName, isOpened: true });
    } else {
      setCurrentMenu({ ...currentMenu, isOpened: false });
    }
  };

  return (
    <>
      {/* {<ProgressBar
        completeColor={selectedColor}
        value={50}
        maxValue={100}
        milestones={milestones}
      />} */}

      <Button
        text="Pick a color"
        onClick={() => {
          return changeMenu('STYLES');
        }}
      />
      {/* {<div style={{
        height: 100, width: 100, backgroundColor: selectedColor, opacity,
      }}
      />} */}
      <div id="companyComponents" />
      <Button
        text="Add element"
        onClick={() => {
          return changeMenu('HTML');
        }}
      />
      <table style={styles.table}>
        <tr>
          <th>Department</th>
          <th>Tutorials</th>
          <th>Tools</th>
          <th>Data</th>
        </tr>
        <tr>
          <td>Management</td>
          <td />
          <td />
        </tr>
        <tr>
          <td>Accounting</td>
          <td />
          <td />
        </tr>
        <tr>
          <td>Product</td>
          <td />
          <td />
        </tr>
        <tr>
          <td>Tech</td>
          <td />
          <td />
        </tr>
        <tr>
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>Sales</td>
          <td />
          <td />
        </tr>
      </table>
    </>
  );
}

export default Documentation;
