export type SectionPropsType = {
    title: string;
    children?: React.ReactNode;
};

export default function Section(props: SectionPropsType) {
    return (
        <>
            <h2 className="text-xl underline decoration-gray-400 underline-offset-4 font-bold mt-6 mb-3 before:content-['>'] before:text-sm before:ml-1 before:text-gray-400">
                {props.title}
            </h2>
            <div className="ml-4 mb-3 leading-relaxed space-y-2">
                {props.children}
            </div>
        </>
    );
}
