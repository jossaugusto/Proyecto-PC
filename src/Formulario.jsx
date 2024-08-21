import "./Formulario.css";

const datosForm = [
  { label: "Nombre", type: "text", name: "nombre", place: "Ingrese nombre(s)" },
  {
    label: "Apellido",
    type: "text",
    name: "apellido",
    place: "Ingrese apellidos",
  },
  { label: "Correo", type: "email", name: "email", place: "Ingrese correo" },
  {
    label: "Teléfono",
    type: "tel",
    name: "telefono",
    place: "Ingrese número",
  },
];

const formulario = datosForm.map((elemento, index) => (
  <form className="formularios" key={index}>
    <div>
      <label>
        {elemento.label}
        <input
          required
          type={elemento.type}
          name={elemento.name}
          placeholder={elemento.place}
        ></input>
      </label>
    </div>
  </form>
));

function Formulario() {
  return (
    <section className="form-container" id="formulario">
      <h2 className="consuta">Consulta</h2>
      {formulario}
      <textarea
        className="textArea"
        placeholder="Escriba su consulta..."
      ></textarea>
      <button type="submit">Enviar</button>
    </section>
  );
}

export default Formulario;
