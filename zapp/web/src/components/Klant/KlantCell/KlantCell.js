import Klant from 'src/components/Klant/Klant'

export const QUERY = gql`
  query FindKlantById($id: Int!) {
    klant: klant(id: $id) {
      id
      naam
      adres
      postcode
      woonplaats
      taken{id, taak, extra}
    }
    taken: taaks {
      id
      taak
      extra
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Klant not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ klant, taken }) => {
  return <Klant klant={klant} taken={taken} />
}
