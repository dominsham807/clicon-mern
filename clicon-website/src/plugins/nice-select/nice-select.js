import React from 'react';
import { bindNiceSelect } from './nice-select-util.js';
import './nice-select.css';

export default function NiceSelect({ id, children, ...otherProps }) {
  React.useEffect(() => {
    const el = document.getElementById(id);
    bindNiceSelect(el);
  }, []);

  return (
    <select id={id} {...otherProps}>
      {children}
    </select>
  );
}
