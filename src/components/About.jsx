import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#6b7280] text-black-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-white-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Jamie Truman, Please take a look around.</p>
          </div>
          <div>
            <p>
              {' '}
              I'm Jamie and I'm an aspiring web developer with a passion for
              technology and learning. I really enjoyed learning python
              throughout school and lost that knowledge when I decided to go to
              university for 2 years. I really didn't feel I was learning what I
              wanted to from university and decided to make a change to dev
              academy. I’ve learned so much and hope I can carry the skills I've
              learned over into my career. One of the skills I value the most
              from dev academy is being able to work in a team. Throughout the
              course we were paired up with people to work through tasks and I
              feel I have a much greater respect for working in teams and feel I
              am able to do it efficiently. I really look forward to meeting new
              people and continuing to learn in my new tech career.{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
