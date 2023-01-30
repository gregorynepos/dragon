// Importer les éléments dont on a besoin pour utiliser les state nécessaires ici
// ainsi que les hooks

const Form = () => {
  // dans une constante on récupère dragon (pour le nom) dans notre state
  // on oublie pas le dispatch

  const handleSubmit = () => {
    // à la soumission du form on ajoute le dragon appel du dispatch
  };

  const handleChange = () => {
    // récup de la valeur de l'input appel du dispatch
  };

  return (
    <form>
      <label>Nom:</label>
      <input type="text" />
      <button>Ajouter</button>
    </form>
  );
};

export default Form;
