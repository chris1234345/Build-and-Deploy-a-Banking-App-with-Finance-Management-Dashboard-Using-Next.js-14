import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBlance from '@/components/TotalBlance'
import React from 'react'

const Home = () => {
  const loggedIn = {firstName: 'Chris', lastName: 'TF', email: 'cristitf123@gmail.com'}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || 'Guest'}
          subtext ="Access and manage your account and  transactions efficiently"
          />
          <TotalBlance 
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.35}
          />
        </header>

        RECENT TRANSACTIONS
      </div>
      <RightSidebar 
      user={loggedIn}
      transaction={[]}
      banks={[{currentBalance: 123.50}, {currentBalance: 500}]}
      />
    </section>
  )
}

export default Home