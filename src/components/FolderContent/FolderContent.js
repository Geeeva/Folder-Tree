import React, {useContext, useState} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { ActiveDocFolderContext } from "../../store/ActiveDocFolderContext";
import DocumentContent from "./DocumentContent/DocumentContent";
import documents from '../../data/documents.json';
import User from '../../assets/images/user.jpg';
import Search from '../../assets/images/search.svg';
import Docx from '../../assets/images/docx.svg';
import Xlsx from '../../assets/images/xlsx.svg';
import Pdf from '../../assets/images/pdf.svg';

import { AiOutlineCaretDown, AiOutlineEllipsis } from "react-icons/ai";

const FolderContent = () => {

    const activeDocFolderStatus = useContext(ActiveDocFolderContext);
    const [selectedDocument, selectDocument] = useState({});
    const [activeDocument, setActive] = useState(false);
    const [icon, setIcon] = useState(null);

    const useSortableData = (items, config = null) => {
        const [sortConfig, setSortConfig] = useState(config);
        const sortedItems = React.useMemo(() => {
            let sortableItems = [...items];
            if (sortConfig !== null) {
                sortableItems.sort((a, b) => {
                    if (a[sortConfig.key] < b[sortConfig.key]) {
                        return sortConfig.direction === 'ascending' ? -1 : 1;
                    }
                    if (a[sortConfig.key] > b[sortConfig.key]) {
                        return sortConfig.direction === 'ascending' ? 1 : -1;
                    }
                    return 0;
                });
            }
            return sortableItems;
        }, [items, sortConfig]);

        const requestSort = (key) => {
            let direction = 'ascending';
            if (
                sortConfig &&
                sortConfig.key === key &&
                sortConfig.direction === 'ascending'
            ) {
                direction = 'descending';
            }
            setSortConfig({ key, direction });
        };

        return { items: sortedItems, requestSort, sortConfig };
    };

    const { items, requestSort, sortConfig } = useSortableData(documents);
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };

    const documentDetailsHandler = (index) => {
        let icon = items[index].ikonica;
       if(icon === "docx"){
           setIcon(Docx);
       } else if(icon === "xlsx"){
           setIcon(Xlsx);
       } else if(icon === "pdf") {
           setIcon(Pdf);
       }
    }

    return (
        <>
        <div className="folder__header">
                 <Row>
                    <div className="col-md-8 col-10">
                        <h6>
                            {activeDocFolderStatus.activeDocFolderStatus.name}
                        </h6>
                        <input
                            className="search"
                            placeholder="Search"
                         />
                    </div>
                    <div className="col-md-4 col-2">
                        <img src={User} alt="user-pic" />
                    </div>
                </Row>
            </div>
            <div className="panel__table__wrapper">
                <Row>
                    <div className="col-xl-8 col-lg-12">
                        <div className="folder--panel">
                            <h6>DOCUMENTS</h6>
                            <div className="folder--panel-details">
                                <div className="row">
                                    <div className="col-md-5">
                                        <p>Folder name: <span className="emphasized">{activeDocFolderStatus.activeDocFolderStatus.name}</span></p>
                                        <p>Department: <span className="emphasized">Lorem Ipsum</span></p>
                                        <p>Date of creation: <span className="emphasized">17.06.2019</span></p>
                                        <p>Created by: <span className="emphasized">Marko Marković</span></p>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="description">Description:</div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="table--content">
                                <div className="table--wrapper">
                                    <div className="table--scroll">
                                        <div className="table">
                                            <div className="head-wrapper">
                                                <div className="head">
                                                    <Row>
                                                        <Col xs={2} className={getClassNamesFor('nazivDokumenta')}>Document name</Col>
                                                        <Col xs={2} className={getClassNamesFor('broj')}><button onClick={() => requestSort('broj')}>Number<AiOutlineCaretDown /></button></Col>
                                                        <Col xs={2} className={getClassNamesFor('status')}><button onClick={() => requestSort('status')}>Status<AiOutlineCaretDown /></button></Col>
                                                        <Col xs={2} className={getClassNamesFor('autor')}><button onClick={() => requestSort('autor')}>Author<AiOutlineCaretDown /></button></Col>
                                                        <Col xs={2} className={getClassNamesFor('tip')}><button onClick={() => requestSort('tip')}>Type<AiOutlineCaretDown /></button></Col>
                                                        <Col xs={2} className={getClassNamesFor('datum')}><button onClick={() => requestSort('datum')}>Date<AiOutlineCaretDown /></button></Col>
                                                    </Row>
                                                </div>
                                            </div>
                                            <div className="table--body">
                                                {items.map((item, index) => (
                                                    <div
                                                        key={index}
                                                        onClick={() => {
                                                            documentDetailsHandler(index);
                                                            selectDocument(item)
                                                            setActive(index);
                                                            console.log(index)}}
                                                            className={index === activeDocument? "row-wrapper active" : "row-wrapper"}
                                                    >
                                                        <Row
                                                        >
                                                            <Col xs={2}>{item.nazivDokumenta}</Col>
                                                            <Col xs={2}>{item.broj}</Col>
                                                            <Col xs={2}>{item.status}</Col>
                                                            <Col xs={2}>{item.autor}</Col>
                                                            <Col xs={2}>{item.tip}</Col>
                                                            <Col xs={2} className="elipsis">{item.datum}<AiOutlineEllipsis /></Col>
                                                        </Row>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-12">
                        {activeDocument === false ? null : <DocumentContent selectedDocument={selectedDocument} icon={icon}/>}
                    </div>
                </Row>
            </div>
        </>
    );
};

export default FolderContent;