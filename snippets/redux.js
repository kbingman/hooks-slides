const Example = () => {
  const [state, dispatch] = useRedux();
  const { items } = state;
 
  return (
    <div>
      {items.map(item => <div>{item.title}</div>})}
    </div>
  );
};