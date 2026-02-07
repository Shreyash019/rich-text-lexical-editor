import { Typography } from "@/libs";
const HeroSection = () => {
  return (
    <div>
      <Typography variant="h1" className="text-4xl md:text-5xl font-bold mb-4 text-center">
        Welcome to the Ultimate Rich Text Editor!
      </Typography>
      <Typography variant="h2" className="text-xl md:text-2xl text-gray-600 mb-8 text-center">
        Experience the power of a fully customizable, feature-rich editor built with Lexical.
      </Typography>
    </div>
  )
}

export default HeroSection