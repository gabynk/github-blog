import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { MagnifyingGlass } from 'phosphor-react'
import * as z from 'zod'

import { UserContext } from '../../../../contexts/UserContext'

import { SearchFormContainer } from './styles'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { fetchIssues } = useContext(UserContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPost(data: SearchFormInputs) {
    await fetchIssues(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchPost)}>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
