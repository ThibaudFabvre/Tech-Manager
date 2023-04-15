import { Button } from '../skyrave-core/components';
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
  const selectedMenus = useMenusStore((state) => {
    return state.selectedMenus;
  });
  const setSelectedMenus = useMenusStore((state) => {
    return state.setSelectedMenus;
  });

  const changeMenu = (menuName: string) => {
    // if (selectedMenus.name !== menuName && selectedMenus.isOpened) {
    //   setSelectedMenus({ ...selectedMenus, name: menuName });
    // } else if (selectedMenus.name !== menuName && !selectedMenus.isOpened) {
    //   setSelectedMenus({ name: menuName, isOpened: true });
    // } else if (selectedMenus.name === menuName && !selectedMenus.isOpened) {
    //   setSelectedMenus({ name: menuName, isOpened: true });
    // } else {
    //   setSelectedMenus({ ...selectedMenus, isOpened: false });
    // }
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
