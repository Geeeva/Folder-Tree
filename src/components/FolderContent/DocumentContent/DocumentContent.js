import React, {useState} from 'react';
import { Row } from "react-bootstrap";
import Mail from '../../../assets/images/mail.jpg';
import Download from '../../../assets/images/download.jpg';
import Upload from '../../../assets/images/upload.jpg';
import Modal from "../../Modal/Modal";
import useModal from "../../Modal/useModal";



const DocumentContent = (props) => {
	const {isShowing, toggle} = useModal();
		return (
			<div className="document__content">
				<Row>
					<div className="icon--wrapper col-md-12">
						<img src={props.icon} />
					</div>
					<div className="col-md-12 title">{props.selectedDocument.nazivDokumenta}</div>
					<div className="col-md-12">Version: {props.selectedDocument.verzija}</div>
					<div className="col-md-12">Author: {props.selectedDocument.autor}</div>
					<div className="col-md-12">Number: {props.selectedDocument.broj}</div>
					<div className="col-md-12">Type: {props.selectedDocument.tip}</div>
					<div className="col-md-12">Date of creation: {props.selectedDocument.datum}</div>
					<div className="col-md-12 actions">
						<button className="preview">DOCUMENT INSIGHT</button>
						<div className="buttons-wrapper">
							<button><img src={Mail} alt="mail" /></button>
							<button><a href = {props.selectedDocument.url} target = "_blank" rel="noopener noreferrer" download><img src={Download} alt="download" /></a></button>
							<button><img src={Upload} alt="upload" /></button>
						</div>
					</div>
					<div className="col-md-12 emphasized"><div>Infos about document</div><div className="line"></div><button className="change" onClick={toggle}>CHANGE</button></div>
					<Modal
						modalData={props}
						isShowing={isShowing}
						hide={toggle}
					/>
					<div className="col-md-12">
						<div>Document name</div>
						<div className="emphasized">{props.selectedDocument.nazivDokumenta}</div>
					</div>
					<div className="col-md-12">
						<div>Record number</div>
						<div className="emphasized">{props.selectedDocument.djelovodniBroj}</div>
					</div>
					<div className="col-md-12">
						<div>Document description</div>
						<div className="emphasized">{props.selectedDocument.opisDokumenta}</div>
					</div>
					<div className="col-md-12">
						<div>Subject</div>
						<div className="emphasized">{props.selectedDocument.subjekt}</div>
					</div>
					<div className="col-md-12">
						<div>Document label</div>
						<div className="emphasized">{props.selectedDocument.oznakaDokumenta}</div>
					</div>
					<div className="col-md-12">
						<div>Type of receipt</div>
						<div className="emphasized">{props.selectedDocument.nacinPrijema}</div>
					</div>
				</Row>
		</div>
		)
}

export default DocumentContent;