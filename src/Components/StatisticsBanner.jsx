import React from "react";
import { statisticsBannerData } from "../Constants/Data";
import useCounterAnimation from "../Hooks/useCounterAnimation";

const StatisticsBanner = () => {
  return (
    <section className="py-5 back-dark">
      <div className="container">
        <div className="row align-items-center">
          {statisticsBannerData.map((stat) => {
            const match = String(stat.number).match(/(\d+)([^\d]*)/);
            const targetValue = match ? parseInt(match[1], 10) : 0;
            const suffix = match && match[2] ? match[2] : "";
            const [count, ref] = useCounterAnimation(targetValue, 2000, 0);

            return (
              <div key={stat.id} className="col-6 col-lg-3 col-md-6 mb-4">
                {/* Mobile: Column layout, Desktop: Row layout */}
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-start text-center text-md-start">
                  {/* Icon */}
                  <div className="mb-3 mb-md-0 me-md-3">
                    <img
                      src={stat.icon}
                      alt={stat.label}
                      width="60"
                      height="60"
                      className="img-fluid"
                    />
                  </div>

                  {/* Text Content */}
                  <div>
                    {/* Number */}
                    <div className="mb-1">
                      <h2 className="fw-bold text-white mb-0" ref={ref}>
                        {count}
                        {suffix}
                      </h2>
                    </div>

                    {/* Label */}
                    <div>
                      <p className="text-white-50 fw-bold mb-0">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatisticsBanner;