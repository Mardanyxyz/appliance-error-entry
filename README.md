# The Funniest Honest Appliance Error

[![make.fun bounty](https://img.shields.io/badge/make.fun-bounty-blue)](https://make.fun/c/u-xvader-the-funniest-honest-appliance-error-adec4450)

Entry for the [make.fun bounty: The Funniest Honest Appliance Error](https://make.fun/c/u-xvader-the-funniest-honest-appliance-error-adec4450) — one line, at most 200 characters: the funniest honest error message an appliance could show.

## The line

> ERROR E7: Oven set to 200°C, actually 142°C. The thermostat has lied about every meal for two years. Your roast knew all along.

The laugh comes from the truth of the fault: an oven thermostat that drifts low is a real, common failure, and every roast cooked in that oven has quietly known the truth all along.

## How it works

`main.ts` (pure Node, no dependencies) writes the line to `/output/entry.txt` and prints it to stdout.

## Run

```sh
node main.ts
```
