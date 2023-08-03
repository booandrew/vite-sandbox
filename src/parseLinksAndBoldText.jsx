const checkChunk = (text, startsWith, endsWith) => {
  return text.startsWith(startsWith) && text.endsWith(endsWith);
};

const checkIsLink = (text) => {
  return checkChunk(text, '[', ']');
};

const checkIsLinkTitle = (text) => {
  return checkChunk(text, '(', ')');
};

const checkIsBold = (text) => {
  return checkChunk(text, '*', '*');
};

export const parseLinksAndBoldText = (text) => {
  const linksAndBoldText = /(\(\b[^)]*?\)|\[[^[\]]*?\]|\*[^*]*?\*)/g;
  const splitText = text.split(linksAndBoldText).filter(Boolean);

  return (
    <>
      {splitText.map((chunk, index) => {
        const prevItem = splitText[index - 1] || '';
        const nextItem = splitText[index + 1] || '';

        const isLink = checkIsLink(chunk);
        const isLinkTitle = checkIsLinkTitle(chunk) && checkIsLink(nextItem);

        const parsedText = chunk.slice(1, -1);

        if (isLinkTitle) {
          return '';
        }

        if (isLink) {
          const hasTitle = checkIsLinkTitle(prevItem);
          const titleWithoutBrackets = prevItem.replace(/[()]/g, '');

          return (
            <a target="_blank" key={index} href={parsedText}>
              {hasTitle ? titleWithoutBrackets : parsedText}
            </a>
          );
        }

        const isBold = checkIsBold(chunk);

        return (
          <span key={index} isBold={isBold}>
            {isBold ? parsedText : chunk}
          </span>
        );
      })}
    </>
  );
};
