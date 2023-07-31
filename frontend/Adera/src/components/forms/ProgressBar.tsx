interface ProgressBarProps { 
    progress: number;
}
export default function ProgressBar({ progress } : ProgressBarProps) {
    return (
      <div
        className="progress"
        role="progressbar"
        aria-label="Success example"
        aria-valuenow={25}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="progress-bar bg-indigo-600"
          style={{ width: progress + "%" }}
        >
          {progress}%
        </div>
      </div>
    );
}