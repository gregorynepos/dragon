import { ADD_DRAGON } from "../constants/actions";

// initialisation des states : SOURCE DE VERITE
let stateInit = {
  dragons: ["Apalala", "Balaur", "Bolla"],
  count: 3,
  dragon: "",
  message: ""
};

let reducerDragon = (state = stateInit, action = {}) => {
  switch (action.type) {
    case ADD_DRAGON:
      // Message d'erreur si on essaie de rentrer du vide dans le tableau
      if (state.dragons === null)
        return { ...state, message: "vous n'avez pas rentré de nom", elems };

    // Message d'erreur si on essaie de rentrer un nom de dragon qui existe déjà

    // Une fois les erreurs traitées, on insère le nouveau nom dans le tableau
    // Messaage qui indique que l'ajout a bien été fait
    // mise à jour du compteur de dragons

    // case pour récupérer la valeur du nom du dragon

    default:
      return state;
  }

  return state;
};

export default reducer;
