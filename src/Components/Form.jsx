import { useState } from "react";
import Card from "./Card";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    favPokemon: "",
  });

  const [error, setError] = useState(false);
  const [showCard, setShowCard] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (
      !formData.firstName.trim().length >= 3 ||
      formData.lastName.length < 6
    ) {
      setError(true);
      return;
    }

    setError(false);
    setShowCard(true);
  }

  function handleReset() {
    setFormData({
      firstName: "",
      lastName: "",
      favPokemon: "",
    });
    setShowCard(false);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre: </label>
        <input
          type="text"
          name="firstName"
          placeholder="Ingresa tu nombre"
          onChange={handleChange}
          value={formData.firstName}
        />
        <label htmlFor="lastName">Apellido: </label>
        <input
          type="text"
          name="lastName"
          placeholder="Ingresa tu apellido"
          onChange={handleChange}
          value={formData.lastName}
        />
        <label htmlFor="favPokemon">Pokemon Favorito: </label>
        <input
          type="text"
          name="favPokemon"
          placeholder="Ingresa tu Pokemon favorito"
          onChange={handleChange}
          value={formData.favPokemon}
        />
        <div>
          <button
            type="submit"
            style={{
              padding: "10px",
              margin: "15px",
            }}
          >
            Enviar
          </button>
        </div>
        <div>
          <button
            type="reset"
            onClick={handleReset}
            style={{
              padding: "10px",
            }}
          >
            Resetear
          </button>
        </div>

        {error && (
          <p style={{ color: "red" }}>
            Por favor chequea que la información sea correcta
          </p>
        )}
      </form>
      {showCard && (
        <Card
          firstName={formData.firstName.trim()}
          lastName={formData.lastName}
          favPokemon={formData.favPokemon}
        />
      )}
    </div>
  );
}
