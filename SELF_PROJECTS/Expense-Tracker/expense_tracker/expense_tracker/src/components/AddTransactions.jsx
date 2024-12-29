import React from 'react'

const addTransactions = () => {
  return (
    <div>
      <h3>Add new transaction</h3>
      <form>
        <div className=''>
            <label htmlFor='text' >Text</label>
            <input type='text'  placeholder='Enter text...' />
        </div>
        <div>
            <label htmlFor='amount'>Amount <br/> (negative - expense, positive - income)</label>
            <input type='number' placeholder='Enter amount...' />
        </div>
        <button>Add Transaction</button>
      </form>
    </div>
  )
}

export default addTransactions
