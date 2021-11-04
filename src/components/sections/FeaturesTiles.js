import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import { IoIosChatbubbles, IoLogoLinkedin }  from 'react-icons/io';
import { FaBrain, FaServer } from "react-icons/fa"
import { RiFileChartLine } from "react-icons/ri"
import { CgScreen } from "react-icons/cg"

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
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
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Direto ao ponto',
    paragraph: 'Aqui nós ensinamos tudo o quer você precisa saber, sem enrolação, sem perda de tempo.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
			id="direto-ao-ponto"
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <FaServer />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    BackEnd
                    </h4>
                  <p className="m-0 text-sm">
										Aprenta todo o necessário para construir APIs seguras, testadas e muito bem documentadas.
									</p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <CgScreen />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    FrontEnd
									</h4>
                  <p className="m-0 text-sm">
										Fazer telas bonitinhas não é o único trabalho de um frontend. Aprenda os segredos para se destacar.
									</p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <RiFileChartLine />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Fluxo de trabalho
									</h4>
                  <p className="m-0 text-sm">
										GitFlow, dailys, planning, retros, kanban, scrum, pair programming, e tudo mais o que é usado no dia a dia de uma empresa.
									</p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
										<FaBrain />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
										Planejamento
									</h4>
                  <p className="m-0 text-sm">
										Aprenda a planejar o que precisa ser feito antes de por a mão na massa, assim evitando muita dor de cabeça.
									</p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
										<IoLogoLinkedin />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Linkedin
                  </h4>
                  <p className="m-0 text-sm">
										Se destaque no Linkedin, tendo ele organizado e chamando a atenção das empresas.
									</p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
										<IoIosChatbubbles />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Interativo
									</h4>
                  <p className="m-0 text-sm">
										Nada de aulas onde o professor só fala e você fica parado assistindo, com a Techmmunity os alunos compartilham a tela e o professor serve de guia.
									</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
