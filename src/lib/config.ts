/**
 * Typed application configuration.
 * Reads from environment variables with validation.
 */

export interface AppConfig {
  database: {
    url: string;
  };
  auth: {
    secret: string;
    url: string;
  };
  x: {
    clientId: string;
    clientSecret: string;
  };
  threads: {
    appId: string;
    appSecret: string;
  };
}

class ConfigError extends Error {
  constructor(missingVars: string[]) {
    super(
      `Missing required environment variables: ${missingVars.join(", ")}. ` +
        `Copy .env.example to .env and fill in the values.`
    );
    this.name = "ConfigError";
  }
}

function optionalEnv(name: string, fallback: string): string {
  const value = process.env[name];
  return value && value.trim() !== "" ? value : fallback;
}

/**
 * Load and validate the application configuration from environment variables.
 * Throws `ConfigError` if any required variable is missing.
 */
export function loadConfig(): AppConfig {
  const missing: string[] = [];
  const get = (name: string): string => {
    const value = process.env[name];
    if (!value || value.trim() === "") {
      missing.push(name);
      return "";
    }
    return value;
  };

  const config: AppConfig = {
    database: {
      url: get("DATABASE_URL"),
    },
    auth: {
      secret: get("NEXTAUTH_SECRET"),
      url: optionalEnv("NEXTAUTH_URL", "http://localhost:3000"),
    },
    x: {
      clientId: get("X_CLIENT_ID"),
      clientSecret: get("X_CLIENT_SECRET"),
    },
    threads: {
      appId: get("THREADS_APP_ID"),
      appSecret: get("THREADS_APP_SECRET"),
    },
  };

  if (missing.length > 0) {
    throw new ConfigError(missing);
  }

  return config;
}
