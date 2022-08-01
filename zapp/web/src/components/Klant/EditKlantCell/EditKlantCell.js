import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import KlantForm from 'src/components/Klant/KlantForm'

export const QUERY = gql`
  query EditKlantById($id: Int!) {
    klant: klant(id: $id) {
      id
      naam
      adres
      postcode
      woonplaats
    }
  }
`
const UPDATE_KLANT_MUTATION = gql`
  mutation UpdateKlantMutation($id: Int!, $input: UpdateKlantInput!) {
    updateKlant(id: $id, input: $input) {
      id
      naam
      adres
      postcode
      woonplaats
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ klant }) => {
  const [updateKlant, { loading, error }] = useMutation(UPDATE_KLANT_MUTATION, {
    onCompleted: () => {
      toast.success('Klant updated')
      navigate(routes.klanten())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateKlant({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Klant {klant.id}
        </h2>
      </header>

      <div className="rw-segment-main">
        <KlantForm
          klant={klant}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
