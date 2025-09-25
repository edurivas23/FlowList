

type CounterProps = {
  taskCounter: number
}
export const Counter = ({ taskCounter }: CounterProps) => {



  return (
    <span className="text-xl">{taskCounter}</span>
  )
}
