import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './CustomLink.css';

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div className="link-div">
      <Link
        style={{
          fontWeight: match ? 'lighter' : 'normal',
          textUnderlinePosition: match ? 'under' : 'auto',
          textDecoration: match ? 'underline' : 'none',
          textDecorationColor: match ? '#000000' : 'black',
          textDecorationThickness: match ? '3px' : 'auto',
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;
