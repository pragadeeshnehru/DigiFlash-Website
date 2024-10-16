import Header from "./Header";

export default function Legacy() {
  return (
    <div className="font-display text-white m-auto px-4">
      <Header />
      <div>
        <h1 className=" py-4 text-6xl bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 text-transparent bg-clip-text">
          Legacy
        </h1>
        <p className="text-lg">This is the legacy page of DigiFlash</p>
      </div>
    </div>
  );
}
