

// Esta función es importante y sirve como ejemplo de uso para devolver una propiedad
// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }) {
  const id = params.id;
  return { id };
}

const Detalles = () => {
  return (
    <div>Detalles</div>
  )
}

export default Detalles
