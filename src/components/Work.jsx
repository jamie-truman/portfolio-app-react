import React from 'react'
import Github from '../assets/github.png'
import SubMinder from '../assets/subminder-page.png'
import Live from '../assets/live-button2.png'

const data = {
  name: 'SubMinder',
  image: SubMinder,
  github: 'https://github.com/tohora-2023/SubMinder/tree/dev',
  live: 'https://subminder-production.up.railway.app/',
  summary:
    'SubMinder was created to help out with managing your subscriptions and trails. I learned so much throughout the project including futhering my Redux and tailwind skills and also developing many of my human skills including Teamwork, Communication, Problem Solving. I really feel my problem solving skills excelled during this project as i was able to overcome many problems that came up. This final project of this course for me was really what brought the entire dev academy course together and where i really got to show what i had learned. ',
  techstack: 'JavaScript, Redux, Tailwind',
}

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-black-300 bg-[#6b7280]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-black-300 border-white-600">
            Projects
          </p>
          <p className="py-6">Check out My Recent Project</p>
        </div>

        {/* container for projects */}
        <div className="grid grid-cols-2 gap-20 border-">
          <img className="rounded-md" src={data.image} alt="SubminderPage" />
          <div>
            <div className="grid grid-cols-2">
              <div>
                <p className="mb-5 text-2xl font-bold">{data.name}</p>
              </div>
              <div className="flex justify-end space-x-5">
                <a href={data.github}>
                  <img className="h-auto w-8" src={Github} alt="github" />
                </a>

                <a href={data.live}>
                  <img className="h-auto w-8" src={Live} alt="live" />
                </a>
              </div>
            </div>
            <p className="mb-5 text-l font-bold">Full Stack Developer</p>
            <p className="mb-5">{data.summary}</p>
            <p className="mb-1 text-l font-bold">Tech Stack</p>
            <p className="mb-5">{data.techstack}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
