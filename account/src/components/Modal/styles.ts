import styled from 'styled-components';
import Modal from 'styled-react-modal';

export const SModal = Modal.styled`
    border-radius: 0.8rem;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    overflow: hidden;
    width: 500px;
    height: 500px;
`;

export const SModalButton = styled.button`
    text-align: center;
`;

export const SModalTitle = styled.div`
    text-align: center;
`;

export const SModalParagraph = styled.p`
    text-align: center;
`;
