import React from "react";
import data from "../../data/ThirdPoint.json";

const ThirdPointData = () => {
  return (
    <div className="flex flex-col gap-8">
      {Object.entries(data.partners).map(([key, value]) => (
        <div key={key} className="flex flex-col gap-4">
          <h2 className="sm:text-xl text-lg font-semibold mb-2">
            {key.replace(/_/g, " ")}
          </h2>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
            <div>
              <div className="flex flex-col gap-4">
                <h3 className="text-lg sm:mb-0 mb-3">
                  Advantages:
                </h3>
                <ul className="pl-5  flex flex-col gap-4 text-lg">
                  {value.advantages.map((advantage, index) => (
                    <li key={advantage} className="custom-bullet font-light">
                      {advantage}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 flex flex-col gap-4">
                <h3 className="text-lg sm:mb-0 mb-3">
                  Challenges:
                </h3>
                <ul className="pl-5 space-y-2 flex flex-col gap-4 text-lg">
                  {value.challenges.map((challenge, index) => (
                      <li key={challenge} className="custom-bullet font-light">
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium sm:mb-0 mb-3">
                Recommendations:
              </h3>
              <ul className="pl-5 space-y-2 flex flex-col gap-2 text-lg">
                {value.recommendations.map((recommendation, index) => (
                    <li key={recommendation} className="custom-bullet font-light">
                    {recommendation}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThirdPointData;
