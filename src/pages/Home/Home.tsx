import React from 'react';
import RadioHead, { IRadioHead } from '../../components/radio-head/radio-head.component';

const Home: React.FC<{ radioHead: IRadioHead }> = ({ radioHead }) => (
	<>
		<RadioHead {...radioHead} />
	</>
);

export default Home;