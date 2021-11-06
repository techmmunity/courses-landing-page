import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const CallToAction = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const sectionHeader = {
    title: 'Ainda tem dúvidas?',
    paragraph: 'Converse com quem fez nossa mentoria, ou vá para a página de candidatura para ver nosso F.A.Q.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" style={{ paddingBottom: "60px" }} />
					<div className="container-xs center-content">
						<ButtonGroup>
							<Button tag="a" color="primary" wideMobile target="_blank" rel="noreferrer noopener" href="https://discord.gg/TakYksUzzZ">
								Converse com que fez nossa mentoria
							</Button>
							<Button tag="a" color="dark" wideMobile href="#candidate-se">
								Candidate-se
							</Button>
						</ButtonGroup>
					</div>
        </div>
      </div>
    </section>
  );
}

CallToAction.propTypes = propTypes;
CallToAction.defaultProps = defaultProps;

export default CallToAction;
