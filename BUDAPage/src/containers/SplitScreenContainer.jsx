import SplitScreenDisplay from "../components/SplitScreenDisplay";

export default function SplitScreenContainer({
  StillComp,
  SlidableComp,
  isScrollLeft,
  isScrollRight,
  bgColor,
}) {
  return (
    <>
      {isScrollRight && (
        <SplitScreenDisplay
          right={isScrollRight}
          left={false}
          bgColor={bgColor}
        >
          <SlidableComp />
          <StillComp />
        </SplitScreenDisplay>
      )}
      {isScrollLeft && (
        <SplitScreenDisplay right={false} left={isScrollLeft} bgColor={bgColor}>
          {" "}
          <StillComp />
          <SlidableComp />
        </SplitScreenDisplay>
      )}
    </>
  );
}
