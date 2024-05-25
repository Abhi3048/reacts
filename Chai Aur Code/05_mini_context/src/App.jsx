import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"

function App() {

  return (
    <UserContextProvider >
      <div className="w-full h-screen bg-black text-white">
        <h1 className="text-center text-red-300 text-4xl">React with Chai</h1>
        <Login/>
        <Profile/>
      </div>
    </UserContextProvider>
  )
}

export default App
