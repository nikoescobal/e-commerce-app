function Stopwatch() {
  const [timeState, setTimeState] = useState({
    status: false,
    ms: 0,
    seconds: 0,
    minutes: 0,
  });

  let stopms;
  let stopSeconds;
  let stopMinutes;

  const handleClick = () => {
    changeStatus();
    if (timeState.status) {
      clearInterval(stopms);
      clearInterval(stopSeconds);
      clearInterval(stopMinutes);
    } else {
      stopms = setInterval(changeMs, 1);
      stopSeconds = setInterval(changeSeconds, 1000);
      stopMinutes = setInterval(changeMinutes, 60000);
    }
  };

  const changeStatus = () => {
    return setTimeState((prevState) => {
      return { ...prevState, status: !prevState.status };
    });
  };

  const changeMs = () => {
    return setTimeState((prevState) => {
      if (prevState.ms === 99) {
        return { ...prevState, ms: 0 };
      } else {
        return { ...prevState, ms: prevState.ms + 1 };
      }
    });
  };

  const changeSeconds = () => {
    return setTimeState((prevState) => {
      if (prevState.seconds === 59) {
        return { ...prevState, seconds: 0 };
      } else {
        return { ...prevState, seconds: prevState.seconds + 1 };
      }
    });
  };

  const changeMinutes = () => {
    return setTimeState((prevState) => {
      if (prevState.seconds === 59) {
        return { ...prevState, minutes: 0 };
      } else {
        return { ...prevState, minutes: prevState.minutes + 1 };
      }
    });
  };

  const handleReset = () => {
    clearInterval(stopms);
    clearInterval(stopSeconds);
    clearInterval(stopMinutes);
    setTimeState({ seconds: 0, status: false, minutes: 0, ms: 0 });
  };

  return (
    <div>
      <h1>
        {timeState.minutes} : {timeState.seconds} . <span>{timeState.ms}</span>
      </h1>
      <button className="btn btn-lg btn-dark" onClick={handleClick}>
        {timeState.status === false ? 'Start' : 'Stop'}
      </button>
      <button className="btn btn-lg btn-dark" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default Stopwatch;
