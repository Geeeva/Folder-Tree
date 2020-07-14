import React, { useState, useEffect } from "react";
import {
    AiOutlineFolderAdd,
    AiFillFolder,
    AiFillFolderOpen,
} from "react-icons/ai";

import { ORGANIZER } from "../../../utils/constants";
import { useTreeContext } from "../../../store/TreeContext";
import { PlaceholderInput } from "../TreePlaceholderInput"

const OrganizerName = ({ isOpen, name, handleClick }) => (
  <div className="styled--folder" onClick={handleClick}>
    {isOpen ? <AiFillFolderOpen /> : <AiFillFolder />}
    &nbsp;{name}
  </div>
);

const Organizer = ({ id, name, children, node }) => {
  const { dispatch, onNodeClick } = useTreeContext();
  const [isOpen, setIsOpen] = useState(false);
  const [childs, setChilds] = useState([]);

  useEffect(() => {
    setChilds([children]);
  }, [children]);

  const commitOrganizerCreation = (name) => {
    dispatch({ type: ORGANIZER.CREATE, payload: { id, name } });
  };

  const handleCancel = () => {
    setChilds([children]);
  };

  const handleNodeClick = React.useCallback(
    (event) => {
      event.stopPropagation();
      onNodeClick({ node });
    },
    [node]
  );

  const handleFolderCreation = (event) => {
    event.stopPropagation();
    setIsOpen(true);
    setChilds([
      ...childs,
      <PlaceholderInput
        key={id}
        folderType="organizer"
        onSubmit={commitOrganizerCreation}
        onCancel={handleCancel}
      />,
    ]);
  };

  return (
        <div className="folder__wrapper" id={id} onClick={handleNodeClick}>
            <div className="action__wrapper">
                <OrganizerName
                    id={id}
                    name={name}
                    isOpen={isOpen}
                    handleClick={() => setIsOpen(!isOpen)}
                />

                <div className="actions">
                  <AiOutlineFolderAdd onClick={handleFolderCreation} />
                </div>
            </div>
            <div className="tree__folder--collapsible" style={{maxHeight: isOpen === true ? '100vh' : "0px"}}>
              {childs}
            </div>
        </div>
    );
};

export { Organizer, OrganizerName };
