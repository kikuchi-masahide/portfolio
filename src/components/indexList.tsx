export type IndexListPropsType = {
    items: string[];
};

export default function IndexList(props: IndexListPropsType) {
    return (
        <ul>
            {props.items.map((item) => (
                <li>
                    <a
                        href={`href=#${item}`}
                        className="text-blue-500 underline hover:text-blue-600 font-bold my-2 before:content-['→'] before:mx-1 before:text-gray-400;"
                    >
                        {item}
                    </a>
                </li>
            ))}
        </ul>
    );
}
