# Intermittent ECONNRESET Errors in Express.js Server

This repository demonstrates a common issue in Express.js applications where ECONNRESET errors cause intermittent crashes, particularly under heavy load.  The bug is related to improper socket handling.

## Bug Description

The provided `bug.js` file contains a simple Express.js server. Under heavy load or with many concurrent connections, this server might crash due to ECONNRESET errors. This is because the server might not be handling socket closures gracefully.

## Solution

The `bugSolution.js` file provides a solution that addresses the issue of ECONNRESET errors.  The key improvement is employing proper socket handling using events and error handling to prevent unexpected closures and improve server stability.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `node bug.js` (to observe the bug). 
4. Simulate heavy load using tools like `ab` (Apache benchmark).
5. Run `node bugSolution.js` (to see the improved behavior).

By comparing the bug and solution code, you'll understand the importance of thorough socket handling in building robust Express.js applications.