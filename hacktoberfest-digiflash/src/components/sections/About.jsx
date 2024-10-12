export default function About() {
  const teamMembers = [
    {
      imageUrl: "https://via.placeholder.com/150",
      name: "Peter Parker",
      designation: "President",
    },
    {
      imageUrl: "https://via.placeholder.com/150",
      name: "Pragadeesh Nehru",
      designation: "Vice President",
    },
    {
      imageUrl: "https://via.placeholder.com/150",
      name: "Tony Stark",
      designation: "Secretary",
    },
    {
      imageUrl: "https://via.placeholder.com/150",
      name: "Walter White",
      designation: "Joint Secretary",
    },
  ];

  return (
    <div className="font-display text-white">
      <div className="bg-gradient-to-r from-green-400 to-orange-500 text-transparent bg-clip-text">
        <h1 className="text-6xl font-bold text-center mt-8">ABOUT US</h1>
      </div>

      <p className="text-4xl font-bold text-center mt-8">Our Team</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {teamMembers.map((member, index) => (
          <DarkModePerson
            key={index}
            imageUrl={member.imageUrl}
            name={member.name}
            designation={member.designation}
          />
        ))}
      </div>
    </div>
  );
}

const DarkModePerson = ({ imageUrl, name, designation }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-black text-white p-4 rounded-lg border border-gray-800 shadow-lg">
      <img
        src={imageUrl}
        alt={`${name}'s profile`}
        className="rounded-full w-32 h-32 border-4 border-gray-800 shadow-lg"
      />
      <h2 className="mt-4 text-2xl font-semibold">{name}</h2>
      <p className="mt-2 text-center text-gray-400">{designation}</p>
    </div>
  );
};
