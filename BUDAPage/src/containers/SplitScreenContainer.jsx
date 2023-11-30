import SplitScreenDisplay from "../components/SplitScreenDisplay";

export default function SplitScreenContainer({
  SlidableComp,
  StillComp,
  isScrollLeft = false,
  isScrollRight = false,
  bgColor,
}) {
  return (
    <>
      {isScrollLeft && (
        <SplitScreenDisplay
          right={isScrollRight}
          left={isScrollLeft}
          bgColor={bgColor}
        >
          {" "}
          <SlidableComp />
          <StillComp />
        </SplitScreenDisplay>
      )}
      {isScrollRight && (
        <SplitScreenDisplay
          right={isScrollRight}
          left={isScrollLeft}
          bgColor={bgColor}
        >
          <StillComp />
          <SlidableComp />
        </SplitScreenDisplay>
      )}
    </>
  );
}
