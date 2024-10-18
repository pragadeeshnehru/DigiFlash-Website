import Footer from "./Footer";
import Header from "./Header";

export default function About() {
  const mainTeam = [
    {
      imageUrl: "/team/mohan.jpg",
      name: "Mohan Praveen K",
      designation: "President",
    },
    {
      imageUrl: "/team/Pragadeesh.jpg",
      name: "Pragadeesh Nehru",
      designation: "Vice President",
    },
    {
      imageUrl: "/team/murali.jpg",
      name: "Murali Krishna A",
      designation: "Secretary",
    },
    {
      imageUrl: "/team/arul.jpg",
      name: "Arulnandhi K",
      designation: "Joint Secretary",
    },
    {
      imageUrl: "/team/udhayan.jpg",
      name: "Udhayan S",
      designation: "Treasurer",
    },
    {
      imageUrl: "/team/enpa.jpg",
      name: "Enpatamilan S",
      designation: "Student Editor & Digitimes Head",
    },
  ];

  const magTeam = [
    {
      imageUrl: "/team/nandhini.jpg",
      name: "Kirubaa Nandhini P A",
    },
    {
      imageUrl: "/team/namitha.jpg",
      name: "Namitha C",
    },
  ];

  return (
    <div className="font-display text-white">
      <Header />
      <div className="bg-gradient-to-r from-green-400 to-orange-500 text-transparent bg-clip-text">
        <h1 className="text-6xl font-bold text-center mt-8">ABOUT US</h1>
      </div>

      <p className="text-4xl font-bold text-center mt-8">Our Team</p>

      <div className="flex flex-wrap justify-center gap-6 p-4 ">
        {mainTeam.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 bg-black rounded-lg"
          >
            <DarkModePerson
              imageUrl={member.imageUrl}
              name={member.name}
              designation={member.designation}
            />
          </div>
        ))}
      </div>
      <p className="text-2xl font-bold text-center mt-8">
        Digitimes Coordinators
      </p>
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {magTeam.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 bg-black"
          >
            <DarkModePerson imageUrl={member.imageUrl} name={member.name} />
          </div>
        ))}
      </div>
      <Footer />
      
    </div>
  );
}

const DarkModePerson = ({ imageUrl, name, designation }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-transparent text-white p-4">
      <img
        src={imageUrl}
        alt={`${name}'s profile`}
        className="rounded-full w-32 h-32 border-4 border-gray-800 shadow-lg"
      />
      <h2 className="mt-4 text-xl font-semibold">{name}</h2>
      <p className="mt-2 text-center text-gray-400">{designation}</p>
    </div>
  );
};
