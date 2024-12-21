import React, { useRef } from "react";
import WorkoutSessions from "./WorkoutSessions"; // Assuming WorkoutSessions is another component

const Hero = () => {
  const workoutRef = useRef(null); // Reference for the WorkoutSessions section
  const planRef = useRef(null); // Reference for the "Find Your Plan" section

  const scrollToWorkout = () => {
    workoutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPlan = () => {
    planRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="hero">
        <div className="content">
          <div className="title">
            <h1>BEGIN</h1>
            <h1>YOUR</h1>
            <h1>TRANSFORMATION</h1>
          </div>
          <div className="sub-title">
            <p>Start your fitness journey with us</p>
            <br />
            <p>Unlock your full potential today</p>
          </div>
          <div className="buttons">
            <button onClick={scrollToWorkout}>Start your Journey</button>
            <button onClick={scrollToPlan}>Find Your Plan</button>
          </div>
        </div>
      </section>

      <WorkoutSessions ref={workoutRef} /> {/* WorkoutSessions Component */}
      <section ref={planRef} className="find-your-plan">
      </section>
    </>
  );
};

export default Hero;
