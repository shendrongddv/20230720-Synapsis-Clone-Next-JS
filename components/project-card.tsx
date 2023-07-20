import { LinkIcon, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardAlpha {
  id?: number;
  title: string;
  img: string;
}

export const ProjectCardAlpha: React.FC<ProjectCardAlpha> = ({
  id,
  title,
  img,
}) => {
  return (
    <div className="flex justify-center items-center relative w-full aspect-square rounded-xl group overflow-hidden border-2 border-slate-100">
      {/* Back */}
      <div className="w-full z-10 absolute top-0 left-0 bottom-0 right-0 h-full overflow-hidden aspect-square">
        <Image
          src={`/projects/${img}`}
          alt={title}
          width={400}
          height={400}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Front */}
      <div className="flex z-20 w-full transition duration-300 ease-linear group-hover:-translate-y-0 translate-y-[100%] opacity-75 group-hover:opacity-100 h-full justify-center text-center items-center flex-col p-6 bg-gradient-to-br from-sky-800 via-sky-600 to-sky-300">
        {/* ## */}
        <Link
          href="/"
          className="flex justify-center items-center h-16 w-16 rounded-full bg-white text-slate-800"
        >
          <LinkIcon className="h-6 w-6" />
        </Link>

        {/* ## */}
        <h3 className="h3 line-clamp-2 mt-4 text-white font-bold">{title}</h3>
        <span className="text-xs mt-2 text-white">Portfolio</span>
      </div>
    </div>
  );
};
