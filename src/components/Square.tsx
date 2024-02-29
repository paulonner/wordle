type square = {
  letter: string | JSX.Element,
  color?: string,
  className?: string,
  onClick?: () => void
}

const Square = ({ letter, color, className, ...props }: square) => {
  return (
    <div className={`${color} flex items-center justify-center rounded-md ${className}`} {...props}>
      {letter}
    </div>
  )
}

export default Square