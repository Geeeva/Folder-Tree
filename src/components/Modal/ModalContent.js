import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { AiOutlinePlus } from "react-icons/ai";
import { BsJustify, BsCheckBox } from "react-icons/bs";
import { MdInput } from "react-icons/md";

import DatePicker from "react-datepicker/es";
import "react-datepicker/dist/react-datepicker.css";

const ModalContent = ({ isShowing, hide, modalData }) => {
    const [formData, setFormData] = useState({
        nazivDokumenta: "",
        djelovodniBroj: "",
        opisDokumenta: "",
        subjekt: "",
        oznakaDokumenta: "",
        nacinPrijema: "",
        mjestoIzdavanjaDokumenta: "",
        brojDokumentaKodPosiljaoca: ""
    });

    const [additionalControl, setAdditionalControl] = useState(true);
    const [additionalControlValue, setAdditionalControlValue] = useState({item: ''});

    const [inputFields, setInputFields] = useState(
        []
    );

    const [textareas, setTextareas] = useState(
        []
    );

    const [checkboxes, setCheckboxes] = useState([]);

    const updateFormData = event =>
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });

    const [startDate, setStartDate] = useState(new Date());
    const { nazivDokumenta, djelovodniBroj, opisDokumenta, subjekt, oznakaDokumenta, nacinPrijema, grad, brojDokumentaKodPosiljaoca, datumDokumentaKodPosiljaoca } = formData;

    const handleInputCreation = () => {
        if(inputFields.length < 1) {
            const values = [...inputFields];
            values.push({ enteredInput: '' });
            setInputFields(values);
        }
        setAdditionalControl(false);
    }

    const handleTextareaCreation = () => {
        if(textareas.length < 1) {
            const values = [...textareas];
            values.push({ enteredText: '' });
            setTextareas(values);
        }
        setAdditionalControl(false);

    }

    const handleCheckCreation = () => {
        if(checkboxes.length < 1) {
            const values = [...checkboxes];
            values.push({ isChecked: 'true' });
            setCheckboxes(values);
        }
        setAdditionalControl(false);

    }

    const handleInputChange = (index, event) => {
        const values = [...inputFields];
        if (event.target.name === "enteredInput") {
            values[index].enteredInput = event.target.value;
        }
        setInputFields(values);
        setAdditionalControlValue({
            item: event.target.value
        })
    };

    const handleTextareaChange = (index, event) => {
        const values = [...textareas];
        if (event.target.name === "enteredText") {
            values[index].enteredText = event.target.value;
        }
        setTextareas(values);
        setAdditionalControlValue({
            item: event.target.value
        })
    };

    const handleCheckboxChange =  (index, event) => {
        const checked = true;
        const values = [...checkboxes];
        values[index].isChecked = !checked;
        setCheckboxes(values);
        setAdditionalControlValue({
            item: checked
        })
    }

    const handleSubmit = (e) => {
        alert('A form data was submitted: ' + formData);
        e.preventDefault();
        Object.assign(formData, {datumDokumentaKodPosiljaoca: startDate, dodatnaKontrola: additionalControlValue.item});
        localStorage.setItem('formData', JSON.stringify(formData));

        console.log(formData);
    }


    return(
        <form onSubmit={handleSubmit}>
                <div className="modal-overlay"></div>
                    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                            <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div className="col-md-12 form-head">
                            <div className="row">
                                <div className="col-md-4 title">
                                    <img src={modalData.icon} alt="icon" />
                                    <div>{modalData.selectedDocument.nazivDokumenta}</div>
                                </div>
                                <div className="col-md-4 details">
                                    <div>Version: {modalData.selectedDocument.verzija}</div>
                                    <div>Author: {modalData.selectedDocument.autor}</div>
                                </div>
                                <div className="col-md-4 add-button">
                                    <div className="actions__wrapper">
                                        <div className="new-field"><AiOutlinePlus />ADD NEW FIELD</div>
                                        <div className="actions">
                                            <button className="icons" onClick={() => handleInputCreation()} disabled={additionalControl === false? 'disabled' : null}><MdInput /></button>
                                            <button className="icons" onClick={() => handleTextareaCreation()} disabled={additionalControl === false ? 'disabled' : null}><BsJustify /></button>
                                            <button className="icons" onClick={() => handleCheckCreation()} disabled={additionalControl === false ? 'disabled' : null}><BsCheckBox /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-content">
                            <div className="row">
                                <div className="col-md-4">
                                    <label>
                                    Document name
                                        <input
                                            value={nazivDokumenta}
                                            onChange={e => updateFormData(e)}
                                            placeholder={modalData.selectedDocument.nazivDokumenta}
                                            type="text"
                                            name="nazivDokumenta"
                                            required
                                        />
                                    </label>
                                </div>
                                <div className="col-md-4 details">
                                    <label>
                                        Record number
                                        <input
                                            value={djelovodniBroj}
                                            onChange={e => updateFormData(e)}
                                            placeholder={modalData.selectedDocument.djelovodniBroj}
                                            type="text"
                                            name="djelovodniBroj"
                                            required
                                        />
                                    </label>
                                </div>
                                <div className="col-md-4">
                                    <label>
                                    Document description
                                        <input
                                            value={opisDokumenta}
                                            onChange={e => updateFormData(e)}
                                            placeholder={modalData.selectedDocument.opisDokumenta}
                                            type="text"
                                            name="opisDokumenta"
                                            required
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <label>
                                    Subject
                                        <input
                                            value={subjekt}
                                            onChange={e => updateFormData(e)}
                                            placeholder={modalData.selectedDocument.subjekt}
                                            type="text"
                                            name="subjekt"
                                            required
                                        />
                                    </label>
                                </div>
                                <div className="col-md-4">
                                    <label>
                                    Document description
                                        <input
                                            value={oznakaDokumenta}
                                            onChange={e => updateFormData(e)}
                                            placeholder={modalData.selectedDocument.oznakaDokumenta}
                                            type="text"
                                            name="oznakaDokumenta"
                                            required
                                        />
                                    </label>
                                </div>
                                <div className="col-md-4">
                                    <label>
                                    Type of receipt
                                        <input
                                            value={nacinPrijema}
                                            onChange={e => updateFormData(e)}
                                            placeholder={modalData.selectedDocument.nacinPrijema}
                                            type="text"
                                            name="nacinPrijema"
                                            required
                                        />
                                    </label>
                                </div>
                             </div>
                            <div className="row">
                                <div className="col-md-4">
                                     <label>
                                        Place of document issuing
                                        <select onChange={e => updateFormData(e)} name="mjestoIzdavanjaDokumenta"
                                        defaultValue="Odaberite">
                                                <option value="Odaberite" disabled>Select town</option>
                                                <option value="Podgorica">Podogrica</option>
                                                <option value="Budva">Budva</option>
                                                <option value="Kotor">Kotor</option>
                                        </select>
                                     </label>
                                </div>
                                <div className="col-md-4">
                                    <label>
                                        Number of record by sender
                                        <input
                                        value={brojDokumentaKodPosiljaoca}
                                        onChange={e => updateFormData(e)}
                                        placeholder={modalData.selectedDocument.brojDokumentaKodPosiljaoca}
                                        type="text"
                                        name="brojDokumentaKodPosiljaoca"
                                        required
                                        />
                                    </label>
                                </div>
                                <div className="col-md-4">
                                    <label>
                                    Document date by receiver
                                     <DatePicker selected={startDate} onChange={date => {setStartDate(date); console.log(startDate)}} />
                                        </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 addedControl">
                                    {inputFields.map((inputField, index) => (
                                        <label>
                                            Enter value for input field
                                            <input
                                                key={index}
                                                type="text"
                                                name="enteredInput"
                                                value={inputField.enteredInput}
                                                onChange={event => handleInputChange(index, event)}
                                                required
                                        />
                                       </label>
                                    ))}

                                    {textareas.map((textarea, index) => (
                                        <label>
                                             Enter value for textarea field
                                            <input
                                                key={index}
                                                type="text"
                                                name="enteredText"
                                                value={textarea.enteredText}
                                                onChange={event => handleTextareaChange(index, event)}
                                                required
                                            />
                                        </label>
                                    ))
                                    }

                                    {checkboxes.map((checkbox, index) => (
                                        <label>
                                            <input
                                                key={index}
                                                type="checkbox"
                                                name="isChecked"
                                                className="check"
                                                onChange={() => handleCheckboxChange(index)}
                                            />Pls. check the box!
                                        </label>
                                    ))

                                    }

                                </div>
                                <div className="col-md-8 save-changes-wrapper">
                                    <button className="save-changes" type="input">SAVE CHANGES</button>
                                    <button className="save-changes" type="input" aria-label="Close" onClick={hide}> CLOSE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </form>
        )
   }

export default ModalContent;