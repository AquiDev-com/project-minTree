import React, { useState, useRef } from "react";
import Input from "../Input";
import styles from "./styles.module.scss";
import { IoAddCircleSharp } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
import SelectInput from "../SelectInput";

const generateRandomId = () => {
  return Math.random().toString(36).substr(2, 9);
};

const FormProject = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const socialOptions = [
    "Facebook",
    "Twitter",
    "Instagram",
    "LinkedIn",
    "WhatsApp",
    "Telegram",
  ];
  const fileInputRef = useRef(null);

  const handleOptionSelect = (option) => {
    const id = generateRandomId();
    setSelectedOptions([...selectedOptions, { id, option }]);
    setSelectedOption("");
  };

  const handleRemoveOption = (id) => {
    const updatedOptions = selectedOptions.filter((option) => option.id !== id);
    setSelectedOptions(updatedOptions);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.photoInputContainer}>
        <div className={styles.iconWrapper} onClick={handleIconClick}>
          {selectedImage ? (
            <div className={styles.circularImageContainer}>
              <img
                src={selectedImage}
                alt="Imagem"
                className={styles.circularImage}
              />
            </div>
          ) : (
            <IoAddCircleSharp className={styles.roundIcon} />
          )}
        </div>
        <input
          type="file"
          id="photo"
          accept="image/*"
          onChange={handleImageChange}
          ref={fileInputRef}
          style={{ display: "none" }}
        />
      </div>
      <div className={styles.nameInputContainer}>
        <Input
          label="Nome"
          placeholder="Nome do projeto"
          type="text"
          id="name"
          required
        />
      </div>
      <div className={styles.bioInputContainer}>
        <Input
          label="Bio"
          placeholder="Descrição do projeto"
          type="text"
          id="bio"
          required
        />
      </div>
      <div className={styles.optionsContainer}>
        <p>Selecione as opções desejadas:</p>
        <select
          value={selectedOption}
          onChange={(e) => handleOptionSelect(e.target.value)}
        >
          <option value="">Adicione mais opções</option>
          {socialOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        {selectedOptions.map((option, index) => (
          <div className={styles.selectedOptionContainer} key={option.id}>
            <SelectInput
              button={
                <button
                  type="button"
                  onClick={() => handleRemoveOption(option.id)}
                  className={styles.removeButton}
                >
                  <MdOutlineDelete />
                </button>
              }
              label={option.option}
              placeholder={`Adicione o link do seu ${option.option}`}
              type="text"
              required
            />
          </div>
        ))}
      </div>
    </form>
  );
};

export default FormProject;
