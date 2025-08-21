import logo_bana from "../assets/logo_bana.png";

export default function ProfileBlock() {
  return (
    <>
      <div className="w-full flex gap-8 items-center justify-center p-8 bg-gray-100 rounded-2xl mt-6">
        <img
          src={logo_bana}
          alt="Lazp's Avatar"
          className="rounded-full w-[128px] h-[128px]"
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Lazp Yeh</h1>
          <a
            className="ibm-plex-mono transition-all duration-200 ease-in-out hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-pink-600"
            href="mailto:lazpytb@gmail.com"
          >
            lazpytb@gmail.com
          </a>
        </div>
      </div>
    </>
  );
}
