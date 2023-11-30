import SplitScreenDisplay from "../components/SplitScreenDisplay";

export default function SplitScreenContainer({
  SlidableComp,
  StillComp,
  isScrollLeft = false,
  isScrollRight = false,
  bgColor,
}) {
  console.log(isScrollLeft);
  console.log(SlidableComp);
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
          <SlidableComp />
          <StillComp />
        </SplitScreenDisplay>
      )}
    </>
  );
}
