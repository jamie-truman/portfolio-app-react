import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#6b7280]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-black-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-black">
          Jamie Truman
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-black">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-black py-4 max-w-[700px]">
          I am a recent graduate of Dev Academy with a passion to learn and
          grow. Im hoping to get a Junior developer role to start my career in
          the tech industry.
        </p>
      </div>
    </div>
  )
}

export default Home
