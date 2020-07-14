import _cloneDeep from "lodash.clonedeep";
import { searchDFS, createOrganizer } from "utils";
import { ORGANIZER } from "../utils/constants";

const reducerTree = (state, action) => {
  let newState = _cloneDeep(state);
  let node = null;
  let parent = null;
    console.log(action.payload.id);

    let foundNode = searchDFS({
      data: newState,
      cond: (item) => {
        console.log(item.id === action.payload.id );
        return item.id === action.payload.id;
      }
    });

    node = foundNode.item;

  switch (action.type) {
    case ORGANIZER.CREATE:
      node.parentFolder.push(createOrganizer({ name: action.payload.name }));
      return newState;

    default:
      return state;
  }
};

export { reducerTree };
