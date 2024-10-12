import Button from "../ui/glow-button";

export default function Hacktoberfest() {
  const details = [
    {
      title: "WebZilla 2.0",
      description: "A web design event",
      image: "https://via.placeholder.com/150",
      link: "https://google.com",
    },
    {
      title: "Top Coder Dupe Coder",
      description: "Fun coding event",
      image: "https://via.placeholder.com/150",
      link: "https://google.com",
    },
    {
      title: "Return of Coder",
      description: "Another coding event",
      image: "https://via.placeholder.com/150",
      link: "https://google.com",
    },
    {
      title: "Thought Bubble",
      description: "Technical Quiz competition",
      image: "https://via.placeholder.com/150",
      link: "https://google.com",
    },
    {
      title: "Paper Pulse",
      description: "Paper Presentation",
      image: "https://via.placeholder.com/150",
      link: "https://google.com",
    },
    {
      title: "Connextix",
      description: "Connections game ...",
      image: "https://via.placeholder.com/150",
      link: "https://google.com",
    },
    {
      title: "Thirai Thiruvizha",
      description: "Cinema Cinema Cinema",
      image: "https://via.placeholder.com/150",
      link: "https://google.com",
    },
    {
      title: "Frozen Pixels",
      description: "Logo Design Competition",
      image: "https://via.placeholder.com/150",
      link: "https://google.com",
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-4 p-4">
      {details.map((contest, index) => (
        <div key={index} className="flex justify-center">
          <ContestCards
            title={contest.title}
            description={contest.description}
            image={contest.image}
            link={contest.link}
          />
        </div>
      ))}
    </div>
  );
}

function ContestCards({ title, description, image, link }) {
  return (
    <div className="w-full flex flex-col sm:flex-row max-w-full text-white border rounded-lg shadow bg-[#0f0f0f] border-gray-700">
      <div className="w-full">
        <img className="rounded-t-lg w-full h-auto" src={image} alt="" />
      </div>
      <div className="p-5 w-full">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-400">{description}</p>
        <a href={link}>
          <Button>Register</Button>
        </a>
      </div>
    </div>
  );
}
