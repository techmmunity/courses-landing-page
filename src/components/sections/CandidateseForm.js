import React from 'react';
import classNames from 'classnames';
import SectionHeader from './partials/SectionHeader';

const sectionHeader = {
	title: 'Candidate-se a Mentoria',
	paragraph: "A melhor mentoria sobre programação voltada ao mercado."
};

export const CandidateseForm = () => (
	<section
		className={classNames(
			'hero section center-content reveal-from-bottom',
		)}
		id="candidate-se"
	>
		<SectionHeader data={sectionHeader} className="section-inner center-content has-top-divider" />

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
					height="1700"
					frameBorder="0"
					marginHeight={0}
					marginWidth={0}
				>
					Carregando…
				</iframe>
			</div>
		</div>

	</section>
);
