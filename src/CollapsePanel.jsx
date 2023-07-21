import { useState } from 'react';
import Plus from './assets/icons/plus-circle.svg';
import Minus from './assets/icons/minus-circle.svg';
import { Collapse } from '@mui/material';

const HEADER_STYLE = {
  cursor: 'pointer',
  display: 'flex',
  gap: 16,
  alignItems: 'center',
  justifyContent: 'space-between',
};

const ICON_STYLE = { width: 20, height: 20 };

function CollapsePanel({ title, children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const onHeaderClick = () => setIsExpanded(!isExpanded);

  return (
    <div>
      <div onClick={onHeaderClick} style={HEADER_STYLE}>
        <h3>{title}</h3>
        <img style={ICON_STYLE} src={isExpanded ? Plus : Minus} alt="" />
      </div>
      <Collapse in={isExpanded}>{children}</Collapse>
    </div>
  );
}

export default CollapsePanel;
