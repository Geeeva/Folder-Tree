import { ACTIVEDOCFOLDER } from "../utils/constants";
let initialState = {
  name: "",
  id: null,
  isOpen: false,
  parentId: ""
}
const reducerDocFolderActive = (state, action) => {
  switch (action.type){
    case ACTIVEDOCFOLDER.CREATE:
      return {
      ...state,
      name: action.payload.name,
      id: action.payload.id,
      isOpen: !action.payload.isOpen,
      parentId: action.payload.parentId
    };

    default:
      return state
  }
};

export { reducerDocFolderActive };
