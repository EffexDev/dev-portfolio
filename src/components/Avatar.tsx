export default function Image({ img }: { img: string }) {
    return (
        <>
            <img className="rounded-full w-10" src={img} alt="image" />
        </>
    );
}