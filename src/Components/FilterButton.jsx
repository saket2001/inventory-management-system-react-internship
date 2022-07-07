import { useRef } from "react"


export const FilterButton = ({ filterActions }) => {
  const ref = useRef();
  return (
      <select
        name="item_camera"
        id="item_camera"
        ref={ref}
        className="px-2 py-1 outline-none rounded-md bg-transparent focus:bg-gray-100 text-gray-700 text-lg"
        onClick={() => filterActions(ref?.current?.value)}
    >
        <option value="">Filter</option>
        <option value="item_price">
        Filter by price
        </option>
        <option value="item_quantity">Filter by quantity</option>
      </select>
  )
}
