export type ImgPropsType = {
    src: string;
    alt?: string;
};

export default function Img(props: ImgPropsType) {
    const imgExtList = ["png", "jpg", "jpeg", "gif", "svg"];
    const videoExtList = ["mp4", "gif"];
    const srcExt = props.src.split(".").pop();
    if(srcExt && imgExtList.includes(srcExt)){
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
    }else if(srcExt && videoExtList.includes(srcExt)){
        return (
            <>
                <video src={props.src} controls className="w-2/3" />
                {props.alt ? (
                    <p className="text-sm text-gray-400">{props.alt}</p>
                ) : (
                    <></>
                )}
            </>
        );
    }
}
