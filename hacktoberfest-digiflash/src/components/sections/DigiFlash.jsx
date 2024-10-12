import members from "../../assets/members.jpeg"

export default function DigiFlash() {
  return (
    <section className="bg-inherit">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <p className="text-[14.25px] text-customDark mb-[17px] text-center">
      Tagline goes here...
    </p>

    <div className="flex flex-col md:flex-row gap-4 justify-center md:items-center items-center">
      <p className="text-[2rem] md:text-[51.08px] text-customDark font-bold text-center">
        ABOUT DIGIFLASH
      </p>
    </div>


    <p className="text-center text-lg mt-4">
      DigiFlash, the Computer Science Department Association at Dr. Mahalingam
      College of Engineering and Technology, is a vibrant platform committed to
      bridging academic learning with practical, real-world experience. Through
      a diverse range of activities such as coding challenges, hackathons,
      workshops, and tech talks led by industry experts, DigiFlash empowers
      students to deepen their knowledge and technical skills.
    </p>

    <p className="text-center text-lg mt-4 py-8">
      The association fosters a collaborative environment where students can
      explore cutting-edge technologies, engage in hands-on projects, and
      connect with professionals. By continually hosting innovative and
      relevant events, DigiFlash plays a crucial role in shaping the next
      generation of computer science leaders within the college community.
    </p>

    <img
      src={members}
      alt="Members"
      className="rounded-2xl mx-auto relative z-10"
    />
  </div>
</section>

  );
}
