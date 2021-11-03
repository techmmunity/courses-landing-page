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
          <a target="_blank" rel="noreferrer noopener" href="https://discord.gg/TakYksUzzZ">
						<Image
							src={require('./../../../assets/images/discord.svg')}
							alt="Discord"
							width={25}
							height={25}
						/>
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer noopener" href="https://www.youtube.com/channel/UCl322bbCTdwW-eOEO4J0Zxw">
						<Image
							src={require('./../../../assets/images/youtube.svg')}
							alt="Youtube"
							width={27}
							height={27}
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
        <li>
          <a target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/school/techmmunity">
						<Image
							src={require('./../../../assets/images/linkedin.svg')}
							alt="Linkedin"
							width={23}
							height={23}
						/>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FooterSocial;
