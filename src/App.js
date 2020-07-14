import React, { useState, useLayoutEffect } from "react";
import { Container, Col } from "react-bootstrap";
import './assets/sass/main.scss';

import Tree from "./components/Tree/Tree";

const structure = [
  {
    folderType: "organizer",
    name: "FOLDERS",
    parentFolder: [
      {
        folderType: "organizer",
        name: "Folder 1",
        parentFolder: [
          {
            name: "Subfolder 1",
            folderType: "organizer",
            parentFolder: [
              {name: "New folder 1", folderType: "docFolder", parentFolder: [] },
              {name: "1", folderType: "docFolder", parentFolder: [] },
              {name: "2", folderType: "docFolder", parentFolder: [] }
            ]
          },
          {
            name: "Subfolder 2",
            folderType: "organizer",
            parentFolder: [
              {name: "2",  folderType: "docFolder", parentFolder: []},
              {name: "3", folderType: "docFolder", parentFolder: [] }
            ]
          },
          {
            name: "Subfolder 3",
            folderType: "organizer",
            parentFolder: [
              {name: "3", folderType: "docFolder", parentFolder: [] },
              {name: "4", folderType: "docFolder", parentFolder: [] }
            ]
          },
          {
            folderType: "organizer",
            name: "Subfolder 4",
            parentFolder: [
              {name: "4", folderType: "docFolder", parentFolder: [] },
              {name: "5", folderType: "docFolder", parentFolder: [] }
            ]
          },
          {
            folderType: "organizer",
            name: "Subfolder 5",
            parentFolder: [
              {name: "5", folderType: "docFolder", parentFolder: [] },
              {name: "6", folderType: "docFolder", parentFolder: [] }
            ]
          },
        ],
      },
      {
        folderType: "organizer",
        name: "Folder 2",
        parentFolder: []
      },
      {
        folderType: "organizer",
        name: "Folder 3",
        parentFolder: []
      },
      {
        folderType: "organizer",
        name: "Folder 4",
        parentFolder: []
      },
      {
        folderType: "organizer",
        name: "Folder 5",
        parentFolder: []
      },
      {
        folderType: "organizer",
        name: "Folder 6",
        parentFolder: []
      },
      {
        folderType: "organizer",
        name: "Folder 7",
        parentFolder: []
      },
      {
        folderType: "organizer",
        name: "Folder 8",
        parentFolder: []
      }
    ]
  }
];

export default function App() {
  let [data, setData] = useState(structure);

  const handleClick = (node) => {
    //console.log(node);
  };

  const handleUpdate = (state) => {
    localStorage.setItem(
        "tree",
        JSON.stringify(state, function (key, value) {
          if (key === "parentNode" || key === "id") {
            return null;
          }
          return value;
        })
    );
    localStorage.clear();
  };

  useLayoutEffect(() => {
    try {
      let savedStructure = JSON.parse(localStorage.getItem("tree"));
      if (savedStructure) {
        setData(savedStructure);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="App">
      <Container fluid className="fluid">
        <Col md={12} className="app-wrapper">
          <Tree data={data} onUpdate={handleUpdate} onNodeClick={handleClick} />
        </Col>
      </Container>
    </div>
  );
}
