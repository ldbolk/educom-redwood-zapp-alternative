

return (
    <>
      <div>Vaste taken:</div>
      <br/>

      <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>#</th>

            <th>Taak</th>

            <th>Extra</th>

            <th>&nbsp;</th>
          </tr>
        </thead>

        <tbody>
          {klant.taken.map((taak) => (
            <tr key={taak.id}>
              <td>{truncate(taak.id)}</td>

              <td>{truncate(taak.taak)}</td>

              <td>{truncate(taak.extra)}</td>

              <td>
                <nav className="rw-table-actions">
                  
                  <button
                    type="button"
                    title={'Delete taak ' + taak.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(taak.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
          <tr>
            <td>nummer</td>
            <td>
              <select id="select_Taak">
              </select>
              </td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  )