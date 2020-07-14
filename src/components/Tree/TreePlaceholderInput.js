import React, {useEffect, useRef, useState} from "react";
import { v4 } from "uuid";

import { OrganizerName } from "./Organizer/Organizer";

const OrganizerEdit = ({ name, inputRef, defaultValue, id }) => {
    const [isOpen, setIsOpen] = useState(false);
      return (
        <div className="styled--folder" id={v4()} name={name} >
          <OrganizerName
            name={
              <input
                ref={inputRef}
                className="tree__input"
              />
            }
          />
        </div>
      );
};

const PlaceholderInput = ({
  name,
  onSubmit,
  onCancel
}) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.addEventListener("keyup", (e) => {
        if(e.target.value.length !==0){
            if (e.key === "Enter") onSubmit(e.target.value);
        } else (onCancel && onCancel());

          if (e.key === "Escape") {
            onCancel && onCancel();
          }
    });
  }, [inputRef]);

  return (
    <OrganizerEdit
      name={name}
      inputRef={inputRef}
    />
  )
};

export { PlaceholderInput };
