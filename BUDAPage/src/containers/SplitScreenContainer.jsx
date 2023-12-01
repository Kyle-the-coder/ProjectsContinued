import SplitScreenDisplay from "../components/SplitScreenDisplay";

export default function SplitScreenContainer({
  SlidableComp,
  StillComp,
  isScrollLeft = false,
  isScrollRight = false,
  bgColorEnd,
  bgColorBeg,
}) {
  console.log(isScrollLeft);
  console.log(SlidableComp);
  return (
    <>
      {isScrollRight && (
        <SplitScreenDisplay
          right={isScrollRight}
          left={false}
          bgColorEnd={bgColorEnd}
          bgColorBeg={bgColorBeg}
        >
          <SlidableComp />
          <StillComp />
        </SplitScreenDisplay>
      )}
      {isScrollLeft && (
        <SplitScreenDisplay
          right={false}
          left={isScrollLeft}
          bgColorEnd={bgColorEnd}
          bgColorBeg={bgColorBeg}
        >
          <SlidableComp />
          <StillComp />
        </SplitScreenDisplay>
      )}
    </>
  );
}
