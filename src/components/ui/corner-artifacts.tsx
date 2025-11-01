export const CornerArtifacts = () => {
    return <>
        <span className="absolute top-0 left-0 w-2 h-px bg-neutral-200 dark:bg-neutral-800 -translate-x-2"></span>
        <span className="absolute top-0 left-0 h-2 w-px bg-neutral-200 dark:bg-neutral-800 -translate-y-2"></span>

        <span className="absolute top-0 right-0 w-2 h-px bg-neutral-200 dark:bg-neutral-800 translate-x-2"></span>
        <span className="absolute top-0 right-0 h-2 w-px bg-neutral-200 dark:bg-neutral-800 -translate-y-2"></span>

        <span className="absolute bottom-0 left-0 w-2 h-px bg-neutral-200 dark:bg-neutral-800 -translate-x-2"></span>
        <span className="absolute bottom-0 left-0 h-2 w-px bg-neutral-200 dark:bg-neutral-800 translate-y-2"></span>

        <span className="absolute bottom-0 right-0 w-2 h-px bg-neutral-200 dark:bg-neutral-800 translate-x-2"></span>
        <span className="absolute bottom-0 right-0 h-2 w-px bg-neutral-200 dark:bg-neutral-800 translate-y-2"></span>
    </>
}