import SplitScreenDisplay from "../components/SplitScreenDisplay";

export default function SplitScreenContainer({
  StillComp,
  SlidableComp,
  isScrollLeft = false,
  isScrollRight = false,
  bgColor,
}) {
  console.log(StillComp);
  return (
    <>
      {isScrollRight && (
        <SplitScreenDisplay
          right={isScrollRight}
          left={!isScrollRight}
          bgColor={bgColor}
        >
          <SlidableComp />
          <StillComp />
        </SplitScreenDisplay>
      )}
      {isScrollLeft && (
        <SplitScreenDisplay
          right={!isScrollLeft}
          left={isScrollLeft}
          bgColor={bgColor}
        >
          {" "}
          <SlidableComp />
          <StillComp />
        </SplitScreenDisplay>
      )}
    </>
  );
}
