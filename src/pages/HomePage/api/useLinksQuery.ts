import { useQuery } from 'react-query'
import { useHomePageStore } from '../model/store'

export const useLinksQuery = () => {
  const offset = useHomePageStore.use.offset()
  const target = useHomePageStore.use.target()
  const counter = useHomePageStore.use.counter()
  const short = useHomePageStore.use.short()
  const fetchLinks = useHomePageStore.use.fetchLinks()

  return useQuery(['links', { offset, target, short, counter }], {
    queryFn: () => fetchLinks()
  })
}
