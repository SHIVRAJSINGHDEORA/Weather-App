import "../Utilities/Utilits.css";
import SimpleWindIndicator from "simple-wind-indicator";
export default function Wind({ info }) {
  return (
    <div className="wind">
      <SimpleWindIndicator
        direction={info?.WindDirection || 0}
        speed={info?.WindSpeed || 0}
        variant="detailed"
        subtitle="Current"
        preset="dark"
      />
    </div>
  );
}
