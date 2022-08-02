import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_KLANT_MUTATION = gql`
  mutation DeleteKlantMutation($id: Int!) {
    deleteKlant(id: $id) {
      id
    }
  }
`
const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const formatEnum = (values) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values)
    }
  }
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Klant = ({ klant, taken }) => {
    console.log(taken)
    const [deleteKlant] = useMutation(DELETE_KLANT_MUTATION, {
      onCompleted: () => {
        toast.success('Klant deleted')
        navigate(routes.klants())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    })
    
    const onDeleteClick = (id) => {
      if (confirm('Are you sure you want to delete klant ' + id + '?')) {
        deleteKlant({ variables: { id } })
      }
    }
    
    // var selectBox = document.getElementById('select_Taak');
    // for(let i = 0; i < klant.taken.length; i++) {
      //   var option = klant.taken[i];
      //   console.log(selectBox)
      //   selectBox.options.add( new Option(option.naam, option.id))
  // }
  
  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Klant {klant.id} Detail
          </h2>
        </header>

        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>

              <td>{klant.id}</td>
            </tr>
            <tr>
              <th>Naam</th>

              <td>{klant.naam}</td>
            </tr>
            <tr>
              <th>Adres</th>

              <td>{klant.adres}</td>
            </tr>
            <tr>
              <th>Postcode</th>

              <td>{klant.postcode}</td>
            </tr>
            <tr>
              <th>Woonplaats</th>

              <td>{klant.woonplaats}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <nav className="rw-button-group">
        <Link
          to={routes.editKlant({ id: klant.id })}
          className="rw-button rw-button-blue"
          >
          Edit
        </Link>

        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(klant.id)}
        >
          Delete
        </button>
      </nav>
      <br/>
      <br/>
      <br/>

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
              <select>
                {taken.map((num) => (
                  <option key={num.id}>{num.taak}</option>
                ))}
              </select>
              </td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Klant
