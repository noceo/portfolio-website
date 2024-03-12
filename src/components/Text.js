function Text({ text, headline }) {
  let textBlock = "";

  if (Array.isArray(text)) {
    textBlock = text.map((paragraph, i) => (
      <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
    ));
  } else {
    textBlock = <p dangerouslySetInnerHTML={{ __html: text }}></p>;
  }

  return (
    <>
      {headline && <h3>{headline}</h3>}
      {textBlock}
    </>
  );
}

export default Text;
