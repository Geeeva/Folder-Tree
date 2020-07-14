export const searchDFS = ({ data, cond }) => {
  let final = null;
  let parentPath = [];

  const recursiveFind = (tree) => {
    tree.forEach((item, index) => {
      if (cond(item) === true) {
        final = item;
        return;
      }
        parentPath.push(item);
        recursiveFind(item.parentFolder);
    });
  };

  recursiveFind(data);
  return {
    item: final
  };
};

export const createOrganizer = ({ name }) => ({ name, folderType: "organizer", parentFolder: [] });
