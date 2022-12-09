const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

const hash = (data) => crypto.createHash("sha3-512").update(data).digest("hex");

const getCandidateFromEvent = (event) => {
  if (!event) return undefined;
  if (event.partitionKey) return event.partitionKey;
  const data = JSON.stringify(event);
  return hash(data);
};

exports.deterministicPartitionKey = (event) => {
  let candidate = getCandidateFromEvent(event);

  if (!candidate) return TRIVIAL_PARTITION_KEY;

  if (typeof candidate !== "string") candidate = JSON.stringify(candidate);

  return candidate.length > MAX_PARTITION_KEY_LENGTH
    ? (candidate = hash(candidate))
    : candidate;
};
