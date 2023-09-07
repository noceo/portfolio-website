import Chair from "../../public/icons/arrow_right.svg";

export default async function Icon({ name, size = 16, fill = "#000" }) {
  const icon = await import(`../../public/icons/${name}.svg`);
  console.log(icon);
  return <Chair />;
}
