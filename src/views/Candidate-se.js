import React from 'react';
import classNames from 'classnames';
import SectionHeader from '../components/sections/partials/SectionHeader';

const sectionHeader = {
	title: 'Perguntas frequentes',
};

const socialProofs = [
  {
    title: `O que é necessário para participar da mentoria?`,
    text: `- Conhecimento básico de sintaxe JavaScript (Funções, arrays, strings, numbers)
    - Computador com pelo menos 4GB de ram e um processador quad-core
    - Conseguir encontrar filmes / livros / jogos piratas no google
    - Ter sangue nos olhos e vontade de ferro pra dar tudo de si`,
  },
  {
    title: `Quais tecnologias eu vou aprender?`,
    text: `Git, ESLint, TypeScript, NodeJs, Construção de APIs, React, StyledComponents, TypeORM, e muitas outras tecnologias do universo de JavaScript!`,
  },
  {
    title: `Quando começa?`,
    text: `Dia 4 de Outubro de 2021.`,
  },
  {
    title: `Tem certificado?`,
    text: `Sim! O certificado é entregue gratuitamente ao final do curso.`,
  },
  {
    title: `Me candidatei, e agora?`,
    text: `Agora sua parte está feita! É só aguardar pelo nosso contato para agendarmos uma entrevista, e caso você seja selecionado, você poderá participar da mentoria.`,
  },
  {
    title: `Como funciona a mentoria?`,
    text: `A mentoria tem a duração de 2 meses, dependendo do progresso da turma, sendo um intensivão de 6 horas por dia, das 9h da manhã até as 16h da tarde, com 1h de pausa para o almoço.`,
  },
  {
    title: `Quanto custa?`,
    text: `Sim, é claro que não é gratuito (bom de mais pra ser de graça, não é mesmo?), mas fique calmo! Você só paga caso consiga um emprego na área! O valor da mentoria é de 1 salário seu, parcelado em até 6 vezes. Por exemplo, você consegue um emprego onde seu salário bruto é de R$ 3.500,00 e você decide parcelar em 6 vezes. Você pagaria +/- R$ 583,00 por mês, durante os próximos 6 meses.`,
  },
  {
    title: `O que acontece se eu não conseguir um emprego?`,
    text: `A mentoria sai 100% de graça! Isso mesmo, se você não conseguir um emprego na área, você não paga um centavo!`,
  },
  {
    title: `Quais as formas de pagamento aceitas?`,
    text: `No momento aceitamos apenas Pix e Boleto bancário.`,
  },
  {
    title: `Até quando as inscrições ficam abertas?`,
    text: `As inscrições são para a Turma 2 da mentoria, que ainda não tem uma data de inicio, mas será algo em torno do final de Dezembro.`,
  },
  // {
  //   title: `Porque o site é tão mal feito?`,
  //   text: `Como essa é nossa primeira turma oficial, nós focamos muito mais em estruturar um conteúdo de qualidade para formar nossos alunos, então acabou não sobrando tempo para fazer um site bonitinho. Sabemos que isso não inspira muita confiança, mas o currículo de nossos professores vale mais do que qualquer site, isso nós garantimos 😉`,
  // },
].map((question, index) => ({
  ...question,
  nro: index + 1,
}));

export const Candidatese = () => (
	<section
		className={classNames(
			'hero section center-content',
			"illustration-section-01"
		)}
	>
		<div className="hero-content">
			<h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
				Candidate-se a <span className="text-color-primary">Mentoria</span>
			</h1>
			<div className="container-xs">
				<p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
					A melhor mentoria sobre programação voltada ao mercado.
				</p>
			</div>
		</div>



		<div
			style={{
				display: `flex`,
				justifyContent: `center`,
				marginBottom: "2em"
			}}
		>
			<div style={{
				backgroundColor: "#fff",
			}}>
				<iframe
					title="Candidate-se"
					src="https://docs.google.com/forms/d/e/1FAIpQLSewzJMBHrzG87moFkQIiUe6SGNXFuaeo5nAyF7_Y-VxR-1Wkg/viewform?embedded=true"
					width="500"
					height="1650"
					frameBorder="0"
					marginHeight={0}
					marginWidth={0}
				>
					Carregando…
				</iframe>
			</div>
		</div>


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
								no Discord (razal#0894)
							</a>
							.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
);
