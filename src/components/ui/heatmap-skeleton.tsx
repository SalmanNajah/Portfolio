const HeatmapSkeleton = () => {
    const block = "rounded-[2px] animate-pulse bg-neutral-200 dark:bg-neutral-800 border border-neutral-300/60 dark:border-neutral-700/40";
    const bar = "rounded-xs animate-pulse bg-neutral-200 dark:bg-neutral-800 border border-neutral-300/60 dark:border-neutral-700/40";
    return (
        <div className="flex flex-col" style={{ gap: '8px', fontSize: '14px', paddingBottom: '9px' }}>
            <div className="flex" style={{ paddingLeft: '30px', gap: '42px' }}>
                {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className={`h-[14px] w-[22px] ${bar}`} />
                ))}
            </div>

            <div
                className="grid"
                style={{
                    gridTemplateRows: 'repeat(7, 12px)',
                    gridAutoFlow: 'column',
                    gridAutoColumns: '12px',
                    gap: '3px',
                }}
            >
                {Array.from({ length: 53 * 7 }).map((_, i) => (
                    <div key={i} className={block} style={{ width: '13px', height: '13px' }} />
                ))}
            </div>

            <div className="flex justify-between items-center">
                <div className={`h-[14px] w-[230px] ${bar}`} />
                <div className="flex items-center" style={{ gap: '4px' }}>
                    <div className={`h-[13px] w-[26px] ${bar}`} />
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className={block} style={{ width: '12px', height: '12px' }} />
                    ))}
                    <div className={`h-[13px] w-[30px] ${bar}`} />
                </div>
            </div>
        </div>
    );
};

export default HeatmapSkeleton;
