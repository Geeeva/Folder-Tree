import React, {useState, useReducer, useContext} from "react";
import {
    AiFillFolder,
    AiFillFolderOpen,
} from "react-icons/ai";
import { ActiveDocFolderContext } from "../../../store/ActiveDocFolderContext";
import { ACTIVEDOCFOLDER } from "../../../utils/constants";

const DocFolder = ({ id, name, node }) => {
    const [isOpen, setIsOpen] = useState(false);
    const activeDocFolderContext = useContext(ActiveDocFolderContext);

    return (
        <div className={
            name === activeDocFolderContext.activeDocFolderStatus.name &&
            id === activeDocFolderContext.activeDocFolderStatus.id
        ? "folder__wrapper--opened" : "folder__wrapper"} id={id} >
            <div className="action__wrapper">
                <div className="styled--folder"
                    onClick={() => {
        activeDocFolderContext.activeDocFolderDispatch({type: ACTIVEDOCFOLDER.CREATE, payload: {name: name, id: id, isOpen: isOpen, parentId: node.parentNode.id}})
                    }}
                    >
                    {name === activeDocFolderContext.activeDocFolderStatus.name &&
                    id === activeDocFolderContext.activeDocFolderStatus.id && activeDocFolderContext.activeDocFolderStatus.isOpen === true? <AiFillFolderOpen style={{fill: "#fff"}} /> : <AiFillFolder />}
                        &nbsp;{name}

                </div>
            </div>
        </div>

    );
};

export { DocFolder };
