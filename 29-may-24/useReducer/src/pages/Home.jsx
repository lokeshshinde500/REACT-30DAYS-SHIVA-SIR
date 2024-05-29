import { useReducer } from "react"

export default function Home() {

  // userReducer hook -> work like redux -> to use for states management but for complex application.

  const initialState = { count: 0 }
  const [state, dispatch] = useReducer(reducer, initialState)

  function reducer(state, action) {
    switch (action) {
      case "Increase": return {
        count: state.count + 1
      }
        break
      case "Decrease": return {
        count: state.count - 1
      }
        break
      default: return
        break
    }
  }


  return (
    <>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch("Increase")}>Increase</button>
      <button onClick={() => dispatch("Decrease")}>Decrease</button>
    </>
  )
}