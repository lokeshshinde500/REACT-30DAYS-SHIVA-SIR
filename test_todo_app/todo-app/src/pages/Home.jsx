import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"

export default function Home() {

  const [task, setTask] = useState("")
  const [taskList, setTaskList] = useState([])
  const [edit, setEdit] = useState(null)


  // post
  function handleSubmit(e) {
    e.preventDefault()
    axios.post("http://localhost:3000/tasks", {
      task
    }).then((res) => {
      console.log(res.data)
      fetchData()
      alert("task added.")
    })
    setTask("")
  }

  // get
  function fetchData() {
    axios.get("http://localhost:3000/tasks")
      .then((res) => {
        setTaskList(res.data)
        console.log(res.data)
      })
  }

  // delete
  function handleDelete(id) {
    axios.delete(`http://localhost:3000/tasks/${id}`)
      .then((res) => fetchData())
    alert("data deleted successfully.")
  }

  // edit
  function handleEdit(id) {
    const editRecord = taskList.find((v, i) => id == v.id)
    setEdit(editRecord)
  }

  // update
  function handleUpdate(id) {
    axios.patch(`http://localhost:3000/tasks/${id}`, {
      task: edit.task
    })
      .then((res) => fetchData())
    setEdit(null)
    alert("data updated successfully.")
  }

  useEffect(() => {
    fetchData()
  }, [])




  return (
    <>
      {/* section to do */}

      <section className="section-todo-form h-screen bg-green-200 grid place-items-center ">
        <div className="form-item">
          <h2 className="text-2xl font-semibold text-green-700 mb-2 text-center">ADD TASK</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                id="task"
                name="task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="mt-1 py-1 px-2 border border-green-300 rounded-md w-full focus:outline-none focus:ring-green-500 focus:border-green-500"
                required
                placeholder="Enter Task"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center px-4 py-1 bg-green-600 border border-transparent rounded-md font-semibold text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="section-todo-form  bg-green-300 py-20">
        <div className="container px-2 mx-auto flex justify-center">
          <table className=" divide-y divide-green-300">
            <thead>
              <tr>
                <th width={"500px"} className="text-center px-3 py-3 bg-green-200 text-xs font-medium text-green-700 uppercase tracking-wider">
                  Task
                </th>
                <th className="text-center bg-green-200 text-xs font-medium text-green-700 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-green-300">
              {
                taskList.map((v, i) => {
                  return (
                    <>
                      <tr>
                        <td width={"500px"} className="px-3 py-3 whitespace-no-wrap ">

                          {
                            edit && edit.id == v.id ? (
                              <input
                                className="px-2 py-1 border border-green-300  focus:outline-none focus:ring-green-500 focus:border-green-500"
                                type="text" value={edit.task}
                                onChange={(e) => setEdit({ ...edit, task: e.target.value })} />
                            ) : (
                              <div className="text-sm leading-5 text-green-700"><span className="font-bold">{i + 1}</span>. {v.task}</div>
                            )
                          }


                        </td>
                        <td className="whitespace-no-wrap text-center">

                          <button onClick={() => handleDelete(v.id)} className="inline-flex items-center justify-center px-1 bg-red-600 border border-transparent rounded-md text-sm text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mx-1">DELETE</button>

                          {
                            edit && edit.id == v.id ? (
                              <button onClick={() => handleUpdate(v.id)} className="inline-flex items-center justify-center px-1 bg-green-600 border border-transparent rounded-md text-sm text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mx-1">UPDATE</button>
                            ) : (
                              <button onClick={() => handleEdit(v.id)} className="inline-flex items-center justify-center px-1 bg-green-600 border border-transparent rounded-md text-sm text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mx-1">EDIT</button>
                            )
                          }


                        </td>
                      </tr>
                    </>
                  )
                })

              }
            </tbody>
          </table>
        </div>
      </section>

    </>
  )
};
