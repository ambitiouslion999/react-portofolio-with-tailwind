import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import kon from "../public/kon4.png";
import code from "../public/code.png";
import design from "../public/design.png";
import Image from "next/image";
import web1 from "../public/briefcase.png";
import web2 from "../public/craigslist.png";
import web3 from "../public/myanimelist.png";
import web4 from "../public/vacation_homerents.png";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Ambitious Lion's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
              <a
                  className="bg-gradient-to-r from-orange-500 dark:text-white to-red-500 text-black px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>

            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-orange-600 font-medium dark:text-orange-400 md:text-6xl">
              Ambitious Lion
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Aspiring developer and designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Current 3rd year student @ Brown University double majoring in Computer Science and Economics.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillGithub />
            </div>
            <div className="mx-auto bg-gradient-to-b from-orange-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={kon} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">About Me</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I am a person who loves to create. Whether it's making
              <span className="text-orange-400"> websites </span>
              or designing <span className="text-orange-400"> apps</span>,
              I love building things and gaining new skills and learning new technologies. 
              I have a deep and wide skillset in both the frontend and backend.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800 flex-1">
              <Image src={design} width={100} height={100} />
         

              <h3 className="text-xl py-4 text-orange-400">Design Tools I Use</h3>
              <p className="text-md text-black-800 dark:text-white py-1">Figma</p>
              <p className="text-md text-black-800 dark:text-white py-1">Balsamic</p>
              <p className="text-black-800 dark:text-white py-1">Photoshop</p>
              <p className="text-md text-black-800 dark:text-white py-1">Canva</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800 flex-1">
              <Image src={code} width={100} height={100} />

              <h4 className="text-xl py-4 text-orange-400">My Technology Skillset</h4>
              <p className="text-black dark:text-white py-1">Python</p>
              <p className="text-black dark:text-white py-1">Java</p>
              <p className="text-black dark:text-white py-1">HTML/CSS</p>
              <p className="text-black dark:text-white py-1">JavaScript</p>
              <p className="text-black dark:text-white py-1">React</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I have done various projects ranging from
              <span className="text-orange-400"> designing </span>
              mockups for apps to 
              <span className="text-orange-400"> developing </span>
              websites. The projects themselves are diverse since these projects are in industries such
              as the legal industry to the vacation home rental industry.
            </p>

          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <a href="">
              <Image
                className="rounded-lg"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://ambitiouslion999.github.io/responsive-redesign/">
              <Image
                className="rounded-lg"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                objectFit="cover"
                src={web2}
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://ambitiouslion999.github.io/UIUX-Development/">
              <Image
                className="rounded-lg"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                objectFit="cover"
                src={web3}
              />
              </a>
              
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://tragicpanda10.github.io/iterative-design/">
              <Image
                className="rounded-lg"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
              </a>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}
