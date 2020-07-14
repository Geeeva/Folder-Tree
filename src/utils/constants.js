const createActionTypes = (name) => {
  return {
    CREATE: `${name}_CREATE`,
  };
};

const DOCFOLDER = createActionTypes("DOCFOLDER");
const ORGANIZER = createActionTypes("ORGANIZER");
const ACTIVEORGANIZER = createActionTypes("ACTIVEORGANIZER");
const ACTIVEDOCFOLDER = createActionTypes("ACTIVEDOCFOLDER");

export { DOCFOLDER, ORGANIZER, ACTIVEORGANIZER, ACTIVEDOCFOLDER};
