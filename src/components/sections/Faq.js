import React from 'react';
import classNames from 'classnames';
import SectionHeader from './partials/SectionHeader';

const sectionHeader = {
	title: 'Perguntas frequentes',
};

const socialProofs = [
  {
    title: `O que é necessário para participar da mentoria?`,
    text: `- Conhecimento básico de sintaxe JavaScript (Funções, arrays, strings, numbers)
    - Computador que rode Chrome + VSCode
    - Uma webcam
    - Não ter medo de pesquisar por você mesmo
    - Ter sangue nos olhos e vontade de ferro pra dar tudo de si`,
  },
  {
    title: `O que eu vou aprender?`,
    text: `Git, ESLint, TypeScript, NodeJs, Construção de APIs, React, StyledComponents, TypeORM, e muitas outras tecnologias do universo de JavaScript!${"\n\n"}Obs: Damos uma boa noção sobre front end, te ensinamos "segredos", manipulação de estados, multiplas paginas, e muitas outras coisas, porém atualmente não ensinamos CSS.`,
  },
  {
    title: `Como funciona a mentoria?`,
    text: `A mentoria tem a duração de 2 meses, sendo um intensivão de 3 horas por dia, das 9h da manhã até o meio dia, e algumas tarefas para serem feitas para o dia seguinte.${"\n\n"}Durante as aulas, os alunos se revezam para compartilhar a tela (em cada aula, um aluno diferente compartilha a tela), para que ele seja guiado pelo professor. Todas as aulas ficam gravadas e podem ser reassistidas depois, para caso reste alguma duvida. Caso ainda assim você tenha alguma dúvida, pode usar o discord para fazer perguntas ao professor ou aos outros alunos.`,
  },
  {
    title: `Quando começa?`,
    text: `A turma 2 de nossa mentoria começará no dia 6 de Dezembro de 2021.`,
  },
  {
    title: `Tem certificado?`,
    text: `Sim! O certificado é entregue gratuitamente ao final da mentoria.`,
  },
  {
    title: `Me candidatei, e agora?`,
    text: `Agora sua parte está feita! É só aguardar pelo nosso contato para agendarmos uma entrevista, e caso você seja selecionado, você poderá participar da mentoria.`,
  },
  {
    title: `Quanto custa?`,
    text: `Sim, é claro que não é gratuito (bom de mais pra ser de graça, não é mesmo?), mas fique calmo! Você só paga caso consiga um emprego na área! O valor da mentoria é de R$ 3.500, parcelado em até 6 vezes, e você só começa a pagar depois que terminar a mentoria!`,
  },
  {
    title: `Quais as formas de pagamento aceitas?`,
    text: `Aceitamos pix, boleto bancário e cartões de crédito das principais bandeiras.`,
  },
  {
    title: `Até quando as inscrições ficam abertas?`,
    text: `As inscrições ficam abertas até o dia 26 de Novembro, ou até as vagas serem preenchidas.`,
  },
].map((question, index) => ({
  ...question,
  nro: index + 1,
}));

export const Faq = () => (
	<section
		className={classNames(
			'hero section center-content reveal-from-bottom',
		)}
		id="perguntas-frequentes"
	>

		<SectionHeader data={sectionHeader} className="section-inner center-content has-top-divider" />

		<div style={{
			display: "flex",
			justifyContent: "center",
		}}>
			<div style={{
				textAlign: "left",
				width: "900px",
				maxWidth: "900px"
			}}>
				{socialProofs.map((socialProof) => (
					<div className="relative bg-white" key={socialProof.nro}>
						<div className="pt-10 px-6 md:px-0">
							<h4 className="text-2xl lg:text-4xl font-bold tracking-tight text-gray-900">
								{`${socialProof.nro}. ${socialProof.title}`}
							</h4>
							<p className="text-gray-600 text-base" style={{ whiteSpace: "pre-line" }}>
								{socialProof.text}
							</p>
						</div>
					</div>
				))}
				<div className="relative bg-white">
					<div className="pt-10 px-6 md:px-0">
						<h4 className="text-2xl lg:text-4xl font-bold tracking-tight text-gray-900">
							{`${socialProofs.length + 1}. Tenho mais duvidas, quem pode me ajudar?`}
						</h4>
						<p className="text-gray-600 text-base">
							Basta enviar uma mensagem para o Henrique{` `}
							<a
								href="https://wa.me/5511978569934"
								target="_blank"
								rel="noopener noreferrer"
								className="text-indigo-600 underline"
							>
								no Whatsapp (+5511978569934)
							</a>
							{` `}
							ou
							{` `}
							<a
								href="https://discord.com/channels/@me/705572674713157684"
								target="_blank"
								rel="noopener noreferrer"
								className="text-indigo-600 underline"
							>
								no Discord (razal#0042)
							</a>
							.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
);
