import axios from "axios"

const BASE_URL = "https://boiling-escarpment-95429.herokuapp.com/api/tasks/"

class taskService {
  async getAll () {
    let tasks
    await axios.get(BASE_URL).then(response => {
      tasks = response.data
    })
    return tasks   
  }

  async create(task) {
    await axios.post(BASE_URL, task)
  }

  async delete(id) {
    let deletedTask
    await axios.delete(BASE_URL+id).then(response => {
      deletedTask = response.data
    })
    return deletedTask
  }

  async edit(task) {
    await axios.put(BASE_URL+task.id, task)
  }
}

export default new taskService()
