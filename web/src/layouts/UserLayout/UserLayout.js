import { Link, routes } from '@redwoodjs/router'

const UserLayout = ({ children }) => {
  return (
    <>
      <header className="home-header">
        <div>Logo goes here</div>
        <h1>
          <Link to={routes.home()}>TrainerTracker</Link>
        </h1>
      </header>
      <ul>
        <li>
          <Link to={routes.home()}>Home Page</Link>
        </li>
        <li>
          <Link to={routes.trainer()}>Trainer Page</Link>
        </li>
        <li>
          <Link to={routes.trainee()}>Trainee Page</Link>
        </li>
      </ul>
      <main>{children}</main>
      <footer>
        <div>Footer info goes here</div>
      </footer>
    </>
  )
}

export default UserLayout