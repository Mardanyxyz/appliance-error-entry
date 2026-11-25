// The funniest honest appliance error: an oven whose thermostat lies.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "ERROR E7: Oven set to 200°C, actually 142°C. The thermostat has lied about every meal for two years. Your roast knew all along.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n");
console.log(line);
