import styled from 'styled-components/macro';

export const Inner = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: ${({ direction }) => direction};
	width: 100%;
	max-width: 1100px;
	margin: 0 auto;

	@media (max-width: 1000px) {
		flex-direction: column;
	}
`;

export const Container = styled.div``;