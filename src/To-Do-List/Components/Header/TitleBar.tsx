interface Props {
    title: string,
};


export const TitleBar = ({ title }: Props) => {
    return (
        <div id='title-bar'>
            <h1>{title}</h1>
        </div>
    );
};

