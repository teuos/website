export async function onRequestPost({ request, env }) {
  if (!env.TURNSTILE_SECRET_KEY) {
    return jsonResponse({ success: false, error: "Turnstile secret key is missing." }, 500);
  }

  let body;

  try {
    body = await request.json();
  } catch {
    return jsonResponse({ success: false, error: "Invalid JSON request body." }, 400);
  }

  const token = typeof body.token === "string" ? body.token : "";

  if (!token) {
    return jsonResponse({ success: false, error: "Turnstile token is missing." }, 400);
  }

  const formData = new FormData();
  formData.append("secret", env.TURNSTILE_SECRET_KEY);
  formData.append("response", token);

  const clientIp = request.headers.get("CF-Connecting-IP");

  if (clientIp) {
    formData.append("remoteip", clientIp);
  }

  const verifyResponse = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body: formData,
    }
  );

  if (!verifyResponse.ok) {
    return jsonResponse({ success: false, error: "Turnstile verification failed." }, 502);
  }

  const result = await verifyResponse.json();

  if (!result.success) {
    return jsonResponse(
      {
        success: false,
        error: "Turnstile challenge was not accepted.",
        errorCodes: result["error-codes"] ?? [],
      },
      400
    );
  }

  return jsonResponse({ success: true });
}

export async function onRequest() {
  return jsonResponse({ success: false, error: "Method not allowed." }, 405);
}

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
