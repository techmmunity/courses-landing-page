import React from 'react';
import classNames from 'classnames';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a target="_blank" rel="noreferrer noopener" href="https://wa.me/5511978569934">Contato</a>
        </li>
        <li>
          <a href="#perguntas-frequentes">FAQ's</a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;
