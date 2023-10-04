interface IMenuItemProps {
  menu: string;
}

const MenuItem = ({ menu }: IMenuItemProps) => {
  return <p>{menu}</p>;
};
export default MenuItem;
