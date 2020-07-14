import React from 'react';
import ReactDOM from 'react-dom';
import { AiOutlinePlus } from "react-icons/ai";
import ModalContent from "./ModalContent";
const Modal = ({ isShowing, hide, modalData }) => isShowing ?
    <ModalContent modalData={modalData} isShowing={isShowing} hide={hide}/>: null;
export default Modal;