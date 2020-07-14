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
This project shows a tree of folders, with two type of folders: folders that are only parent to child folders without documents and folders that contain documents.
You can add a new sub folder to a folder that contain no documents. 
For displaying folder tree is used a json structure. When clicking on folder with documents is being displayed table with list of documents.
Data in the table is being brought from external json file. 
Sorting is added to the table. When clicking on a specific document in the table, on the right side of the document it is displayed data of that document.
You can also download this document, and make changes in the right section of the display.
When clicking on a button CHANGE, is being opened a modal, throughout you can make changes and add one new controls. When hovering add new field you can select type od control to add to form.
All fields in form are required to be filled as well as the newly added control.
Form data is saved to local storage when pressing SAVE CHANGES.
The projects is done by using only using functional components with React hooks and not classes. 
That was one of the focuses of the project. For exchanging data between components that are not nested is used Context API/Reducers.



**[to project Demo](https://geeeva.github.io/folder-tree/)**

