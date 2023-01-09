//program a calculator in react?
this.setState({
    current: parseInt(current + e.target.attributes.getNamedItem('data-filter').value)
});


this.setState((prevState) => {
  const current = prevState.current;
  return {current: parseInt(current + value)};
});
