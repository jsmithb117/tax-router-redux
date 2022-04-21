import React from 'react'
import { Provider } from 'react-redux'
import RootComponent from './RootComponent'
import { store } from './store/store'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <h1 style={{ fontSize: '4em' }}>{"Jay's Tax Estimator"}</h1>
      </div>
      <RootComponent />
    </Provider>
  )
}

export default App
