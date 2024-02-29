type Props = {
  text: string,
  onClick: () => void
}

const Button: React.FC<Props> = ({ text, ...props }) => {
  return (
    <button
      type="button"
      className="w-[263px] rounded-md bg-green-600 text-[28px] font-semibold
      text-white shadow-sm hover:bg-green-500"
      {...props}
    >
      {text}
    </button>
  )
}

export default Button