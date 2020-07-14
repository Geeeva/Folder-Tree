import React, {useReducer} from "react";
import { v4 } from "uuid";

import { TreeContext, reducerTree } from "../../store";
import { ActiveDocFolderContext, reducerDocFolderActive } from "../../store";
import { Row } from "react-bootstrap";

import { Organizer } from "../Tree/Organizer/Organizer";
import { DocFolder } from "../Tree/DocFolder/DocFolder";
import  FolderContent  from "../FolderContent/FolderContent";

const Tree = ({data, onNodeClick}) => {
  const [state, dispatch] = useReducer(reducerTree, data);
  const [activeDocFolderStatus, emit] = useReducer(reducerDocFolderActive, 20);

  return (
      <TreeContext.Provider
            value={{
              state,
              dispatch,
              onNodeClick: (node) => {
                onNodeClick && onNodeClick(node);
                  },
            }}
          >

            <ActiveDocFolderContext.Provider
                value={{activeDocFolderStatus: activeDocFolderStatus, activeDocFolderDispatch: emit}}
            >
                <Row>
                      <div className="tree col-xl-2 col-lg-12">
                          <TreeRecursive parentNode={state} data={state}  />
                      </div>
                        <div className="folder__content col-xl-10 col-lg-12">
                            {activeDocFolderStatus.isOpen === true ? <FolderContent /> : null}
                        </div>
                </Row>
            </ActiveDocFolderContext.Provider>
      </TreeContext.Provider>
  );
};

const TreeRecursive = ({ data, parentNode }) => {
  return data.map((item, index) => {
    item.parentNode = parentNode;

    if (!item.id) item.id = v4();

    if (item.folderType === "docFolder") {
      return (
        <DocFolder
          key={item.id}
          id={item.id}
          name={item.name}
          node={item}
          />
      );
    }
    if (item.folderType === "organizer") {
      return (
        <Organizer key={item.id} id={item.id} name={item.name} node={item}>
            <TreeRecursive parentNode={item} data={item.parentFolder} />
        </Organizer>
      );
    }
  });
};

Tree.DocFolder = DocFolder;
Tree.Organizer = Organizer;

export default Tree;
