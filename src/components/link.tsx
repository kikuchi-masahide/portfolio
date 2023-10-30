export type LinkPropsType = {
    href: string;
    children: React.ReactNode;
};

export default function Link(props: LinkPropsType) {
    return (
        <a
            href={props.href}
            className="text-blue-500 underline hover:text-blue-600"
            target="_blank"
        >
            {props.children}
        </a>
    );
}
