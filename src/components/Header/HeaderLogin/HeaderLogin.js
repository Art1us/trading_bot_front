import "./HeaderLogin.css"

function HeaderLogin({ setIsLoggedIn }) {
  return (
    <div className="headerLogin__wrapper">
      <button
        className="headerLogin__btnLog"
        onClick={() => setIsLoggedIn(true)}
      >
        Log In
      </button>
      <button className="headerLogin__btnSign">Sign up</button>
    </div>
  )
}

export default HeaderLogin
