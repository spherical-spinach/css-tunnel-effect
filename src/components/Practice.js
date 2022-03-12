import Courses from './Courses'

const Practice = () => {
  return (
    <div>
      <h2>Omat treenit</h2>
      <p>
        Et ole kirjautuneena sisään. Jos haluat treenin jäävän muistiin,
        kirjaudu sisään. Jos sinulla ei vielä ole tiliä, rekisteröidy
        käyttäjäksi täällä.{' '}
      </p>
      <Courses></Courses>
    </div>
  )
}

export default Practice
