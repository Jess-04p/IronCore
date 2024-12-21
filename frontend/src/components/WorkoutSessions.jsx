import React, { forwardRef } from "react";

const WorkoutSessions = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSIONS</h1>
        <p>Track Your Progress, Achieve Your Goals</p>
        <br />
        <img src="/img5.jpg" alt="workout image" />
      </div>
      <br />
      <br />

      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>Join Our Top Programs & Transform Your Fitness</p>
        <br />
        <br />
        <div className="bootcamps">
          <div>
            <h4>HIIT Masterclass</h4>
            <p>
              Push your limits with High-Intensity Interval Training for maximum
              calorie burn.
            </p>
            <p>Duration: 6 Weeks | Trainer: Coach Alex</p>
          </div>

          <div>
            <h4>Strength Training Bootcamp</h4>
            <p>
              Build muscle and endurance with professional strength-focused
              routines.
            </p>
            <p>Duration: 4 Weeks | Trainer: Coach Sam</p>
          </div>

          <div>
            <h4>Cardio Blitz</h4>
            <p>
              Fun and fast-paced sessions designed to improve stamina and shed
              weight.
            </p>
            <p>Duration: 5 Weeks | Trainer: Coach Mia</p>
          </div>

          <div>
            <h4>Yoga for Balance</h4>
            <p>
              Improve flexibility, mental focus, and overall wellness through
              dynamic yoga.
            </p>
            <p>Duration: 8 Weeks | Trainer: Coach Anya</p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default WorkoutSessions;
