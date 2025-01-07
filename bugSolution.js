```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Use a conditional to limit execution, or a different approach
    console.log("Executed once");
  }, []);

  return <div>Count: {count}</div>;
}
```