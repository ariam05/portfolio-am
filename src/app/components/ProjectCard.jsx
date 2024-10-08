import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const ProjectCard = ({ imgURL, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="h-48 md:h-60 rounded-t-xl relative group" // Adjusted height
        style={{ background: `url(${imgURL})`, backgroundSize: "cover" }}
      >
        <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
          <Link href={gitUrl} className='h-12 w-12 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'> {/* Adjusted button size */}
            <CodeBracketIcon className="h-8 w-8 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link href={previewUrl} className='h-12 w-12 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'> {/* Adjusted button size */}
            <EyeIcon className="h-8 w-8 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className='text-white rounded-b-xl mt-2 bg-[#0d0625] py-4 px-3'> {/* Adjusted margins and paddings */}
        <h5 className='text-lg font-semibold mb-1'>{title}</h5> {/* Adjusted heading size */}
        <p className='text-[#ADB7BE] text-sm'>{description}</p> {/* Adjusted text size */}
      </div>
    </div>
  )
}

export default ProjectCard;
