import React from 'react';
import RadioHead, { IRadioHead } from '../../components/radio-head/radio-head.component';
import RadioButtons, { IRadioButtons } from '../../components/radio-buttons/radio-buttons.component';

const Home: React.FC<{ radioHead: IRadioHead, radioButtons: IRadioButtons }> = ({ radioHead, radioButtons }) => (
	<>
		<header className="container">
			<RadioHead {...radioHead} />
		</header>
		<main className="container">
			<RadioButtons {...radioButtons}/>
		</main>
		<footer className="container">

		</footer>
	</>
);

export default Home;