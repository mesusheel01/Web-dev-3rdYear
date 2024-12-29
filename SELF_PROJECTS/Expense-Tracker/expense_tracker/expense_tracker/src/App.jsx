import Header from './components/Header'
import Balance from './components/Balance'
import {addTransactions} from './components/AddTransactions'

function App() {

  return (
    <div className='bg-beige_white min-h-screen '>
      <Header />
      <Balance />
      <addTransactions />
    </div>
  )
}

export default App
