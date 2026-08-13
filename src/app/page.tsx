import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.logoGroup}>
        <div className={styles.logoIcon}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M12 2L12 10M12 10L5 6M12 10L19 6M12 10L12 22M12 22L5 18M12 22L19 18"
              stroke="url(#beamsplitter-gradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient
                id="beamsplitter-gradient"
                x1="5"
                y1="2"
                x2="19"
                y2="22"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#7c5cfc" />
                <stop offset="0.5" stopColor="#00d4aa" />
                <stop offset="1" stopColor="#5ca0fc" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <h1 className={styles.title}>beamsplitter</h1>
      <p className={styles.subtitle}>
        One post. Two platforms. Clear insights. Mirror your content across X and Threads,
        then compare engagement performance side-by-side.
      </p>

      <div className={styles.platforms}>
        <div className={styles.platformBadge} id="platform-x">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-label="X (Twitter)">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <span>X (Twitter)</span>
        </div>
        <div className={styles.platformBadge} id="platform-threads">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-label="Threads">
            <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.274 3.285-.914 1.177-2.156 1.822-3.69 1.918-1.12.07-2.2-.15-3.035-.636-.998-.579-1.588-1.475-1.66-2.523-.13-1.91 1.416-3.482 4.108-3.674.935-.066 1.792-.028 2.567.103-.192-1.012-.687-1.738-1.49-2.115a3.82 3.82 0 0 0-1.796-.38c-1.612.044-2.998.78-3.078.819l-.89-1.845c.12-.058 1.905-1.035 3.978-1.09.735-.02 1.44.068 2.094.262 1.213.36 2.157 1.09 2.804 2.167.587.977.88 2.204.874 3.655.525.27.998.605 1.41 1.003 1.028.994 1.644 2.372 1.834 4.1.13 1.178-.047 2.727-1.14 4.217-1.058 1.44-2.538 2.344-4.476 2.835-1.038.263-2.178.397-3.387.407Zm-.14-7.558c-1.7.12-2.623.856-2.573 1.58.02.29.188.653.686.94.537.31 1.262.459 2.046.412.97-.06 1.77-.426 2.377-1.09.424-.464.735-1.08.93-1.848-.486-.087-1-.135-1.536-.135-.316 0-.633.02-.93.06v.08Z" />
          </svg>
          <span>Threads</span>
        </div>
      </div>

      <div className={styles.features}>
        <div className={styles.featureCard} id="feature-mirror">
          <div className={styles.featureIcon}>🪞</div>
          <div className={styles.featureTitle}>Mirror Posts</div>
          <div className={styles.featureDesc}>
            Write once, publish to both X and Threads simultaneously with a single click.
          </div>
        </div>
        <div className={styles.featureCard} id="feature-compare">
          <div className={styles.featureIcon}>📊</div>
          <div className={styles.featureTitle}>Compare Engagement</div>
          <div className={styles.featureDesc}>
            See likes, replies, and reposts side-by-side with normalized metrics across
            platforms.
          </div>
        </div>
        <div className={styles.featureCard} id="feature-insights">
          <div className={styles.featureIcon}>🔍</div>
          <div className={styles.featureTitle}>Track Over Time</div>
          <div className={styles.featureDesc}>
            Watch engagement grow with time-series charts for each mirrored post over 48
            hours.
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>
          Built with{" "}
          <a
            className={styles.footerLink}
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </a>{" "}
          · Apache 2.0 License
        </p>
      </footer>
    </div>
  );
}
