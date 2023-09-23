// import Chair from "../../public/icons/arrow_right.svg";
export default async function Icon({ name, size = 16, fill = "#000" }) {
  const { default: Icon } = await import(`../../public/icons/${name}.svg`);
  return <Icon />;
}
