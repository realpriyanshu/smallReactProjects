import MenuItem from "./MenuItem";

export default function MenuList({ list = [] }) {
  return (
    <ul className="menu-list-container">
      {list && list.length > 0 ? (
        <div>
          {list.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </div>
      ) : null}
    </ul>
  );
}
