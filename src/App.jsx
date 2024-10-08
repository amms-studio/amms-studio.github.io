import { useState, useEffect } from "react";
import data from "./data";

function App() {
  const [pageData, setPageData] = useState(data);

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
    <div className="flex h-screen w-full flex-col items-start justify-start gap-1 p-6 font-sans">
      <h1 className="animate-pulse">a++s</h1>
      <h2 className="">diseño, desarrollo web y dirección creativa</h2>
      {pageData.years &&
        pageData.years.map((year) => (
          <div key={year}>
            <h3 className="mt-2 text-xs font-bold">{year}</h3>
            <ul className="">
              {pageData.works[year].map((work) => (
                <li key={work.id}>
                  <a
                    href={work.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    {work.title}
                  </a>
                  {work.details && (
                    <span className="text-xs font-thin italic">
                      {" "}
                      ({work.details.es})
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
}

export default App;
