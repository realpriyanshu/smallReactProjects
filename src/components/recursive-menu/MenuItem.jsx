import MenuList from "./MenuList";

export default function MenuItem({ item }) {

  const [displayCurrentChildren , setDisplayCurrentChildren] = useState({})

  function handleToggle(){


  }
  return (
    <li>
    <div style={{
      display:"flex",
      gap:'20px'
    }}>
    <ul>
        <p>{item.label}</p>
        {item && item.children && item.children.length>0 ? <span>+</span>:null}
      </ul>
    </div>

      {item && item.children && item.children.length > 0 ? (
        <div>
          <MenuList list={item.children} />
        </div>
      ) : null}
    </li>
  );
}
