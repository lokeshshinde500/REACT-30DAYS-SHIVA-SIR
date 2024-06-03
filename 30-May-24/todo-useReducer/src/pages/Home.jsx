import { useEffect, useReducer, useState } from "react";
import axios from "axios";

export default function Home() {
  // to do using useReducer

  const [task, setTask] = useState("");

  const initialState = { tasklist: [] };

  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "PostTask":
        return { ...state, tasklist: [...state.tasklist, action.payload] };
        break;
      case "GetTask":
        return { ...state, tasklist: action.payload };
        break;
      case "DeleteTask":
        return {
          ...state,
          tasklist: state.tasklist.filter((v, i) => v.id !== action.payload),
        };
        break;
      default:
        return state;
        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:8000/task", {
        task,
      })
      .then((res) => {
        dispatch({ type: "PostTask", payload: res.data });
        setTask("");
      });
  }

  function handleDelete(id) {
    console.log(id);
    axios.delete(`http://localhost:8000/task/${id}`).then((res) => {
      console.log(res.data);
      dispatch({ type: "DeleteTask", payload: id });
    });
  }

  // to show on UI
  useEffect(() => {
    // GET
    try {
      axios.get("http://localhost:8000/task").then((res) => {
        dispatch({ type: "GetTask", payload: res.data });
      });
    } catch (error) {
      alert("Something gone wrong !");
    }
  }, []);

  console.log(state.tasklist);

  return (
    <>
      <section>
        <div className="form-item">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                value={task}
                onChange={(e) => setTask(e.target.value)}
                type="text"
                placeholder="task"
              />
              <button type="submit">Add</button>
            </div>
          </form>
        </div>
      </section>

      <table border={1} cellPadding={3} cellSpacing={0}>
        <thead>
          <tr>
            <th>Sr.no</th>
            <th>TASK</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {state.tasklist.map((v, i) => {
            return (
              <>
                <tr>
                  <td>{i + 1}</td>
                  <td>{v.task}</td>
                  <td>
                    <button onClick={() => handleDelete(v.id)} type="button">
                      Delete
                    </button>
                    <button type="button">Update</button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
