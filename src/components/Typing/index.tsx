import { useHookstate } from "@hookstate/core";
import { useEffect } from "react";
import { interval } from "../../utils/interval";
import { wait } from "../../utils/wait";
import { Dash } from "../styled/Dash";

export function Typing({
  text,
  startFull,
  idleDelay = 1000,
  typingDelay = 50,
}: {
  text: string;
  startFull?: boolean;
  idleDelay?: number;
  typingDelay?: number;
}) {
  const currentText = useHookstate(startFull ? text : "");
  const method = useHookstate<"add" | "subtract">(
    startFull ? "subtract" : "add"
  );
  const status = useHookstate<"typing" | "idle">("typing");

  useEffect(() => {
    const { stopExecution } = interval(async () => {
      let _currentText = currentText.get();
      const isOnEnd = _currentText.length >= text.length;
      const isOnBegin = _currentText.length <= 1;

      if (isOnEnd || isOnBegin) {
        status.set("idle");
        await wait(1000);

        isOnEnd && method.set("subtract");
        isOnBegin && method.set("add");
      }

      const _method = method.get();

      if (_method === "subtract" && _currentText.length >= 1)
        _currentText = _currentText.slice(0, -1);
      else _currentText += text[_currentText.length] || "";

      currentText.set(_currentText);
    }, 90);

    return stopExecution;
  }, []);

  return (
    <span>
      <span>{currentText.get()}</span>
      <Dash blink={status.get() === "idle"} />
    </span>
  );
}
