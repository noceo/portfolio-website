function Text({ text }) {
  const renderContent = () => {
    if (Array.isArray(text)) {
      return text.map((paragraph, i) => (
        <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
      ));
    } else {
      return <p dangerouslySetInnerHTML={{ __html: text }}></p>;
    }
  };

  return renderContent();
}

export default Text;
