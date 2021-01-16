export type DataType = BoardType[]

export type BoardType = {
  id: string
  title: string
  tasks: TaskType[]
}

export type TaskType = {
  id: string
  text: string
}
