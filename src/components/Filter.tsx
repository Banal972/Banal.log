const Filter = ({
  name,
  active,
  onClick,
}: {
  name: string
  active?: boolean
  onClick: () => void
}) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-full border px-2 py-1 text-sm ${active ? "border-blue-500 text-blue-500" : ""}`}
    >
      {name}
    </div>
  )
}
export default Filter
