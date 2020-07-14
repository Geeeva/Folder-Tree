import React from 'react';

const DocumentContent = (props) => {
		return (
			<div className="document__content">
				<Row>
					<div className="icon--wrapper col-md-12">
						<img src={icon} />
					</div>
					<div className="col-md-12">{selectedDocument.nazivDokumenta}</div>
					<div className="col-md-12">Version: {selectedDocument.verzija}</div>
					<div className="col-md-12">Author: {selectedDocument.autor}</div>
					<div className="col-md-12">Number: {selectedDocument.broj}</div>
					<div className="col-md-12">Type: {selectedDocument.tip}</div>
					<div className="col-md-12">Date: {selectedDocument.datum}</div>
					<div className="col-md-12">
						<button>Document insight</button>
						<button></button>
						<button></button>
						<button></button>
					</div>
					<div className="col-md-12">Informacje o dokumentu<button>Izmjeni</button></div>
					<div className="col-md-12">
						<div>Name of document</div>
						<div>{selectedDocument.nazivDokumenta}</div>
					</div>
					<div className="col-md-12">
						<div>Document number</div>
						<div>{selectedDocument.djelovodniBroj}</div>
					</div>
					<div className="col-md-12">
						<div>Document description</div>
						<div>{selectedDocument.opisDokumenta}</div>
					</div>
					<div className="col-md-12">
						<div>Subject</div>
						<div>{selectedDocument.subjekt}</div>
					</div>
					<div className="col-md-12">
						<div>Oznaka Dokumenta</div>
						<div>{selectedDocument.oznakaDokumenta}</div>
					</div>
					<div className="col-md-12">
						<div>Type of receipt</div>
						<div>{selectedDocument.nacinPrijema}</div>
					</div>
				</Row>
		</div>
		)
}

export default DocumentContent;