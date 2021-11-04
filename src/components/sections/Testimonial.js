import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
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
    'testimonial section',
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
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Depoimentos dos alunos',
    paragraph: 'Veja abaixo os depoimentos de alguns de nossos alunos.'
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
            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Me ajudou muito a subir na minha carreira dentro do mercado, e pode ajudar outras pessoas a encontrar seu primeiro emprego ou mesmo aumentar seu nivel para conseguir um emprego melhor
									</p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-link">
                    <a target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/joaoggs/">João Gabriel</a>
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-name text-color-high">Turma Beta</span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Quando entrei no ramo de programação, estava perdido, fazia cursos famosos que não me levavam a lugar nenhum, talvez por causa de metodologia, o "na prática" como divulgavam não era tão prático assim. Na tech eu encontrei um ambiente real, com tasks organizadas, mão na massa em projetos muito bons e realmente aprendi muito com isso, desde a parte de estruturação (o que sentia bastante dificuldade), frameworks e como usa-los e até testes! Desenvolvi soft skills que não tinha antes, melhorei minha confiança e com o método de linkedin da tech consegui meu primeiro emprego como júnior numa empresa gigante! Então, super recomendo a mentoria, deu super certo pra mim.
									</p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-link">
                    <a target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/diozhn/">Diogo Mendes</a>
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-name text-color-high">Turma Beta</span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Eu já tinha feito vários tipos de cursos ou tutoriais focando sempre em entrar no mercado, mas nenhum deles me ajudou de verdade na hora das entrevistas, o que me ajudou tanto a conversar com entrevistadores como ter a expêriencia e suporte para entrar no mercado foi a Techmmunity.
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-link">
                    <a target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/thiago-moraes-0b71971a9/">Thiago de Souza</a>
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-name text-color-high">Turma Beta</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
