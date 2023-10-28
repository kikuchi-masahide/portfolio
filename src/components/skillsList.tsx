export type SkillsListPropsType = {
    items: string[];
};

export default function SkillsList(props: SkillsListPropsType) {
    return (
        <>
            <ul className="m-4">
                {props.items.map((item) => (
                    <li key={item} className="border border-gray-400 rounded-md inline p-2 mx-1 text-gray-800">
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}
