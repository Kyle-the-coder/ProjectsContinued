import SplitScreen from "../HOC/SplitScreen";

export default function SplitScreenContainer({
  Left,
  Right,
  isScrollLeft,
  isScrollRight,
}) {
  return (
    <>
      <SplitScreen right={isScrollRight} left={isScrollLeft}>
        <Left />
        <Right />
      </SplitScreen>
    </>
  );
}
