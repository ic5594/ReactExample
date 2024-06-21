export default function TabButton({ children, isSelected, ...props }) {
  console.log(isSelected)
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} {...props}>{ children }</button>
    </li>
  );
}
