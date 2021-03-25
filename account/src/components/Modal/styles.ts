import styled from 'styled-components';
import Modal from 'styled-react-modal';

export const SModal = Modal.styled`
    border-radius: 0.8rem;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    overflow: hidden;
    width: 500px;
`;

export const SModalParagraph = styled.p`
  padding: 0 20px;
  text-align: justify;
  font-family: 'Open Sans', Helvetica, Arial, Lucida, sans-serif;
`;

export const SModalHeader = styled.div`
  height: 50px;
  background-color: #0242d9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Open Sans', Helvetica, Arial, Lucida, sans-serif;
  position: relative;
  color: #fff;
`;

export const SModalHeaderCross = styled.button`
  background: transparent;
  border: none !important;
  position: absolute;
  right: 5px;
  top: 5px;
  color: #fff;
`;
