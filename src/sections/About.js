import { Github, LinkedIn } from "../components/ButtonIcon";

const About = () => (
  <section
    id="about"
    className="min-h-screen flex flex-col justify-center space-y-8"
  >
    <div className="space-y-2">
      <h1 className="text-4xl sm:text-5xl font-bold uppercase text-gray-800 text-center sm:text-left mb-5 sm:mb-0">
        Delza <span className="text-blue-300">Ananjaya</span>
      </h1>
      <h4 className="text-xl font-semibold text-gray-400 text-center sm:text-left">
        +62 895 3313 51968{" "}
        <span className="text-blue-300 ml-3">
          delza.roket50@gmail.com
        </span>
      </h4>
    </div>
    <p className="text-gray-400">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </p>
    <div className="space-x-3 flex">
      <LinkedIn />
      <Github />
    </div>
  </section>
);

export default About;
