export const parseLinksAndBoldText = (text) => {
  const regex = /(\[[^[\]]*?\]|\*[^*]*?\*)/g;
  const splitText = text.split(regex).filter(Boolean);

  return (
    <>
      {splitText.map((chunk, index) => {
        const isLink = chunk.startsWith('[') && chunk.endsWith(']');
        const isBold = chunk.startsWith('*') && chunk.endsWith('*');
        const parsedText = chunk.slice(1, -1);
        console.log({
          hello: splitText,
        });
        if (isLink) {
          return (
            <a
              key={chunk + index}
              style={{ color: '#7F56D9' }}
              target="_blank"
              href={parsedText}
            >
              {parsedText}
            </a>
          );
        }

        return (
          <span
            key={chunk + index}
            style={{ fontWeight: isBold ? '900' : '400' }}
          >
            {isBold ? parsedText : chunk}
          </span>
        );
      })}
    </>
  );
};
