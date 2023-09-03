// Array con elementos de tipos mixtos
const strangeArray = [
    "Zero",
    function () {
      alert("Hola soy una función en un array");
    },
    22,
    null,
    "Go lang",
    undefined,
    "Cobol",
    "I'm programmer",
    -2000,
    "Hello world",
    `One is ${1}`,
    { name: "Info", lastname: "last info" },
    () => true,
    function showNumbers() {
      return "1, 2, 3, 4";
    },
    "Another String",
    ["Hola mundo!"],
    "b is a letter",
    "JavaScript",
  ];
  
  // Filtrar solo los elementos de tipo String
  const stringsFiltrados = strangeArray.filter((elemento) => typeof elemento === "string");
  
  // Ordenar los elementos alfabéticamente
  stringsFiltrados.sort();
  
  // Obtener el elemento de la lista en el HTML
  const stringList = document.getElementById("string-list");
  
  // Iterar a través de los elementos filtrados y agregarlos a la lista en el HTML
  stringsFiltrados.forEach((elemento) => {
    const listItem = document.createElement("li");
    listItem.textContent = elemento;
    stringList.appendChild(listItem);
  });
  
