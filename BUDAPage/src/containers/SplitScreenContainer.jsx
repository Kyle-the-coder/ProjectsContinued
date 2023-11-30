import SplitScreen from "../HOC/SplitScreen";

export default function SplitScreenContainer({ Left, Right }) {
  return (
    <>
      <SplitScreen right={true} left={false}>
        <Left />
        <Right />
      </SplitScreen>
    </>
  );
}
