import GitHubCalendar from "react-github-calendar";
import TrackVisibility from "react-on-screen";

export const Github = () => {
  return (
    <div className="github">
      <TrackVisibility>
        {({ isVisible }) => (
          <div
            className={
              isVisible
                ? "animate__animated animate__slideInLeft"
                : "animate__animated animate__slideOutLeft"
            }
          >
            <h2>GitHub Calendar</h2>
            <GitHubCalendar
              username="prasarCodes"
              hideColorLegend="true"
              hideTotalCount="true"
            />
          </div>
        )}
      </TrackVisibility>
    </div>
  );
};
