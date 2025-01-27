import React from "react";
import {useRouter} from "next/router";

const JobCard: React.FC<{ location: string, title: string, readingTime: number}> = ({
                                                                                                      location,
                                                                                                      title,
                                                                                                      readingTime
                                                                                                  }) => {
    const router = useRouter();
    const handleNavigationToJob = () => {
        router.push(`/job/${title}`);
    };
  return (
    <div className="card text-white mb-3" style={{ maxWidth: "18rem", backgroundColor: "white",  }}>
      <div className="card-body" style={{ backgroundColor: "#7EE0BE", borderRadius: "20px", margin: "10px", color: "black" }}>
        <h5 className="card-title">{location}</h5>
        <h3 className="card-subtitle mb-2">{title}</h3>
        <p className="card-text">{readingTime} min de lecture</p>
      </div>
      <div className="card-footer bg-transparent">
        <button className="btn btn-success me-2 mb-1" onClick={handleNavigationToJob} >Consulter l&#39;offre</button>
        <button className="btn btn-outline-dark">Postuler →</button>
      </div>
    </div>
  );
};

export default JobCard;