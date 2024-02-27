import { ref } from 'vue'
export function useTable() {
  type ROWS = {
    name: string
    age: number
    createdAt: Date
    score: number
  }

  let rowList: ROWS[] = []
  function loadRows() {
    alert(rowList)
    rowList = [
      {
        name: 'Alex11',
        age: 3511,
        createdAt: new Date(2023, 3, 1),
        score: 33,
      },
      {
        name: 'sdfjsebfkjbkjszfb',
        age: 23,
        createdAt: new Date(2023, 3, 1),
        score: 32,
      },
    ]
  }

  return { loadRows, rowList }
}

// export default useTable
