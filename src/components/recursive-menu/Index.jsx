import MenuList from "./MenuList";

export default function Index({ menus = [] }) {
  return (
    <div className="tree-view">
      <MenuList list={menus} />
    </div>
  );
}
