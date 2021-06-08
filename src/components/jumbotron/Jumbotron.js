import React from 'react';
import { Container, Inner } from './styles/Jumbotron.Styles';

const Jumbotron = ({ children, direction = 'row', ...restProps }) => {
	return (
		<Inner direction={direction}>
			<p>Hello Again!</p>
		</Inner>
	);
};

export default Jumbotron;

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
};
