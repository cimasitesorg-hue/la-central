// Catalogo de la verduleria. Editable: agrega / quita productos libremente.
// Se agrupan por categoria solo para ordenar el <select> nativo con <optgroup>.

export const PRODUCT_GROUPS = [
  {
    label: "Verduras",
    items: [
      "Tomate",
      "Lechuga",
      "Cebolla",
      "Papa",
      "Zanahoria",
      "Morrón",
      "Berenjena",
      "Zapallo",
      "Zapallito",
      "Pepino",
      "Brócoli",
      "Choclo",
      "Espinaca",
      "Rúcula",
      "Acelga",
      "Apio",
      "Remolacha",
      "Ajo",
    ],
  },
  {
    label: "Frutas",
    items: [
      "Banana",
      "Manzana",
      "Naranja",
      "Mandarina",
      "Limón",
      "Pera",
      "Uva",
      "Frutilla",
      "Kiwi",
      "Palta",
      "Ananá",
      "Durazno",
    ],
  },
  {
    label: "Otros",
    items: ["Huevos (docena)", "Jengibre", "Aceitunas", "Frutos secos"],
  },
];

// Lista plana (validacion: un producto solo es valido si esta en el catalogo)
export const PRODUCTS = PRODUCT_GROUPS.flatMap((g) => g.items);

// Opcion especial "Otro": el cliente escribe un producto libre (texto sanitizado).
export const OTHER_VALUE = "__otro__";
