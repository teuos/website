import { useCallback, useState } from "react";
import Turnstile from "../components/Turnstile";

function TurnstileTest() {
  const [token, setToken] = useState("");
  const [status, setStatus] = useState("Waiting for Turnstile.");

  const verifyToken = useCallback(async () => {
    if (!token) {
      setStatus("Complete the Turnstile challenge first.");
      return;
    }

    setStatus("Checking token with the Worker...");

    try {
      const response = await fetch("/api/verify-turnstile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });
      const result = await response.json();

      setStatus(result.success ? "Turnstile verification passed." : `Turnstile failed: ${result.error}`);
    } catch {
      setStatus("Could not reach the Turnstile verification endpoint.");
    }
  }, [token]);

  return (
    <section className="intro-section">
      <div className="intro-content">
        <h1>Turnstile Test</h1>
        <p>{status}</p>
        <Turnstile onVerify={setToken} />
        <br />
        <button type="button" onClick={verifyToken}>
          Verify token
        </button>
      </div>
    </section>
  );
}

export default TurnstileTest;
