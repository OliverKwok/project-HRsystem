export default function ProgressBar(props: any) {
//   const { bgcolor, completed } = props;

  const containerStyles: any = {
    height: 30,
    width: "45%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    // margin: 50,
  };

  const fillerStyles: any = {
    height: "100%",
    width: `${props.completed}%`,
    backgroundColor: props.bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
    transition: "width 1s ease-in-out",
  };

  const labelStyles: any = {
    padding: 15,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${props.completed}%`}</span>
      </div>
    </div>
  );
}
