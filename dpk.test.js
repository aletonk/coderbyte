const crypto = require("crypto");
const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns an hash when given empty object", () => {
    const trivialKey = deterministicPartitionKey({});
    const expected = crypto
      .createHash("sha3-512")
      .update(JSON.stringify({}))
      .digest("hex");
    expect(trivialKey).toBe(expected);
  });

  it("Returns a partition key when given a partition key string", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: "test" });
    expect(trivialKey).toBe("test");
  });

  it("Returns partition key stringified when given a partition key object", () => {
    const input = { partitionKey: { test: "test" } };
    const trivialKey = deterministicPartitionKey(input);
    expect(trivialKey).toBe(JSON.stringify(input.partitionKey));
  });

  it("Returns an hash when partitionKey length is higher than 256", () => {
    const input = { partitionKey: "a".repeat(300) };
    const expected = crypto
      .createHash("sha3-512")
      .update(input.partitionKey)
      .digest("hex");
    const trivialKey = deterministicPartitionKey(input);
    expect(trivialKey).toBe(expected);
  });
});
