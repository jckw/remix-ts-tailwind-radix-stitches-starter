import globalStyles from '~/styles/globalStyles'
import { hydrate } from 'react-dom'
import { RemixBrowser, RemixBrowserProps } from 'remix'

const EntryClient: React.FC<RemixBrowserProps> = (props) => {
  globalStyles()
  return <RemixBrowser {...props} />
}

hydrate(<EntryClient />, document)
