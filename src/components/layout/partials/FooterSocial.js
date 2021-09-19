import React from 'react';
import classNames from 'classnames';
import Image from '../../elements/Image';

const FooterSocial = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-social',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a target="_blank" rel="noreferrer noopener" href="https://discord.gg/eDJxCnEHk7">
						<Image
							src={require('./../../../assets/images/discord.svg')}
							alt="Discord"
							width={25}
							height={25}
						/>
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer noopener" href="https://guilded.gg/techmmunity">
						<Image
							src={require('./../../../assets/images/guilded.svg')}
							alt="Guilded"
							width={20}
							height={20}
						/>
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer noopener" href="https://www.instagram.com/techmmunity/">
						<Image
							src={require('./../../../assets/images/instagram.svg')}
							alt="Instagram"
							width={20}
							height={20}
						/>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FooterSocial;
