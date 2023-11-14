const CrudTableRow = ({name,constelation}) => {
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{constelation}</td>
        <td>
          <button>Editar</button>
          <button>Eliminar</button>
        </td>
      </tr>
    </>
  );
};

export default CrudTableRow;
