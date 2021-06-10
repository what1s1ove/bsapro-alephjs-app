import React, { ComponentType } from 'react'

const App = ({
  Page,
  pageProps,
}: {
  Page: ComponentType<unknown>
  pageProps: any
}) => (
  <main>
    <head>
      <meta name="viewport" content="width=device-width" />
    </head>
    <Page {...pageProps} />
  </main>
)

export default App
