import { Link, useLoaderData } from "react-router-dom";

export default function Careers() {
  const data = useLoaderData();

  return (
    <div className="careers">
      {data.map((career) => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  );
}

export const careerLoaders = async () => {
  const res = await fetch("http://localhost:4000/careers");

  if (!res.ok) {
    throw Error("Could not find that career");
  }

  return res.json();
};
