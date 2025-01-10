/* eslint-disable react/prop-types */
const EntityTableItem = ({ props }) => {
    return (
        <tr>
            {
                Object.keys(props).filter(pr => pr != "content").map((prop) => (
                    <td key={prop.id} className="px-2 first:pl-5 last:pr-5 py-2 whitespace-nowrap">
                        <div className="flex items-center">
                            {' '}
                            <div className="font-medium text-gray-800">{props[prop]}</div>
                        </div>
                    </td>))
            }
        </tr>
    )
}

export default EntityTableItem