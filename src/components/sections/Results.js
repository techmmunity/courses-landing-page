import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Button from '../elements/Button';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Results = ({
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
    'features-tiles section',
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

  const tilesClasses = classNames(
    'center-content tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Veja nossos resultados',
    paragraph: 'Veja algumas das estatisticas da Techmmunity.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

						<div className="tiles-item reveal-from-bottom">
							<div className="features-tiles-item-content">
								<h3 className="mt-0" style={{fontSize: "5rem"}}>
									100%
								</h3>
								<p className="m-0 text-sm">
									Todos os nossos alunos foram empregados com sucesso.
								</p>
							</div>
						</div>


						<div className="tiles-item reveal-from-bottom">
							<div className="features-tiles-item-content">
								<h3 className="mt-0" style={{fontSize: "5rem"}}>
									3
								</h3>
								<p className="m-0 text-sm">
									A quantidade de alunos que se formaram conosco.
								</p>
							</div>
						</div>

          </div>

					<div style={{ display: "flex", flexDirection:"column", alignContent: "center", textAlign: "center" }}>
						<p className="m-0 mb-8">Junte-se as pessoas que mudaram suas vidas conosco</p>

						<div style={{ display: "flex", justifyContent: "center" }}>
							<Button tag="a" color="primary" wideMobile href="#candidate-se">
								Candidate-se agora
							</Button>
						</div>
					</div>
        </div>
      </div>
    </section>
  );
}

Results.propTypes = propTypes;
Results.defaultProps = defaultProps;

export default Results;
