import { useState, useEffect } from "react";
import data from "./data";
import Contact from "./components/Contact";

function App() {
  const [pageData, setPageData] = useState(data);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const groupedByYear = data.works.reduce((acc, work) => {
      const year = work.year || "Unknown Year"; // Handle missing year
      if (!acc[year]) acc[year] = [];
      acc[year].push(work);
      return acc;
    }, {});

    const sortedYears = Object.keys(groupedByYear).sort((a, b) => b - a);

    setPageData({ works: groupedByYear, years: sortedYears });
  }, []);

  return (
    <div className="flex h-screen w-full flex-col items-start justify-start gap-2 p-6 font-[terminal-grotesque] text-3xl sm:text-6xl">
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="animate-pulse">a++s</h1>
        <div className="bg-accent size-2 rounded-full sm:size-3"></div>
        <h2 className="">diseño, desarrollo web, dirección creativa</h2>
      </div>
      {pageData.years &&
        pageData.years.map((year) => (
          <div key={year}>
            <h3 className="mt-2 text-base font-bold">{year}</h3>
            <ul className="">
              {pageData.works[year].map((work) => (
                <li key={work.id}>
                  <a
                    href={work.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-accent"
                  >
                    {work.title}
                  </a>
                  {work.details && (
                    <span className="text-base font-thin italic">
                      {" "}
                      ({work.details.es})
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

      <button
        className="hover:bg-accent bg-text text-background mt-8 px-2 text-base"
        onClick={() => setIsContactOpen(!isContactOpen)}
      >
        contacto
      </button>

      {isContactOpen && (
        <div className="bg-background fixed inset-0 flex h-screen w-screen items-center justify-center">
          <button
            className="hover:text-accent absolute right-4 top-4"
            onClick={() => setIsContactOpen(false)}
          >
            X
          </button>
          <Contact />
        </div>
      )}
    </div>
  );
}

export default App;
