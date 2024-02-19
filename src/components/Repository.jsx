function Repository(props) {
 
  let nameRepo = props.name.slice(0, 1).toUpperCase() + props.name.slice(1);
  return (
    <div className="bg-white mb-3 p-4 h-20 rounded ">
      <p className="text-sky-600 font-bold text-l">{nameRepo}</p>
    </div>
  );
}
export { Repository };
