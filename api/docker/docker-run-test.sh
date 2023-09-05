#!/bin/bash
#==============================================================================
# File: docker-entrypoint-e2e-test.sh
# Author: Pedro Henrique Nieto da Silva
# Date: 05 set 2023
# Brief: Entrypoint for devices-service on testing environment
#==============================================================================

# -------------------------------------------
# Install dependencies and run prisma commands for tests
npm install --quiet --no-optional --no-fund --loglevel=error
# yarn install
# Generate Prisma Client
npx prisma generate
# Create migrations from Prisma schema, apply them to the database, generate artifacts
npx prisma migrate dev
# -------------------------------------------

# -------------------------------------------
# Exit immediately if a command exits with a non-zero status.
set -e

# -------------------------------------------
# Wait for database to start before continue
echo ""
echo "Sleep 3 seconds to wait database to be initialized ..."
sleep 3

echo "Executing E2E Tests..."
cd test/
npm run test:e2e --detectOpenHandles

# sleep 10
# echo "Executing Integration Tests..."
# npm run test --detectOpenHandles
exit $?