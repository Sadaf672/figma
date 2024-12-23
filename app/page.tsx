

 
import Image from "next/image"
import image from "/Images/pic1.jpg"
const Home = () => {
  return (
    <main>
      <section  className="flex gap-6 items-center mt-2 ml mx-10">
        <div>
          <h1 className="text-3xl font-bold">Hi i'm SADAF KHAN</h1>
          <p className="text-lg text-gray-700 mt-2" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Quasi deserunt maxime sunt vero officiis aspernatur ullam 
              adipisci, ipsam sequi?
          </p>
          <button className="bg-gray-950 text-white hover:bg-orange-600 rounded-md py-2 px-4 mt-4">contact us</button>
        </div>

        <div className="mt-10 ">
          <Image  src= "/Images/pic1.jpg" width={500}  height={500}alt="sadaf" />
          <p className="text-bold text-2xl text-red-800 mt-10 text-center">sadaf khan</p>

        </div>

      </section>
    </main>
    
    
  )
}

export default Home
