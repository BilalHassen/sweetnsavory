import { menuData } from "@components/Nav/navMenuData";
import SubMenu from "@components/Nav/components/SubMenu/SubMenu";
import useWidth from "@hooks/useWidth";

function LargerMenu() {
  const menuDataSectionOne = menuData.slice(0, 5);

  const width = useWidth();

  return (
    <>
      <SubMenu data={menuDataSectionOne} />
      {width >= 1366 && (
        <SubMenu
          data={menuData.slice(menuDataSectionOne.length)}
          variant={true}
        />
      )}
    </>
  );
}

export default LargerMenu;