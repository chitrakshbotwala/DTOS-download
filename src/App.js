
function Title({ children }) {
  return <h1 className="text-4xl font-extrabold mb-4">
    {children}
  </h1>
}

function Subtitle({ children }) {
  return <h2 className="text-2xl font-bold mb-4">
    {children}
  </h2>
}

function Link({ children, ...props }) {
  return <a className="text-blue-500 hover:underline" {...props}>
    {children}
  </a>
}

function TwoColumnsSection({ id, children, className }) {
  return <section id={id} className={"flex flex-col xl:grid xl:grid-cols-2 max-w-screen-xl px-4 py-8 md:p-24 m-auto gap-12 xl:gap-8 " + className}>
    {children}
  </section>
}

function TwoColumns({ children, className }) {
  return <section className={"flex flex-col xl:grid xl:grid-cols-2 gap-12 xl:gap-8 pt-8 " + className}>
    {children}
  </section>
}

function Section({ id, children, className }) {
  return <section id={id} className={"max-w-screen-xl px-4 py-8 md:p-24 m-auto gap-12 xl:gap-8 " + className}>
    {children}
  </section>
}

function Separator() {
  return <div className="h-px bg-gray-800 w-full"></div>
}

/* --- Sections ------------------------------------------------------------- */

function NavBar() {
  return <nav className="sticky top-0 px-8 py-6 bg-gray-950 bg-opacity-70 border-b border-white border-opacity-10 backdrop-filter backdrop-blur">
    <div className="flex gap-4 items-center max-w-screen-xl m-auto">
      <img className="max-h-6" src="" alt="" />
      <div className="flex-grow"></div>
      <Link href="#goal">Goal</Link>
      <Link href="#features">Features</Link>
      <Link href="#technologies">Technologies</Link>
      <Link href="#community">Community</Link>
    </div>
  </nav>
}

function Hero() {
  return <TwoColumnsSection>
    <img class="p-8" src="laptop.png" alt="" />
    <div>
      <Title>DTOS</Title>

      <p>
        DTOS is a linux based distribution it uses arch and was my first ever distro project I learnt. NOTE: this is not Serenity the os im working on rn this is a previour linux based distro i made longgg back
      </p>

      <span className="flex gap-4 py-4">
        <a className="button" href="https://github.com/chitrakshbotwala">
          GitHub
        </a>

        <a className="button-secondary" href="https://github.com/DTOS-org/DTOS">
          Download the Latest Release*
        </a>
      </span>
      <span className="text-xs">
        * DTOS is alpha software, use it at your own risk.
      </span>
    </div>
  </TwoColumnsSection>
}

function Goals() {
  return <TwoColumnsSection id="goal">
    <div>
      <Title>Goal</Title>

      <div className="text-gray-400 mb-4">
        Written by <Link href="https://github.com/chitrakshbotwala"><img className="inline-block h-6 rounded-full me-1" src="me.jpg" alt="" />Chitraksh</Link>
      </div>

      <p className="mb-4">
        <b>DTOS</b> is a project that I have built using the tutorials by a very nice youtuber who basically taught me how to build oses and so im workig on my own kernel now .
      </p>

      <p className="mt-4">
        You might find images from a youtube channel DISTRO TUBE on the installer I've kept them there to pay a tribute to his channel as he helped me a lot in learning linux , so this was made using a tutorial and i did some other stuff on top of it , NOW I'm building my own kernel for serenity 
      </p>
    </div>

    <img className="rounded" src="capture2.png" alt="" />
  </TwoColumnsSection>
}



function App(props) {
  return <div className="flex flex-col items-center text-center capitalize w-16 gap-2">
    <img src={"apps/" + props.name + ".png"} alt="" />
    {props.name.replace('-', ' ')}
  </div>
}

function Beautiful() {
  return <TwoColumns>
    <div>
      <Subtitle>
        Beautiful
      </Subtitle>

      <p>
        DTOS has a beautiful and modern user interface. It's designed to be simple, intuitive, and easy to use.
      </p>
    </div>
    <img className="rounded" src="capture.png" alt="" />
  </TwoColumns>
}

function Applications() {
  return <TwoColumns>
    <div>
      <Subtitle>
        Wide Range of Apps
      </Subtitle>

      <p>
        From productivity tools to entertainment apps DTOS has something for everyone. Whether you're a developer or an everyday user, DTOS applications are crafted to enhance your experience and provide seamless functionality.
      </p>
    </div>

    <div className="flex justify-center flex-wrap gap-8 py-4">
      <App name="archive-manager" />
      <App name="calculator" />
      <App name="file-manager" />
      <App name="font-manager" />
      <App name="image-viewer" />
      <App name="media-player" />
      <App name="paint" />
      <App name="settings" />
      <App name="snake" />
      <App name="task-manager" />
      <App name="terminal" />
      <App name="text-editor" />
    </div>
  </TwoColumns>
}



function SocialItem(props) {
  return <a className="flex items-center hover:bg-blue-600 px-4 py-2 rounded" href={props.href}>
    <img className="w-8 mr-2" src={props.image} alt="" />
    <div className="font-bold">{props.name}</div>
  </a>
}

function Social() {
  return <Section id="community" className="bg-gray-900 p-16">
    <div className="flex flex-col items-center">
      <Title>
        Join the Community!
      </Title>
      <div className="grid grid-cols-2 md:flex md:flex-row gap-8 mt-8">
        <SocialItem image="github.svg" name="GitHub" href="https://github.com/chitrakshbotwala" />
        <SocialItem image="discord.svg" name="Discord" href="https://discord.com/invite/FMywNcPm" />

      </div>
    </div>
  </Section>
}

function Footer() {
  return <div className="text-center p-8 flex flex-col items-center gap-4">
    <img className="w-10" src="DTOS.svg" alt="" />
    "The delightful operating system"<br />
    Copyright © 2018-2019  Chitraksh Maheshwari <br />
    All rights reserved.<br />
    <a href="https://github.com/chitrakshbotwala"> github</a>
    <img className="w-10" src="glider.svg" alt="" />
  </div>
}

function Page() {
  return (
    <div className="bg-cover bg-center bg-fixed" style={{ backgroundImage: "url(wallpaper.png)" }}>
      <NavBar />
      <Hero />
      <div class="bg-gray-950">
        <Separator />
        <Goals />
        <Separator />
        <Separator />
        <Social />
        <Footer />
      </div>
    </div>
  );
}

export default Page;
