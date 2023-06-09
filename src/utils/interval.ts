export function interval(fn: Function, time: number) {
  let stop = false;
  let justStarted = true;

  async function exec() {
    await fn();
    if (stop) return;
    mark();
  }

  function mark() {
    if (justStarted) {
      justStarted = false;
      exec();
    } else {
      setTimeout(exec, time);
    }
  }

  mark();

  return {
    stopExecution() {
      stop = true;
    },
  };
}
