import { Square } from './Square.jsx'


export function WinnerModal ({ winner, resetGame }) {
  if (winner === null) return null

  const winnerText = winner === false ? 'Empate 😅' : `Ganó ${winner}!`

  return (
    <section className='winner'>
      <div className='text'>
        <p className='emoji-party'>🎉🎊🥳 {winnerText} 🥳🎊🎉</p>

        <button onClick={resetGame}>Empezar de nuevo</button>
      </div>
    </section>
  )
}
