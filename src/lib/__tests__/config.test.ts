import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { loadConfig } from "../config";

describe("loadConfig", () => {
  const validEnv = {
    DATABASE_URL: "postgresql://user:pass@localhost:5432/testdb",
    NEXTAUTH_SECRET: "test-secret",
    NEXTAUTH_URL: "http://localhost:3000",
    X_CLIENT_ID: "test-x-client-id",
    X_CLIENT_SECRET: "test-x-client-secret",
    THREADS_APP_ID: "test-threads-app-id",
    THREADS_APP_SECRET: "test-threads-app-secret",
  };

  beforeEach(() => {
    // Clear all env vars we care about
    for (const key of Object.keys(validEnv)) {
      delete process.env[key];
    }
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns a valid config when all required env vars are set", () => {
    Object.assign(process.env, validEnv);

    const config = loadConfig();

    expect(config.database.url).toBe(validEnv.DATABASE_URL);
    expect(config.auth.secret).toBe(validEnv.NEXTAUTH_SECRET);
    expect(config.auth.url).toBe(validEnv.NEXTAUTH_URL);
    expect(config.x.clientId).toBe(validEnv.X_CLIENT_ID);
    expect(config.x.clientSecret).toBe(validEnv.X_CLIENT_SECRET);
    expect(config.threads.appId).toBe(validEnv.THREADS_APP_ID);
    expect(config.threads.appSecret).toBe(validEnv.THREADS_APP_SECRET);
  });

  it("uses default NEXTAUTH_URL when not provided", () => {
    const envWithoutUrl = { ...validEnv };
    delete (envWithoutUrl as Record<string, string | undefined>).NEXTAUTH_URL;
    Object.assign(process.env, envWithoutUrl);

    const config = loadConfig();

    expect(config.auth.url).toBe("http://localhost:3000");
  });

  it("throws ConfigError when required env vars are missing", () => {
    // Don't set any env vars
    expect(() => loadConfig()).toThrow("Missing required environment variables");
  });

  it("lists all missing vars in the error message", () => {
    try {
      loadConfig();
      expect.unreachable("should have thrown");
    } catch (error) {
      const message = (error as Error).message;
      expect(message).toContain("DATABASE_URL");
      expect(message).toContain("X_CLIENT_ID");
      expect(message).toContain("THREADS_APP_ID");
    }
  });

  it("throws when env vars are empty strings", () => {
    const emptyEnv = Object.fromEntries(Object.keys(validEnv).map((key) => [key, ""]));
    Object.assign(process.env, emptyEnv);

    expect(() => loadConfig()).toThrow("Missing required environment variables");
  });
});
