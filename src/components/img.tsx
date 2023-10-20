export type ImgPropsType = {
    src: string;
    alt?: string;
};

export default function Img(props: ImgPropsType) {
    return (
        <>
            <img src={props.src} alt={props.alt} className="w-2/3" />
            {props.alt ? (
                <p className="text-sm text-gray-400">{props.alt}</p>
            ) : (
                <></>
            )}
        </>
    );
}
