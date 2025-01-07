# Infinite Loop in useEffect Hook

This repository demonstrates a common mistake in React's `useEffect` hook that can lead to an infinite loop.  The example shows how an improper dependency array can cause the effect to run continuously.

## Bug Description
The `useEffect` hook is used incorrectly, causing the `setCount` function to be called repeatedly.  This results in an infinite loop because there is no condition to stop it. The solution explains how to resolve the issue.