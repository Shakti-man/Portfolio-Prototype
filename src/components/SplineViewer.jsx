import Spline from "@splinetool/react-spline";

export default function SplineViewer() {
  return (
    <div className="w-full aspect-[4/3] md:aspect-[3/2] lg:aspect-[4/3] overflow-hidden">
      <Spline scene="https://prod.spline.design/IDylENBms8xJxR6a/scene.splinecode" />
    </div>
  );
}