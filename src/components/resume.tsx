import { IconDownload } from "@tabler/icons-react";
import Link from "next/dist/client/link";

const Resume = () => {
    const RESUME_PDF_URL = "/resume.pdf";

    return (
        <div>
            <Link href={RESUME_PDF_URL} target="blank">
                <button  className="px-4 dark:bg-white bg-black text-white dark:text-black rounded flex py-2 gap-3 cursor-pointer text-sm md:text-base"><IconDownload width={20} height={20}/> Resume</button>
            </Link>
        </div>
    );
}

export default Resume;