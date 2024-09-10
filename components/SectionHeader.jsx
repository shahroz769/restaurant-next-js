export default function SectionHeader({ sub, main }) {
    return (
        <div className="flex flex-col items-center gap-3.5">
            <h3 className="text-xl font-medium text-golden flex flex-col justify-center items-center gap-0.5 relative">
                <span className="before:content-[''] before:w-full before:h-px before:bg-golden before:block before:mx-auto after:content-[''] after:w-full after:h-px after:bg-golden after:block after:mx-auto">
                    {sub}
                </span>
            </h3>
            <h1 className="text-4xl font-normal">{main}</h1>
        </div>
    );
}
