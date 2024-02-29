const Card = ({ firstName, lastName, favPokemon }) => {
  return (
    <div
      style={{ border: "1px solid black", padding: "1rem", marginTop: "1rem" }}
    >
      <h3>
        Hola {firstName} {lastName}
      </h3>
      <p>Tu Pokemon favorito es: {favPokemon}</p>
    </div>
  );
};

export default Card;
