import React, { useState, useRef } from "react";
import Input from "../Input";
import styles from "./styles.module.scss";
import { IoAddCircleSharp } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
import SelectInput from "../SelectInput";
import InputColor from "../InputColor";
import Button from "../../Button";
import { z } from "zod";
import { api } from "../../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

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
    "Twitch",
    "Youtube",
  ];
  const fileInputRef = useRef(null);
  const schema = z.object({
    name: z.string().nonempty("Name is required"),
    bio: z.string().nonempty("Bio is required"),
    favColor: z.string().nonempty("Favorite color is required"),
  });
  const [projectData, setprojectData] = useState({
    name: "",
    bio: "",
    favColor: "#4180AB",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setprojectData({
      ...projectData,
      [e.target.id]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.id]: undefined,
    });
  };

  const handleOptionSelect = (option) => {
    const id = generateRandomId();
    setSelectedOptions([...selectedOptions, { id, option, value: "" }]);
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

  const handleSocialInput = (value, optionId) => {
    const updatedOptions = selectedOptions.map((option) => {
      if (option.id === optionId) {
        return { ...option, value };
      }
      return option;
    });

    setSelectedOptions(updatedOptions);
  };

  const getButtons = () => {
    const buttons = selectedOptions.map((option) => {
      return {
        title: option.option,
        icon: "none",
        url: option.value,
      };
    });

    return JSON.stringify(buttons);
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const validatedData = schema.parse(projectData);

      const formData = new FormData();
      formData.append("title", validatedData.name);
      formData.append("bio", validatedData.bio);
      formData.append("primary_color", validatedData.favColor);
      formData.append("buttons", getButtons());

      if (fileInputRef.current.files.length > 0) {
        formData.append("image", fileInputRef.current.files[0]);
      }
      console.log("Form Values:", projectData);

      const token = localStorage.getItem("@TOKEN");

      const response = await api.post("/project", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Projeto criado com sucesso, redirecionando...");
      navigate("/home");
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(error.formErrors.fieldErrors);
      } else {
        console.error(error);
      }
    }
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
          placeholder="Nome do Projeto"
          type="text"
          id="name"
          required
          value={projectData.name}
          onChange={handleInputChange}
          error={errors.name}
        />
      </div>
      <div className={styles.bioInputContainer}>
        <Input
          label="Bio"
          placeholder="Descrição"
          type="description"
          id="bio"
          value={projectData.bio}
          onChange={handleInputChange}
          error={errors.bio}
        />
      </div>
      <div className={styles.favColorContainer}>
        <InputColor
          label="Escolha sua cor favorita:"
          type="color"
          id="favColor"
          defaultValue="#4180AB"
          required
          value={projectData.favColor}
          onChange={handleInputChange}
          error={errors.favColor}
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
              onChange={(e) => handleSocialInput(e.target.value, option.id)}
            />
          </div>
        ))}
      </div>
      <Button type="submit" text="Confirmar" styleType="primary" />
    </form>
  );
};

export default FormProject;
