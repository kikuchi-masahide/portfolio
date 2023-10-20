import Link from "./link";

export type PartPropsType = {
    title: string;
    href?: string;
    children?: React.ReactNode;
};

export default function Part(props: PartPropsType) {
    return (
        <>
            <h2 className="text-3xl font-bold mt-6 mb-4" id={props.title}>
                {props.title}
            </h2>
            {props.href ? <Link href={props.href}>リポジトリ</Link> : <></>}
            {props.children}
        </>
    );
}
