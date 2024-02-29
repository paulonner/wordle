export const createMatrix = (columns: number, rows: number) => {
  return Array(5).fill(columns).map(() => {
    return Array(rows).fill('').map(() => ({
      letter: '',
      color: ''
    }))
  })
}