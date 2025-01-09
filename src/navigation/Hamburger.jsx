const Hamburger = ({ toggled, handleClick }) => (
  <div
    aria-label="Menu icon"
    className={
      toggled ? 'hamburger-menu-button checked' : 'hamburger-menu-button'
    }
    onClick={handleClick}
    onKeyDown={handleClick}
    role="button"
    tabIndex={0}
  >
    <div className="bar">
      <span className="top" />
      <span className="middle" />
      <span className="bottom" />
    </div>
  </div>
)

export default Hamburger
