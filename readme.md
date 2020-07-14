# Folder tree
Used tools:

- **ReactJS**: 
    - **Context API/Reducers**
    - **Local storage**
    - **Packages**: 
        - **Lodash**
        - **Node-sass**
        - **React-bootstrap**
        - **React-datepicker**
        - **React-icons**
        - **Uuid**


## Project description:
This project shows a tree of folders, with two type of folders: folders that are only parent to child folders with no documents inside and folders that contain documents.
You can add a new sub folder to a folder that contain no documents. 
For displaying folder tree is used a json structure. When clicking on folder that contains documents is being displayed table with list of documents.
Data in the table is being brought from external json file. 
Sorting is added as feature to the table. When clicking on a specific document in the table, on the right side of the document it's displayed data of that document.
You can also download this document, and make changes in the right section of the display.
When clicking on a button CHANGE, it's being opened a modal, throughout you can make changes and add one new controls. When hovering on ADD NEW FIELD, you can select type of control to add to form.
All fields in form are required to be filled as well as the newly added control.
Form data is saved to local storage when pressing SAVE CHANGES.
The projects is done by using only using functional components with React hooks and not classes. 
That was one of the focuses of the project. For exchanging data between not nested components it is used Context API/Reducers.
Project is fully responsive.

#Steps to run this project:

- **git clone https://github.com/Geeeva/Folder-tree.git**
- **cd Folder-tree**
- **npm install**
- **npm start**


**[Project Demo](https://geeeva.github.io/Folder-tree/)**

