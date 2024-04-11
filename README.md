# Bitcoint Bot

A bot to manage bitcoin tades

## Overview

This repository consist of two main services

1. The bot - responsible for managing bitcoin's sma and trades
2. The application - responsible for managing accounts and displaying data to the user

There are few packages that are shared between the app for now it's just configuration.

## How to use

Make sure you have both [Bun.js](https://bun.sh/) and [Node.js](https://nodejs.org/en) installed. The bot runs on bunjs and the applicaton uses [Next.js](https://nextjs.org/) which requires on node.

### Turborepo

Because this repo is a monorepo using [Turborepo](https://turbo.build/repo) combined with [pnpm](https://pnpm.io/) to manage the services and packages, It would be helpful to read up on how each of these tools are used.

### Getting Started

Clone the repository:

```bash
  git clone https://github.com/Jdecristi/bitcoin-bot.git
```

Install dependancies:

```bash
pnpm install
```

Push DB Schema

```bash
pnpm db:push
```

## Contributions

This code base is not open for contributions as this is a personal project for my own personal development. However, this code is still open for anyone to see. I don't plan to hide any algorithms or code for transparencies sake.
